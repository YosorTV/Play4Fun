import React, {useState} from 'react'

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fadeIn} from '../animation'

import {searchData} from '../store/actions/gamesAction';
import {useDispatch} from 'react-redux';

import logo from '../images/console.svg';
import search from '../images/search.svg';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = ({ target:{ value } }) => setTextInput(value);

  const onSubmit = e => {
    e.preventDefault();
      dispatch(searchData(textInput));
  }
  
  const clearSearched = () => {
    dispatch({type:"CLEARED_SEARCH"})
  }

  return (
    <Header variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <h2>Play <span><img src={logo} alt="logo" /></span> Game</h2>
      </Logo>
    <form className="search" onSubmit={onSubmit}>
      <input name="name" type="text" onChange={inputHandler}/>
      <button>
        <img src={search} alt="search"></img>
      </button>
    </form>
  </Header>
  )
}

const Header = styled(motion.nav)`
  display:flex;
  padding: 1rem;
  justify-content: space-between;
  align-items:center;
  width:93vw;
  margin: 0 auto;
  form{
    width:50%;
    display: flex;
    align-items: center;
    input{
      width:85%;
      border:none;
      outline:none;
      background:#2e363f;
      border-radius:2rem;
      height:2rem;
      color:#fff;
      font-family: 'Righteous', cursive;
      padding-left:.5rem;
      transition: .2s ease-in-out all;
      &:focus{
        box-shadow: inset 0px 2.5px 8px rgba(0,0,0,0.5);
      }
    }
    button{
      padding: .5rem .5rem;
      background: none;
      border: none;
      margin-left: .5rem;
      cursor: pointer;
      img{
        height: 1.5rem;
      }
    }
  }

  @media(max-width:428px){
    flex-direction:column;
    width:100vw;
    form{
      width:100%;
      input{
        width:80%;
        margin-left:2rem;
      }
    }
  }
`

const Logo = styled(motion.div)`
    h2{
    font-family: 'Righteous', cursive;
    font-size:2rem;
    color: #d5d4d0;
    letter-spacing:1.4px;
    text-transform:uppercase;
    cursor: pointer;
    transition: .2s all ease-in-out;
    @media(max-width:428px){
      margin-bottom:1rem;
    }
      &:hover{
        color:#fff;
      }
        img{
          width:2rem;
          height: 2rem;
          transform:scale(1.5);
          display:inline-block;
            @media(max-width:428px){
              transform:scale(1.2);
            }
        }
    }
    
`

export default Nav