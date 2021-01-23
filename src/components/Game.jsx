import React from 'react'
// Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Zoom } from 'react-reveal';
// Redux
import { useDispatch } from 'react-redux';
import loadDetail from '../store/actions/detailsAction';
import { Link } from 'react-router-dom';

const Game = ({name, image, id}) => {
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id))
  }
  
  return (
    <Zoom>
    <StyledGame
      layoutId={id} 
      onClick={loadDetailHandler}
      >
      <Link to={`/game/${id}`}>
        <motion.img src={image} alt={name}/>
        <figcaption>
          <motion.h3>{name}</motion.h3>
        </figcaption>
      </Link>
    </StyledGame>
    </Zoom>
  )
}

const StyledGame = styled(motion.figure)`
min-height:50vh;
box-shadow: 0px 4px 15px rgba(0,0,0,0.7);
border-radius:.5rem;
text-align:center;
background: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
cursor: pointer;

@media (max-width:1280px){
  min-height:35vh;
}
@media (max-width:834px){
  min-height:32vh;
}
  img{
    width:100%;
    height: 40vh;
    object-fit:cover;
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
    @media (max-width:1280px){
      height: 30vh;
    }
    @media (max-width:1024px){
      height: 30vh;
    }
    @media (max-width:926px){
      height: 45vh;
    }
    @media (max-width:768px){
      height:27vh;
    }
  }
  figcaption{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
      h3{
        text-overflow: ellipsis;
        color:#2a2a2a;
        font-size:1.4rem;
        font-family: 'Righteous', cursive;
        text-transform:uppercase;
        margin-top: 1rem;
        letter-spacing:.6px;
        @media (max-width:1280px){
          font-size:1rem;
          margin-top: 0rem;
        }
        @media (max-width:768px){
          font-size:.9rem;
        }
      }
    }
`
export default Game
