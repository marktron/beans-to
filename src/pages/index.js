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

const ToggleFilterButton = styled.button`
  border: ${props => `solid 2px ${props.theme.colors.text}`};
  background-color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.headline};
  font-weight: ${props => props.theme.fontWeights.strong};
  border-radius: 2px;
  padding: 0.5rem 1rem;
  display: block;
  margin: 0 auto;
  @media ${props => props.theme.screenSizes.tablet} {
    display: none;
  }
`

const FilterWrapper = styled.div`
  border: ${props => `solid 2px ${props.theme.colors.text}`};
  border-radius: 2px;
  padding: 1rem 0;
  text-align: center;
  display: ${props => (props.filterVisible ? "block" : "none")};
  h3 {
    margin: 0;
    margin-bottom: 0.5rem;
    /* font-family: ${props => props.theme.fonts.sansSerif}; */
    /* font-size: ${props => props.theme.fontSizes[3]}; */
    /* font-weight: ${props => props.theme.fontWeights.normal}; */
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      margin: 1rem 0.5rem;
      padding: 0;
    }
  }
  @media ${props => props.theme.screenSizes.tablet} {
    display: block;
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
  const [filterVisible, toggleFilterVisible] = useState(false)
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
        Are you missing your favourite local cafe? Many independent Toronto coffee roasters are still operating, now with options for contactless pickup or shipping directly to your home. It’s a great way to support local businesses and add a little variety to your day.
        </IntroText>
        {!filterVisible && (
          <ToggleFilterButton onClick={() => toggleFilterVisible(true)}>
            Show Shipping Filters
          </ToggleFilterButton>
        )}
        <FilterWrapper filterVisible={filterVisible}>
          <h3>Shipping Filters</h3>
          <ul>
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
