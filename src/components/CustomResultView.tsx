import { SearchResult } from '@elastic/search-ui';
import styled from '@emotion/styled';
import React from 'react'
import { removeHtmlTags } from '../utils/string.helper';

const StyledBox = styled.div(props => ({
    backgroundColor: "white",
    padding: "16px",
    marginBottom: "8px",
    border: "1px solid #f5f5f5",
    transition: "all 0.3s",
    ":hover": {
        backgroundColor: "#FAFAFA",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    cursor: "pointer"
}))

const StyledTitle = styled.p(props => ({
    fontSize: "1rem",
    paddingBottom: "8px"
}))

const StyledText = styled.div(props => ({
    fontSize: "1rem",
    color: "#b0b0b0",
    lineHeight: "1.5rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "4.5rem"
}))

type Props = {
    result: SearchResult,
    onClickLink: () => void
}

const CustomResultView = (props: Props) => {
    console.log(props.result)
    let text = removeHtmlTags(props.result.post_content.raw)
    const onClick = () => {
        console.log(props.result.id.raw)
    }
    return (
        <StyledBox onClick={onClick}>
            <StyledTitle>{props.result.post_title.raw}</StyledTitle>
            <StyledText>{text}</StyledText>
        </StyledBox>
    )
}

export default CustomResultView