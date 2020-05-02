import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import chroma from "chroma-js"

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.linkColor};
  margin-top: 0.5rem;
`
const StyledTag = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
  border: ${props =>
    `solid 1px ${chroma(props.theme.colors.linkColor).alpha(0.75)}`};
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  svg {
    margin-right: 0.5rem;
  }
`

const Tag = props => {
  const { tag } = props
  let icon = ""
  switch (tag.toUpperCase()) {
    case "DELIVERY":
      icon = "box-alt"
      break
    case "CAFE":
      icon = "coffee-togo"
      break

    case "PICKUP":
      icon = "store-alt"
      break

    default:
      icon = "box-alt"
      break
  }
  return (
    <StyledTag>
      <FontAwesomeIcon icon={["far", icon]} />
      {tag}
    </StyledTag>
  )
}

const Tags = props => {
  const { tags } = props
  return (
    <TagsWrapper>
      {tags.map((tag, index) => {
        return <Tag key={index} tag={tag} />
      })}
    </TagsWrapper>
  )
}
Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
export default Tags
