import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Img from "gatsby-image"

const ListingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  align-items: center;
  border-bottom: solid 1px rgba(255, 255, 255, 0.25);
  padding-bottom: 2rem;
  &:last-child {
    border-bottom: none;
  }
`
const ImgWrapper = styled.a`
  margin-right: 1rem;
  line-height: 0;

  img {
    border-radius: 0.25rem;
  }
`
const BizInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Name = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.black};
  margin-bottom:1rem;
`
const Address = styled.a`
  color: ${props => props.theme.colors.text};
`

const Listing = props => {
  const { business } = props
  return (
    <ListingWrapper>
      <ImgWrapper
        href={business.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={business.logo.localFile.childImageSharp.fixed} />
      </ImgWrapper>
      <BizInfo>
        <Name href={business.website} target="_blank" rel="noopener noreferrer">
          {business.name}
        </Name>
        {business.address && (
          <Address
            href={`https://www.google.ca/maps/place/${encodeURI(
              business.address
            ).replace(/%20/g, "+")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fal", "map-marker-alt"]} />{" "}
            {business.address}
          </Address>
        )}
        {business.phone && (
          <Address
            href={`tel:${business.phone.replace(/ /g, "-")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fal", "phone"]} /> {business.phone}
          </Address>
        )}
      </BizInfo>
    </ListingWrapper>
  )
}

Listing.propTypes = {
  business: PropTypes.object.isRequired,
}

export default Listing
