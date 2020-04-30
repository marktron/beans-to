import React from "react"
import { Link } from "gatsby"
import styled from "styled-components/macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {data.allContentfulBusiness.edges.map(business => {
        console.log("🔔 ",business.node)
        return business.node.name
      })}
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
                fixed(width: 200) {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
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
