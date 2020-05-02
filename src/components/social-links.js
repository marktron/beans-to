import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${props => props.theme.fontSizes[2]};
  margin-top: 1rem;
  @media ${props => props.theme.screenSizes.tablet} {
    margin-top: 0;
  }
`

const SocialLink = styled.a`
color: ${props => props.theme.colors.linkColor};
margin-left: 1rem;
transition: color 0.2s ease;
line-height: 1;
&:first-child{
  margin-left: 0;
}
&:hover {
  color: ${props => props.theme.colors.text};
}
`

const SocialLinks = props => {
  const { business } = props
  return (
    <LinksWrapper>
      {business.website && (
        <SocialLink
          href={business.website}
          target="_blank"
          rel="noopener noreferrer"
          title={`${business.name}’s website`}
        >
          <FontAwesomeIcon icon={["far", "link"]} />
        </SocialLink>
      )}
      {business.instagram && (
        <SocialLink
          href={`https://instagram.com/${business.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`@${business.instagram} on Instagram`}
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </SocialLink>
      )}
      {business.twitter && (
        <SocialLink
          href={`https://twitter.com/${business.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`@${business.twitter} on Twitter`}
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </SocialLink>
      )}
      {business.facebook && (
        <SocialLink
          href={`https://facebook.com/${business.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`${business.name} on Facebook`}
        >
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </SocialLink>
      )}
    </LinksWrapper>
  )
}
SocialLinks.propTypes = {
  business: PropTypes.object.isRequired,
}
export default SocialLinks
