import React from 'react'
import Game from '../components/Game'
import styled from 'styled-components';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animation';

const GamesList = ({ popularG, upcomingG, newG, searchedG }) => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <GameList 
      variants={fadeIn} 
      initial="hidden" 
      animate="show">
      <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {pathId && <GameDetail pathId={pathId}/> }
      </AnimatePresence>
      {searchedG.length ? (
        <div className="searched">
        <Wrapper>
          {searchedG.map(({id, name, background_image}) => 
          <Game
            id={id}
            key={id} 
            name={name}
            image={background_image}
          />
        )}
      </Wrapper>
      </div>
      ) : null}
      <h2>Popular Games</h2>
      <Wrapper>
      {popularG.map(({id, name, background_image}) => 
        <Game
          id={id}
          key={id} 
          name={name}
          image={background_image}
        />
      )}
      </Wrapper>
      <h2>Upcoming Games</h2>
      <Wrapper>
      {upcomingG.map(({id, name, released, background_image}) => 
        <Game
          key={id}
          id={id}
          name={name}
          image={background_image}
          released={released}
        />
      )}
      </Wrapper>
      <h2>New Games</h2>
      <Wrapper>
      {newG.map(({id, name, released, background_image}) => 
      <Game
        key={id} 
        id={id}
        name={name}
        image={background_image}
        released={released}
        />
      )}
      </Wrapper>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
padding: 0rem 5rem;
  @media(max-width:428px){
    padding: 0rem 2.5rem;
  }
  h2{
    padding: 2rem 0rem;
    font-family: 'Righteous', cursive;
    color:#fff;
    font-size:1.7rem;
    text-transform:uppercase;
    @media(max-width:428px){
      font-size:1.5rem;
      text-align:center;
    }
  }
`
const Wrapper = styled(motion.div)`
  min-height: 50vh;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap:2rem 2rem;
  
  @media (max-width:1112px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width:1024px){
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width:926px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (max-width:834px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width:768px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`

export default GamesList
