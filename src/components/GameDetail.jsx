import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
// Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Carousel
import Carousel from 'react-img-carousel';
import 'react-img-carousel/lib/carousel.css';
// Images
import { smallImage } from '../util';

import playstation from "../images/playstation.svg";
import nintendo from "../images/nintendo.svg";
import xbox from "../images/xbox.svg";
import steam from '../images/steam.svg';
import gamepad from '../images/gamepad.svg';
import apple from "../images/apple.svg";

import starEmpty from '../images/star-empty.png';
import starFull from '../images/star-full.png';

const getPlatform = platform => {
  switch(platform){
    case "PlayStation 5":
      return playstation;
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
}

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  const {screenshots, game, isLoading} = useSelector(({ detail }) => detail);
  const {results} = screenshots;
  const {platforms, name, clip, rating, description_raw, stores, genres, developers, released} = game; 

  const exitDetailHandler = ({ target }) => {
    const element = target;
    if(element.classList.contains('shadow')){
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  }

  const getStars = () => {
    const stars = [];
    const rate = Math.floor(rating);
      for(let i = 0; i <= 5; i++){
        if(i <= rate){
          stars.push(<img src={starFull} key={i} alt="star-full"></img>)
        } else {
          stars.push(<img src={starEmpty} key={i} alt="star-empty"></img>)
        }
      }
    return stars;
  }
  return (
    <>
    {!isLoading && (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Detail layoutId={+pathId}> 
        <Stats>
          <div className="raitings">
            <motion.h3>{name}</motion.h3>
            <Genres>
              { genres && genres.map(({name, id}) => <li key={id}>{name}</li> )}
            </Genres>
            <motion.p>Rating: {getStars()}</motion.p>
          </div>
          <Info>
            <motion.h3>Platform</motion.h3>
            <Platforms>
              {stores.map(({ url }) =>
                platforms.map(({ platform:{id, name} }) => (
                  <Link key={id} to={{pathname:url}} target="_blank">
                    <motion.img src={getPlatform(name)}/>
                  </Link>
                ))
              )}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          {clip ? 
          <Video controls="controls" poster={clip.poster}>
            <source src={clip.clips.full}></source>
          </Video>
          : null  
          }
        </Media>
        <Description>
          <motion.p>{description_raw}</motion.p>
        </Description>
        <Carousel 
          dots={false}
          slideWidth="100%" 
          slideHeight="100%"
          imagesToPrefetch={5}
          >
          {results && results.map(({ image, id }) => (
            <motion.img src={smallImage(image, 1280)} alt="game" key={id}></motion.img>
          ))}
        </Carousel>
        <About>
          <div>
          <span>Developers: </span>
            {developers && developers.map(({id, name}) => 
              <p key={id}>{name}</p>
            )}
          </div>
          <span>{released}</span>
        </About>
      </Detail>
    </CardShadow>
    )}
    </>
  )
}



const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y:scroll;
  background: rgba(0, 0, 0, 0.6);
  position:fixed;
  top:0;
  left:0;
  z-index:5;
`
const Detail = styled(motion.div)`
  width:60%;
  padding: .5rem 2.5rem;
  background: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  position:absolute;
  left:20%;
  color:#000;
  border-radius:1.5rem;
  z-index:10;
  img{
    max-height:100%;
    width:100%;
    object-fit:cover;
    padding: 2rem 0rem;
  }
  .carousel-arrow{
    bottom:40%;
    &:hover{
      
    }
  }
  .carousel-right-arrow{
    right: 0;
  }
  .carousel-left-arrow{
    left: 0;
  }
  .carousel-arrow-default{
    border:none !important;
    border-radius:0;
    background:rgb(0, 0, 0, .4);
    padding:0rem .4rem;
    height:60px;
    width: 30px;
    transition:.2s all ease-in-out;
    &:hover{
      background:rgb(0, 0, 0, .8);
    }
    &::before{
      font-family: 'Righteous', cursive;
    }
  }
  @media(max-width:1366px){
    width:70%;
    left:15%;
  }
  @media(max-width:1024px){
    width: 80%;
    left: 10%;
  }
  @media(max-width:834px){
    width: 90%;
    left: 5%;
  }
  @media(max-width:428px){
    padding: .5rem 1.5rem;
    border-radius:1rem;
  }
`
const Stats = styled(motion.div)`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  p{
    img{
      position:relative;
      top:1px;
      width:1rem;
      height:1rem;
      display:inline-flex;
      padding: 0;
      margin-left:.5rem;
    }
  }
`
const Info = styled(motion.div)`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  @media(max-width:926px){
    width:40%;
  }
  @media(max-width:428px){
    display:none;
  }
`
const Genres = styled(motion.ul)`
  list-style:none;
  display:flex;
  color:#ff7676;
  margin-bottom:1rem;
    li:not(:first-child){
      margin-left:.5rem;
    }
`

const Platforms = styled(motion.div)`
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  a{
    margin-left: .5rem;
    img{
      width:2.5rem;
      height:2.5rem;
      padding:.5rem 0;
      object-fit: contain;
    }
  }
`
const Media = styled(motion.div)`
  margin: 2rem auto;
`

const Video = styled(motion.video)`
  max-height:100%;
  width:100%;
`
const Description = styled(motion.div)`
  margin:2rem 0rem 0rem 0rem;
  @media(max-width:428px){
    font-size:.8rem;
  }
`
const About = styled(motion.div)`
  font-size:1rem;
  display:flex;
  justify-content:space-between;
  margin-bottom: 1rem;

  div{
    display:flex;
      p{
        margin-left:.5rem;
      }
    }
`


export default GameDetail
