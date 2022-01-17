import React from 'react';

import styled, { css } from 'styled-components';

const H2 = styled.h2`
  font-size: 20px;
  ${props => props.mini && css`
    font-size: 0.8rem;
  `};
`

const Li = styled.li`
  position: relative;
  background-color: white;
  overflow-y: scroll;
  &.videoImg {
    
  }
  &.videoImg>img {
    width: 100%;
  }
  &.videoDescr {
    color: gray;
    font-size: 15px;
  } 
  &.videoChannel{
    color: black;
    font-size: 15px;
    font-weight: bold;
  }
`

const Span = styled.span`

`

const Ul = styled.ul`
  display: grid;
  display: -ms-grid;
  grid-row-gap: 0px;
  
  grid-template-rows: 60% 15% 20% 5%;
  -ms-grid-rows: 100px 60% 15% 20% 5%;
  
  grid-template-columns: 100%;
  -ms-grid-columns: 100%;

  height: 46vh;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);
  -moz-box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);
  box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);
  cursor: pointer;
  list-style-type: none;
  margin: 0;
  padding: 30px 30px;
  ${props => props.mini && css`
    grid-template-rows: auto 10%;
    -ms-grid-rows: auto 10%;
    height: 25vh;
    padding: 20px 30px;
  `};
`

function VideoCard(props) {

  return(
    <Ul data-testid="videoCard" className="video_card_ul" onClick={props.onClick} mini={props.mini}>
      <Li className="videoImg"><img src={props.img} alt=""/></Li>
      <Li className="videoTitle"><H2 className="" mini>{props.name}</H2></Li>
      {!props.mini ? (
        <>
        <Li className="videoDescr"><Span className="">{props.description}</Span></Li>
        <Li className="videoChannel"><Span className="">{props.channel}</Span></Li>
        </>
      ): 
        null
      }
    </Ul>
  );
}

export default VideoCard;
