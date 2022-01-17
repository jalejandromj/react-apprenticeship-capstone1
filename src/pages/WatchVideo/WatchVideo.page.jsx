import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VideoCard from '../../components/VideoCard';

import { useAuth } from '../../providers/Auth';

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
    "player relatedVideos"
    "details relatedVideos";
`

const RelatedVideos = styled.div`
  grid-area: relatedVideos;
  overflow-y: scroll;
  padding: 0px 8%;
`

const VideoDetails = styled.div`
  grid-area: details;
  overflow-y: scroll;
`

function isAlreadyFav(currentVid){
  let storedFavourites = JSON.parse(localStorage.getItem('favourites'));

  if(storedFavourites){ //If I have previously fav ANY video...
    let videoAlreadyFav = storedFavourites.includes(currentVid);//search in my previous fav videos for coincidence

    if(videoAlreadyFav){ //Already a fav video
      return 1;
    }else{ //New fav video
      return 0;
    }
  }else{ //First time setting a favourite...
      return 3;
  }
}

function WatchVideoPage(props) {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  var { videoId } = useParams();
  const [stateVideoId, setStateVideoId] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState();
  const [videoDetails, setVideoDetails] = useState(null);//Call the API for the details...
  const [favVideo, setFavVideo] = useState(false);

  useEffect(() => {
    if((videoId !== stateVideoId)){
      if(stateVideoId)
        videoId = stateVideoId;

      if(isAlreadyFav(videoId) === 1)
        setFavVideo(true);
      else{
        setFavVideo(false);
      }

      console.log("[EXEC] Get video details...");
      axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: process.env.REACT_APP_YT_API_KEY,
          part: "snippet",
          id: videoId,
        }
      })
      .then(function (response) {
        console.log("[SUCCESS] Video details retrieved...", response);
        console.log("[EXEC] Get related videos...");
        setVideoDetails(response.data.items[0]);
        // handle success
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.REACT_APP_YT_API_KEY,
            maxResults: 5,
            part: "snippet",
            relatedToVideoId: videoId,
            type: "video",
          }
        })
        .then(function (response) {
          // handle success
          console.log("[SUCCESS] Related videos retrieved...", response);
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
    }
    history.push(`/watch-video/${videoId}`);
    setStateVideoId(videoId);
  }, [stateVideoId, favVideo]);

  function setFavourite(videoToFav){
    console.log("[EXEC] Set Favourite funct");
    let storedFavourites = JSON.parse(localStorage.getItem('favourites'));

    if(isAlreadyFav(videoToFav) === 1){
      alert('Alredy fav');
    }else if(isAlreadyFav(videoToFav) === 0){ 
      console.log("Set Favourite");
      storedFavourites.push(videoToFav);
      localStorage.setItem('favourites', JSON.stringify(storedFavourites));
      setFavVideo(true);
    }else if(isAlreadyFav(videoToFav) === 3){
      console.log("Set FIRST Favourite");
      storedFavourites = [];
      storedFavourites.push(videoToFav);
      localStorage.setItem('favourites', JSON.stringify(storedFavourites));
      setFavVideo(true);
    }

    console.log(JSON.parse(localStorage.getItem('favourites')));
  }

  function removeFavourite(videoToFav){
    console.log("[EXEC] Remove Favourite funct");
    let storedFavourites = JSON.parse(localStorage.getItem('favourites'));
    let indexToDel = storedFavourites.indexOf(videoToFav);
    storedFavourites.splice(indexToDel, 1); 
    localStorage.setItem('favourites', JSON.stringify(storedFavourites));

    setFavVideo(false);
    console.log(JSON.parse(localStorage.getItem('favourites')));
  }

  return (
    <section data-testid="watchVideoPage" className="section watchvideopage" ref={sectionRef}>
      <WatchVideoPageLayout>
        <div>
          <iframe id="ytplayer" title="watchVideoIframe" type="text/html" width="100%" height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen/>
        </div>
        <RelatedVideos>
          {relatedVideos ? (
            relatedVideos.map((vid) => {
              if(vid.snippet){
                return (
                  <Row style={{paddingBottom: "30px"}}>
                    <Col sm={12}>
                      <VideoCard name={vid.snippet.title} 
                                 img={vid.snippet.thumbnails.default.url}
                                 onClick={(e) => { setStateVideoId(vid.id.videoId)}}
                                 mini
                      />
                    </Col>
                  </Row>
                )
              }
            })
          ):
            <p>Loading...</p>
          }
        </RelatedVideos>
        <VideoDetails>
            <Row>
              <Col sm={12} style={{textAlign: "right"}}>
              {authenticated ? 
                [(favVideo ? 
                  <Button variant="secondary" onClick={(e) => removeFavourite(stateVideoId)}>Un-favourite</Button>
                :
                  <Button variant="secondary" onClick={(e) => setFavourite(stateVideoId)}>Favourite</Button>
                )]
              :
                null  
              }
              </Col>
            </Row>
          {videoDetails ? (
            <>
            <Row>
              <Col sm={12}>
                <h2>{videoDetails.snippet.title}</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <p>{videoDetails.snippet.description}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h4>{videoDetails.snippet.channelTitle}</h4>
              </Col>
            </Row>
            </>
          ):
            <p>Loading...</p>
          }
        </VideoDetails>
      </WatchVideoPageLayout>
      {/*<Container fluid>
        <Row>
          <Col sm={12}>WatchVideo Page {videoId} </Col>
        </Row>
      </Container>*/}
    </section>
  );
}

export default WatchVideoPage;
