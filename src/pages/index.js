import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components/macro"
import chroma from "chroma-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import Listing from "../components/listing"
import SEO from "../components/seo"

const ListingsContainer = styled.div`
  padding: 1rem;
  @media ${props => props.theme.screenSizes.tablet} {
    padding: 4rem;
  }
`

const IntroTitle = styled.h1`
  margin-top: 2rem;
  text-align: center;
  line-height: 1.2;
  @media ${props => props.theme.screenSizes.tablet} {
    margin-top: 0;
  }
`

const IntroText = styled.p`
  font-size: ${props => props.theme.fontSizes[3]};
  margin: 2rem 0;
`

const FilterWrapper = styled.div`
  border-bottom: ${props => `solid 1px ${props.theme.colors.text}`};
  padding: 0 0 2rem 0;
  h3 {
    margin: 0;
    margin-right: 1rem;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    li {
      margin: 0 0 1.5rem 0;
      padding: 0;
    }
  }
  @media ${props => props.theme.screenSizes.tablet} {
    padding: 1rem 0 1.5rem 0;
    ul {
      flex-direction: row;
    }
  }
`

const FilterTag = styled.span`
  border: ${props => `solid 1px ${chroma(props.theme.colors.text).alpha(0.5)}`};
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: ${props => chroma(props.theme.colors.text).alpha(0.1)};
  }
  &.activeTag {
    background-color: ${props => props.theme.colors.text};
    border-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    &:hover {
      background-color: ${props => chroma(props.theme.colors.text)};
    }
  }
`

const IndexPage = ({ data }) => {
  const [activeTags, setActiveTags] = useState([])
  return (
    <Layout>
      <SEO
        title={
          data.site?.siteMetadata?.description
            ? data.site.siteMetadata.description
            : "Home"
        }
      />
      <ListingsContainer>
        <IntroTitle>Toronto Coffee Roasters</IntroTitle>
        <IntroText>
          Do you miss your favourite local cafe? Many Toronto-area coffee
          roasters are still selling beans, with options for contactless pickup
          or shipping directly to your home.
        </IntroText>
        <FilterWrapper>
          <ul>
            <li>
              <h3>Filters</h3>
            </li>
            <li>
              <FilterTag
                className={activeTags.includes("Delivery") ? "activeTag" : null}
                onClick={() =>
                  activeTags.includes("Delivery")
                    ? setActiveTags(activeTags.filter(e => e !== "Delivery"))
                    : setActiveTags([...activeTags, "Delivery"])
                }
              >
                <FontAwesomeIcon icon={["far", "box-alt"]} fixedWidth />
                Home delivery
              </FilterTag>
            </li>
            <li>
              <FilterTag
                className={activeTags.includes("Pickup") ? "activeTag" : null}
                onClick={() =>
                  activeTags.includes("Pickup")
                    ? setActiveTags(activeTags.filter(e => e !== "Pickup"))
                    : setActiveTags([...activeTags, "Pickup"])
                }
              >
                <FontAwesomeIcon icon={["far", "store-alt"]} fixedWidth />
                In-store pickup
              </FilterTag>
            </li>
            <li>
              <FilterTag
                className={activeTags.includes("Cafe") ? "activeTag" : null}
                onClick={() =>
                  activeTags.includes("Cafe")
                    ? setActiveTags(activeTags.filter(e => e !== "Cafe"))
                    : setActiveTags([...activeTags, "Cafe"])
                }
              >
                <FontAwesomeIcon icon={["far", "coffee-togo"]} fixedWidth />
                Cafe open for take-out
              </FilterTag>
            </li>
          </ul>
        </FilterWrapper>
        {data.allContentfulBusiness.edges.map(business => {
          if (
            activeTags.length === 0 ||
            (business.node.tags &&
              business.node.tags.some(r => activeTags.includes(r)))
          ) {
            return <Listing key={business.node.slug} business={business.node} />
          } else return null
        })}
      </ListingsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBusiness(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          id
          name
          slug
          address
          twitter
          instagram
          facebook
          website
          note {
            note
          }
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
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
