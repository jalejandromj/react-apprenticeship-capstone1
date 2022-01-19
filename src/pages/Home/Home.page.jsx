import React, { useRef, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../state/UserContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import './Home.styles.css';
import VideoCard from '../../components/VideoCard';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  //const [mockVideos, setMockVideos] = useState(null);
  const userContextVal = useContext(UserContext);

  const date = new Date();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = weekday[date.getDay()];

  //GET real videos from YT API
  const params = {
    maxResults: 8,
    part: 'snippet',
    type: 'video',
    q: userContextVal.search,
  };
  const { response } = useYoutubeApi(
    'https://www.xgoogleapis.com/youtube/v3/search',
    params
  );
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (response) {
      setVideos(response.data.items);
    }
    /*=====START call MOCK videos=====*/
    /*axios.get('https://raw.githubusercontent.com/wizelineacademy/react-gist/main/capstone-project-1/mocks/youtube-videos-mock.json')
    .then(function (response) {
      // handle success
      console.log("[SUCCESS] Videos retrieved...", response);
      setVideos(response.data.items);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });*/
    /*=====END call MOCK videos=====*/
  }, [response]);

  return (
    <section
      data-testid="homePage"
      className="section homepage"
      ref={sectionRef}
    >
      <Container fluid>
        <Row>
          <Col sm={12}>
            <h4
              className={userContextVal.theme ? 'blue_theme' : 'discreet_theme'}
            >
              Welcome and wonderful {day}! Enjoy your &quot;{userContextVal.search}&quot;
              videos...
            </h4>
          </Col>
        </Row>
        {videos ? (
          <Row>
            {videos.map((vid) => (
              <Col
                key={vid.etag}
                sm={12}
                md={4}
                lg={3}
                style={{ padding: '20px 10px' }}
              >
                <VideoCard
                  name={vid.snippet.title}
                  channel={vid.snippet.channelTitle}
                  description={vid.snippet.description}
                  img={vid.snippet.thumbnails.high.url}
                  mini={false}
                  onClick={() => history.push(`/watch-video/${vid.id.videoId}`)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          /*Show some placeholder meanwhile no videos retrieved*/
          <Row>
            <Col sm={12}>
              <p
                className={
                  userContextVal.theme ? 'blue_theme' : 'discreet_theme'
                }
              >
                Getting videos fresh from the oven...!
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default HomePage;
