import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components/macro"

import Layout from "../components/layout"
import Listing from "../components/listing"
import SEO from "../components/seo"

const ListingsContainer = styled.div`
  max-width: 70ch;
  margin: 0 auto;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ListingsContainer>
        {data.allContentfulBusiness.edges.map(business => {
          return <Listing key={business.node.slug} business={business.node} />
        })}
      </ListingsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBusiness(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          id
          name
          slug
          address
          twitter
          instagram
          website
          tags
          phone
          logo {
            localFile {
              childImageSharp {
                fixed(width: 100) {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  src
                  srcSet
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
