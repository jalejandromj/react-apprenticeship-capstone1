import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Favourites.styles.css';
import VideoCard from '../../components/VideoCard';

function FavouritesPage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const [videos, setVideos] = useState(null);
  const storedFavourites = JSON.parse(localStorage.getItem('favourites'));

  useEffect(() => {
    console.log(storedFavourites);
    if (storedFavourites) {
      //If there is ANY favourite video...
      let queryFavVidString = storedFavourites.join();
      console.log('[EXEC] GET favourite videos...');
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
          console.log('[SUCCESS] Favourite Videos retrieved...', response);
          setVideos(response.data.items);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, []);

  return (
    <section
      data-testid="favouritesPage"
      className="section favouritespage"
      ref={sectionRef}
    >
      <Container fluid>
        <Row>
          <Col sm={12}>
            <h2>Favourites</h2>
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
            <Col sm={12}>You don't have any favourite video!</Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default FavouritesPage;
