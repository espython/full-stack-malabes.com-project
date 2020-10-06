import React, { Component } from 'react';
import Link from 'next/link';
import Styled from 'styled-components';
import { connect } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import SearchBar from './SearchBarComp';
import { showRegisterModal } from '../../../redux/registration/actions';

class Header extends Component {
  render() {
    const { showRegisterModal } = this.props;
    return (
      <Wrapper className="top-nav d-flex justify-content-around align-items-center py-4">
        <h2>
          <Link href="/">
            <a>Cotton Store</a>
          </Link>
        </h2>
        <SearchBar className="search-bar" />
        <div className="right-panel">
          <button
            type="button"
            className="d-flex login-btn align-items-center btn btn-outline-warning rounded-pill"
            onClick={showRegisterModal}
          >
            <MdAccountCircle className="account-icon btn" />
            <p>Login</p>
          </button>

          <div className="v-bar">|</div>
          <div className="cart-icon">
            <FiShoppingCart />
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  showRegistrationModal: state.showRegistrationModal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    showRegisterModal: () => dispatch(showRegisterModal()),
  };
};

const Wrapper = Styled.div`
   /* top Nav */
    padding: 0 4rem;
  
    h2 a {
      font-family: 'Satisfy', cursive;
      font-size: 2.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.orange};
    }
    .right-panel {
      display: flex;
      align-items: center;
      .account-icon {
        font-size: 3.2rem;
        color: #212121;
        padding:0 !important;
      }
      .login-btn{
        font-size: 1.8rem;
        color:${({ theme }) => theme.secondaryDark} !important;
      }
      .v-bar {
        margin: 0rem 1.5rem 0rem 1.5rem;
      }
      .cart-icon {
        display: flex;
        align-items: center;
        font-size: 3rem;
      }
    }
`;

export default connect(null, mapDispatchToProps)(Header);
