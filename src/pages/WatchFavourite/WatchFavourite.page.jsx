import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserContext from '../../state/UserContext';
import VideoCard from '../../components/VideoCard';

const WatchVideoPageLayout = styled.div`
  display: grid;
  display: -ms-grid;
  height: 100%;

  grid-row-gap: 2%;

  grid-template-rows: 70% 30%;
  -ms-grid-rows: 60% 40%;

  grid-template-columns: 75% 25%;
  -ms-grid-columns: 75% 25%;

  grid-template-areas:
    'player relatedVideos'
    'details relatedVideos';
`;

const RelatedVideos = styled.div`
  grid-area: relatedVideos;
  overflow-y: scroll;
  padding: 0px 8%;
`;

const VideoDetails = styled.div`
  grid-area: details;
  overflow-y: scroll;
`;

function WatchFavouritePage() {
  const history = useHistory();
  var { videoId } = useParams();
  const sectionRef = useRef(null);
  const [relatedVideos, setRelatedVideos] = useState();
  const [videoDetails, setVideoDetails] = useState(null); //Call the API for the details...
  const [stateVideoId, setStateVideoId] = useState(null);
  const { theme } = useContext(UserContext);

  useEffect(() => {
    if (stateVideoId) videoId = stateVideoId;

    console.log('[EXEC] Get video details...');
    axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: process.env.REACT_APP_YT_API_KEY,
          part: 'snippet',
          id: videoId,
        },
      })
      .then(function (response) {
        console.log('[SUCCESS] Video details retrieved...', response);
        setVideoDetails(response.data.items[0]);
        console.log('[EXEC] Get other FAVOURITES...');
        //I want to retrieve ALL favourites, except this one, so...
        let storedFavourites = JSON.parse(localStorage.getItem('favourites'));
        let indexToDel = storedFavourites.indexOf(videoId);
        storedFavourites.splice(indexToDel, 1);
        //Prepare the stored Id's as a string to call API...
        let queryFavVidString = storedFavourites.join();
        // handle success
        axios
          .get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              key: process.env.REACT_APP_YT_API_KEY,
              part: 'snippet',
              id: queryFavVidString,
            },
          })
          .then(function (response) {
            // handle success
            console.log('[SUCCESS] Other FAVOURITE retrieved...', response);
            setRelatedVideos(response.data.items);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    history.push(`/favourites/watch-video/${videoId}`);
    setStateVideoId(videoId);
  }, [stateVideoId]);

  return (
    <section
      data-testid="watchFavouritePage"
      className="section watchfavouritepage"
      ref={sectionRef}
    >
      <WatchVideoPageLayout>
        <div>
          <iframe
            id="ytplayer"
            title="watchVideoIframe"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <RelatedVideos>
          <Row>
            <Col sm={12}>
              <h4 className={theme ? 'blue_theme' : 'discreet_theme'}>
                Other Favourites
              </h4>
            </Col>
          </Row>
          {relatedVideos ? (
            relatedVideos.map((vid) => {
              if (vid.snippet) {
                return (
                  <Row style={{ paddingBottom: '30px' }}>
                    <Col sm={12}>
                      <VideoCard
                        name={vid.snippet.title}
                        img={vid.snippet.thumbnails.default.url}
                        onClick={() => {
                          setStateVideoId(vid.id);
                        }}
                        mini
                      />
                    </Col>
                  </Row>
                );
              }
            })
          ) : (
            <p>Loading...</p>
          )}
        </RelatedVideos>
        <VideoDetails>
          {videoDetails ? (
            <>
              <Row>
                <Col sm={12}>
                  <h2 className={theme ? 'blue_theme' : 'discreet_theme'}>
                    {videoDetails.snippet.title}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <p className={theme ? 'blue_theme' : 'discreet_theme'}>
                    {videoDetails.snippet.description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <h4 className={theme ? 'blue_theme' : 'discreet_theme'}>
                    {videoDetails.snippet.channelTitle}
                  </h4>
                </Col>
              </Row>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </VideoDetails>
      </WatchVideoPageLayout>
    </section>
  );
}

export default WatchFavouritePage;
