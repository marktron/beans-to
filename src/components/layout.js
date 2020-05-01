import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from "styled-components/macro"
import "normalize.css"
import "../components/fontawesome"
import { BaseTheme } from "../components/theme"

// import "../components/fontawesome"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body, html {
    line-height: 1.45;
    font-size: 16px;
    line-height: 1.45;
    font-family: ${props => props.theme.fonts.sansSerif};
    background-color: ${props => props.theme.colors.background};
    font-weight: ${props => props.theme.fontWeights.normal};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  h1{
    font-weight: ${props => props.theme.fontWeights.black};
  }
  a {
    text-decoration: none;
  }
  `

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  min-height: 100vh;
`

const StyledMain = styled.main`
  padding: 2rem;
  flex-grow: 1;
  padding-top: 0;
`

const StyledFooter = styled.footer`
  padding: 1rem;
  color: ${props => props.theme.colors.grays[3]};
  font-size: ${props => props.theme.fontSizes[1]};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.grays[3]};
    text-decoration: none;
    &:hover {
      transition: color 0.2s ease, border 0.2s ease;
      color: ${props => props.theme.colors.text};
      border-bottom: solid 2px ${props => props.theme.colors.text};
    }
  }
  @media ${props => props.theme.screenSizes.tablet} {
    flex-direction: row;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={BaseTheme.dark}>
      <GlobalStyle />
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        <StyledFooter>
          <span>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </StyledFooter>
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
