import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper className="navbar fixed-bottom d-flex justify-content-center  py-3">
      {/* //Todo add next link component */}
      <p> &#169; </p>
      <p className="mx-2">{new Date().getFullYear()}</p>
      <p className="brand-name">malabes , Inc.</p>
      <p className="brand-name mx-2">all rights reserved.</p>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.nav`
  background-color: rgba(23, 33, 33, 1);
  color: ${(props) => props.theme.secondaryLight};
  .brand {
    color: ${(props) => props.theme.secondaryLight};
    font-size: 1.6rem;
  }
  .brand-name {
    text-transform: capitalize;
  }
`;
