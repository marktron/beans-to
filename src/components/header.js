import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components/macro"

import Logo from "../images/logo.svg"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 2rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Link to="/">
        <img src={Logo} alt={siteTitle} />
      </Link>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
