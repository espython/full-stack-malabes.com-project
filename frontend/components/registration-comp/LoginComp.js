import React from 'react';
import styled from 'styled-components';

function Login({ showSignup, setShowSignup }) {
  return (
    <Wrapper>
      <div className="top-row d-flex justify-content-between px-2">
        <p>Login</p>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg rounded-pill"
          onClick={() => setShowSignup(!showSignup)}
        >
          Signup
        </button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            className="form-control rounded-pill py-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control form-control-lg rounded-pill py-4"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 30rem; */
  display: flex;
  flex-direction: column;
`;

export default Login;
