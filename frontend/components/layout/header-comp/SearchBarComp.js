import React, { Component } from 'react';
import Styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default class SearchBar extends Component {
  state = {
    inputIsFocused: false,
  };
  render() {
    const { inputIsFocused } = this.state;
    return (
      <StylesWrapper className="d-flex">
        <input
          placeholder="search ..."
          onFocus={() => this.setState({ inputIsFocused: true })}
          onBlur={() => this.setState({ inputIsFocused: false })}
        />
        <button
          type="submit"
          className={inputIsFocused ? `btn-search btn-focus` : `btn-search`}
        >
          <FaSearch />
        </button>
      </StylesWrapper>
    );
  }
}

const StylesWrapper = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  /* margin-right:10rem;
  margin-left:10rem; */
  background-color:#E0F7FA;
  border-radius: 5rem;
  margin:0 3rem;
  flex:2;
 
  
  input{
    
    padding-left:2rem;
    padding-right:2rem;
    border:none;
    background-color:#E0F7FA;
    text-decoration: none;
    height:5rem;
    flex:2;
    /* border-radius: 25px; */
    border-top-left-radius: 5rem;
    border-bottom-left-radius: 5rem;
    transition: background-color 0.1s, border-top 0.1s, border-bottom 0.1s, border-left 0.1s;
    transition-timing-function:ease-in-out;
    &:focus{
      background-color:#FFFFFF;
      border-top:0.2rem solid ${(props) => props.theme.orange};
      border-bottom:0.2rem solid ${(props) => props.theme.orange};
      border-left:0.2rem solid ${(props) => props.theme.orange};
    }
  }
  .btn-search {
    background-color:transparent;
    color:${(props) => props.theme.mainDark};
    border:none ;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    height:5rem;
    font-size:2rem;
    padding-right:2rem;
    padding-left:2rem;
    cursor: pointer;
    outline:none;
    &:hover{
      background-color: #81D4FA;
    }
    
  }
  .btn-focus{
      background-color: ${(props) => props.theme.orange} !important;
      color:#F5F5F5;
    }
`;
