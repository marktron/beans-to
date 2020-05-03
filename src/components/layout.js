import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from "styled-components/macro"
import "normalize.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import "../components/fontawesome"
import { BaseTheme } from "../components/theme"
import Header from "./header"

// This prevents FontAwesome icons from loading at a huge size, then shrinking (see also gatsby-browser.js)
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
  body, html {
    line-height: 1.45;
    font-size: 16px;
    line-height: 1.45;
    font-family: ${props => props.theme.fonts.sansSerif};
    background-color: ${props => props.theme.colors.background};
    font-weight: ${props => props.theme.fontWeights.normal};
    color: ${props => props.theme.colors.text};
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts.headline};
  }
  a {
    text-decoration: none;
  }
  `

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.screenSizes.tablet} {
    flex-direction: row;
    height: 100vh;
    overflow-y: scroll;
    justify-content: space-between;
    align-content: stretch;
    align-items: stretch;
  }
`

const StyledMain = styled.main`
  @media ${props => props.theme.screenSizes.tablet} {
    width: 50%;
    height: 100vh;
    overflow-y: scroll;
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
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
