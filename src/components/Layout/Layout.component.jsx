import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { useAuth } from '../../providers/Auth';
import UserContext from '../../state/UserContext';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import './Layout.styles.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const { authenticated,   logout } = useAuth();
  const userContextVal = useContext(UserContext);
  const history = useHistory();
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const checked = userContextVal.theme;

  function handleSearchSubmit(event){
    event.preventDefault();
    //Update Context search, re-render and autmatic trigger Home view initial search
    userContextVal.setSearch(event.target.search.value);
  }

  return (
    <div id="layout" className={displaySidebar ? `sidebar_display` : `sidebar_hidden`}>
      <div id="header" className={checked ? "blue_theme" : "discreet_theme"}>
        <Container fluid>
          <Row>
            <Col sm={2} md={1} style={{justifyContent: "center"}}><figure className={checked ? "blue_theme" : "discreet_theme"} onClick={() => setDisplaySidebar(!displaySidebar)}><MenuSVG/></figure></Col>
            <Col sm={6} md={8} style={{alignItems: "center"}}>
              <Form style={{width: "100%"}} onSubmit={handleSearchSubmit}>
                <InputGroup className={checked ? "blue_theme" : "discreet_theme"}>
                  <Form.Control
                    placeholder="tampico alien mapaches"
                    aria-label="tampico alien mapaches"
                    aria-describedby="basic-addon2"
                    name="search"
                  />
                  <Button variant="outline-secondary" id="button-addon2" type="submit">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            <Col sm={2} md={2} style={{alignItems: "center", justifyContent: "center"}}>
               <Button id="theme_selector" variant={`outline-secondary ${checked ? "blue_theme" : "discreet_theme"}`} onClick={() => userContextVal.setTheme(!checked)}> 

              </Button>
            </Col>
            <Col sm={2} md={1} style={{alignItems: "center", justifyContent: "center"}}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >Account</Dropdown.Item>
                  {authenticated ?
                    <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
                  :
                    <Dropdown.Item onClick={() => history.push(`/login`)}>Log in</Dropdown.Item>
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
      {displaySidebar ?
      <div id="sidebar" className={checked ? "blue_theme" : "discreet_theme"}>
        <Container fluid>
          <Row>
            <Col sm={12} className="sidebar_col" onClick={() => history.push(`/`)}><button className="sidebar_btn">Home</button></Col>
          </Row>
          {authenticated ?
            <Row>
              <Col sm={12} className="sidebar_col"><button className="sidebar_btn" onClick={() => history.push(`/favourites`)}>Favourites</button></Col>
            </Row>
          : null
          }
          <Row>
            <Col sm={12} className="sidebar_col"><button className="sidebar_btn">Music</button></Col>
          </Row>
          <Row>
            <Col sm={12} className="sidebar_col"><button className="sidebar_btn">Sports</button></Col>
          </Row>
        </Container>
      </div>
      :
      null
      }
      <main className={`main_container ${checked ? "blue_theme" : "discreet_theme"}`}>{children}</main>
    </div>
  );
}

export default Layout;
