import React, { useRef, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../state/UserContext';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.styles.css';
import VideoCard from '../../components/VideoCard';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const [mockVideos, setMockVideos] = useState(null);
  const [videos, setVideos] = useState(null);
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

  useEffect(() => {
    //GET real videos from YT API
    console.log('[EXEC] GET videos...');
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.REACT_APP_YT_API_KEY,
          maxResults: 10,
          part: 'snippet',
          type: 'video',
          q: userContextVal.search,
        },
      })
      .then(function (response) {
        // handle success
        console.log('[SUCCESS] Videos retrieved...', response);
        setVideos(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

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
  }, [userContextVal.search]);

  /*function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }*/

  //alert(value);

  return (
    <section
      data-testid="homePage"
      className="section homepage"
      ref={sectionRef}
    >
      <Container fluid>
        <Row>
          <Col sm={12}>
            Welcome and wonderful {day}! Enjoy your {userContextVal.search}{' '}
            videos...
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
                    history.push(`/watch-video/${vid.id.videoId}`)
                  }
                />
              </Col>
            ))}
          </Row>
        ) : (
          /*Show some placeholder meanwhile no videos retrieved*/
          <Row>
            <Col sm={12}>Loading...</Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default HomePage;
