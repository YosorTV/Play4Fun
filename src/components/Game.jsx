import React from 'react'
// Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import loadDetail from '../store/actions/detailsAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';

const Game = ({name, image, id}) => {
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id))
  }
  
  return (
    <StyledGame layoutId={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.img src={smallImage(image, 640)} alt={name}/>
        <figcaption>
          <motion.h3>{name}</motion.h3>
        </figcaption>
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.figure)`
min-height:50vh;
box-shadow: 0px 4px 15px rgba(0,0,0,0.7);
border-radius:.5rem;
text-align:center;
background: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
cursor: pointer;

  img{
    width:100%;
    height: 35vh;
    object-fit:cover;
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
  }
  figcaption{
    height: 14vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
      h3{
        overflow: hidden;
        text-overflow: ellipsis;
        color:#2a2a2a;
        font-size:1.4rem;
        font-family: 'Righteous', cursive;
        text-transform:uppercase;
      }
  }
`
export default Game
