import React, { useEffect, useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import UserContext from '../../state/UserContext';
import './Favourites.styles.css';
import VideoCard from '../../components/VideoCard';

function FavouritesPage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const storedFavourites = JSON.parse(localStorage.getItem('favourites'));
  const { theme } = useContext(UserContext);

  //If there is ANY favourite video...
  if (storedFavourites) var queryFavVidString = storedFavourites.join();

  //GET FAVOURITE videos information from YT API...
  const params = {
    maxResults: null,
    part: 'snippet',
    type: null,
    q: null,
    id: queryFavVidString,
  };
  const { response } = useYoutubeApi(
    'https://www.xgoogleapis.com/youtube/v3/videos',
    params
  );
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (response) {
      setVideos(response.data.items);
    }
  }, [response]);

  return (
    <section
      data-testid="favouritesPage"
      className="section favouritespage"
      ref={sectionRef}
    >
      <Container fluid>
        <Row>
          <Col sm={12}>
            <h2 className={theme ? 'blue_theme' : 'discreet_theme'}>
              Favourites
            </h2>
          </Col>
        </Row>
        {videos ? (
          <Row>
            {videos.map((vid) => (
              <Col
                key={vid.etag}
                sm={12}
                md={3}
                lg={4}
                style={{ padding: '20px 10px' }}
              >
                <VideoCard
                  name={vid.snippet.title}
                  channel={vid.snippet.channelTitle}
                  description={vid.snippet.description}
                  img={vid.snippet.thumbnails.high.url}
                  mini={false}
                  onClick={(e) =>
                    history.push(`/favourites/watch-video/${vid.id}`)
                  }
                />
              </Col>
            ))}
          </Row>
        ) : (
          /*Show some placeholder meanwhile no videos retrieved*/
          <Row>
            <Col sm={12}>
              <p className={theme ? 'blue_theme' : 'discreet_theme'}>
                You don't have any favourite video :(!
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default FavouritesPage;
