import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import styled from "styled-components/macro"
import chroma from "chroma-js"

import Logo from "../images/logo.svg"
import CoverPhoto from "../images/cover-bg.jpg"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 200px;

  @media ${props => props.theme.screenSizes.tablet} {
    width: 50%;
    height: 100vh;
  }
`
const BgWrapper = styled.div`
  background-image: url(${CoverPhoto});
  background-size: cover;
  opacity: 0;
  position: absolute;
  z-index: 1;
  transition: opacity 1s ease;
  width: 100%;
  height: 200px;

  @media ${props => props.theme.screenSizes.tablet} {
    width: 50%;
    height: 100%;
  }
`
const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLogo = styled.span`
  opacity: 0;
  z-index: 2;
  img {
    height: 150px;
  }
  transition: opacity 3s ease;
  @media ${props => props.theme.screenSizes.tablet} {
    /* margin: 2rem; */
    img {
      height: auto;
      max-height: 350px;
    }
  }
`

const Footer = styled.div`
  margin: 1rem;
  font-size: ${props => props.theme.fontSizes[1]};
  z-index: 3;
  display: none;
  a {
    border-bottom: ${props =>
      `solid 1px ${chroma(props.theme.colors.text).alpha(0.5)}`};
    color: ${props => props.theme.colors.text};
    transition: border-color 0.2s ease;
    &:hover {
      border-color: ${props => props.theme.colors.text};
    }
  }
  @media ${props => props.theme.screenSizes.tablet} {
    display: block;
  }
`

const Header = ({ siteTitle }) => {
  const logoRef = useRef()
  const bgRef = useRef()
  useEffect(() => {
    logoRef.current.style.opacity = 1
    bgRef.current.style.opacity = 0.25
  })
  return (
    <StyledHeader>
      <BgWrapper ref={bgRef} />
      <LogoWrapper>
        <StyledLogo ref={logoRef}>
          <img src={Logo} alt={siteTitle} />
        </StyledLogo>
      </LogoWrapper>
      <Footer>
        Site brewed by{" "}
        <a
          href="https://markallen.io"
          target="_blank"
          rel="noopener noreferrer"
          title="Mark Allen’s website"
        >
          Mark Allen
        </a>
      </Footer>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
