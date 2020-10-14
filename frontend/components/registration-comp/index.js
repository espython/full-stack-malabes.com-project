import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Login from './LoginComp';
import { showRegisterModal } from '../../redux/registration/actions';
import Signup from './SignupComp';

function RegisterComp({ showModal, showRegisterModal }) {
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    // Get the modal
    const modal = document.getElementById('register-modal');
    // When the user clicks anywhere outside of the modal, close it

    window.onclick = function (event) {
      if (event.target == modal) {
        // modal.style.display = 'none';
        showRegisterModal();
      }
    };
  });
  console.log('show Modal', showModal);
  return (
    <Wrapper showModal={showModal} id="register-modal">
      <div className="modal-content d-flex">
        <span className="close align-self-end pb-3" onClick={showRegisterModal}>
          x
        </span>
        {!showSignup ? (
          <Login setShowSignup={setShowSignup} showSignup={showSignup} />
        ) : (
          <Signup />
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: ${({ showModal }) => (!showModal ? `none` : `flex`)} !important;
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  .top-row {
    width: 100%;
  }
  .modal-content {
    background-color: #fefefe;
    margin: 25% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 30%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: 500;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  /* add media queries */
  @media only screen and (max-width: 600px) {
    .modal-content {
      background-color: #fefefe;
      margin: 25% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }
  }

  @media only screen and (max-width: 1024px) {
    .modal-content {
      background-color: #fefefe;
      margin: 25% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 60%; /* Could be more or less, depending on screen size */
    }
  }
`;

const mapStateToProps = (state) => {
  console.log('State', state);
  return { showModal: state.registerReducer.showRegistrationModal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showRegisterModal: () => dispatch(showRegisterModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComp);
