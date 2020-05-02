import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components/macro"

import Header from "./header"

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
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
      </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
