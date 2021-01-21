import React from 'react'
import Game from '../components/Game'
import styled from 'styled-components';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
const GamesList = ({ popularG, upcomingG, newG, searchedG }) => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <GameList>
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
      <h2>Popular Games
        <span>
          <svg 
          width="24" 
          height="24" 
          xmlns="http://www.w3.org/2000/svg" 
          fillRule="evenodd" 
          clipRule="evenodd"
          fill="#e74413">
            <path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z"/>
          </svg>
        </span>
        </h2>
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
  h2{
    padding: 2rem 0rem;
    font-family: 'Righteous', cursive;
    color:#fff;
    font-size:1.7rem;
    text-transform:uppercase;
    span{
      margin-left: 15px;
        svg{
          transform:scale(1.4);
        }
    }
  }
`
const Wrapper = styled(motion.div)`
  min-height: 50vh;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap:2rem 2rem;
`

export default GamesList
