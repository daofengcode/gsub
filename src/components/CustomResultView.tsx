import { SearchResult } from '@elastic/search-ui';
import styled from '@emotion/styled';
import React from 'react'
import { useNavigate } from 'react-router-dom';
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
    cursor: "pointer",
    "& em":{
        color: "#FF5722",
        fontStyle: "normal"
    }
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
    // let text = removeHtmlTags(props.result.post_content.raw)
    const navigate = useNavigate();
    const onClick = () => {
        let id = props.result.id.raw
        navigate(`/post/${id}`)
    }
    return (
        <StyledBox onClick={onClick}>
            <StyledTitle dangerouslySetInnerHTML={{ __html: props.result.post_title.snippet }}></StyledTitle>
            <StyledText  dangerouslySetInnerHTML={{ __html: props.result.post_content.snippet }}></StyledText>
        </StyledBox>
    )
}

export default CustomResultView