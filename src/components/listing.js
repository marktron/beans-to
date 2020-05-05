import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"
import chroma from "chroma-js"

import Tags from "../components/tags"
import SocialLinks from "../components/social-links"

const SocialLinksWrapper = styled.div``

const ListingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  align-items: flex-start;
  border-bottom: ${props =>
    `solid 1px ${chroma(props.theme.colors.linkColor).alpha(0.5)}`};
  ${SocialLinksWrapper} {
    transition: opacity 0.2s ease;
    opacity: 1;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    ${SocialLinksWrapper} {
      opacity: 1;
    }
  }
  @media ${props => props.theme.screenSizes.tablet} {
    flex-direction: row;
    padding: 3rem 0;
    ${SocialLinksWrapper} {
      opacity: 0;
    }
  }
`
const ImgWrapper = styled.a`
  margin: 0 auto 1rem auto;
  line-height: 0;

  img {
    border-radius: 0.25rem;
  }

  @media ${props => props.theme.screenSizes.tablet} {
    margin: 0 2rem 0 0;
  }
`
const BizInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
`

const ListingHeader = styled.h3`
  font-size: ${props => props.theme.fontSizes[3]};
  font-family: ${props => props.theme.fonts.headline};
  margin: 0 0 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.screenSizes.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const Name = styled.a`
  color: ${props => props.theme.colors.text};
  line-height: 1;
  @media ${props => props.theme.screenSizes.tablet} {
    &::after {
      content: "";
      opacity: 0;
      margin-left: 0.5rem;
      transition: opacity 0.2s ease;
    }
    &:hover {
      &::after {
        content: "⟶";
        opacity: 1;
      }
    }
  }
`
const Note = styled.p`
  margin-top: 0;
  color: ${props => props.theme.colors.linkColor};
`

const Address = styled.a`
  color: ${props => props.theme.colors.linkColor};
  margin-bottom: 0.5rem;
  svg {
    margin-right: 0.1rem;
    opacity: 0.75;
    transition: opacity 0.2s ease;
  }
  &:hover {
    color: ${props => props.theme.colors.text};
    svg {
      opacity: 1;
    }
  }
`

const Listing = props => {
  const { business } = props
  return (
    <ListingWrapper>
      <ImgWrapper
        href={business.website}
        target="_blank"
        rel="noopener noreferrer"
        title={`${business.name}’s website`}
      >
        <Img fixed={business.logo.localFile.childImageSharp.fixed} />
      </ImgWrapper>
      <BizInfo>
        <ListingHeader>
          <Name
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
            title={`${business.name}’s website`}
          >
            {business.name}
          </Name>
          <SocialLinksWrapper>
            <SocialLinks business={business} />
          </SocialLinksWrapper>
        </ListingHeader>
        {business.note?.note && (<Note>{business.note.note}</Note>)}
        {business.address && (
          <Address
            href={`https://www.google.ca/maps/place/${encodeURI(
              business.address
            ).replace(/%20/g, "+")}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Directions to ${business.name}`}
          >
            <FontAwesomeIcon icon={["far", "map-marker-alt"]} fixedWidth />{" "}
            {business.address}
          </Address>
        )}
        {business.phone && (
          <Address
            href={`tel:${business.phone.replace(/ /g, "-")}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Call ${business.name}`}
          >
            <FontAwesomeIcon icon={["far", "phone"]} fixedWidth />{" "}
            {business.phone}
          </Address>
        )}
        {business.tags && <Tags tags={business.tags} />}
      </BizInfo>
    </ListingWrapper>
  )
}

Listing.propTypes = {
  business: PropTypes.object.isRequired,
}

export default Listing
