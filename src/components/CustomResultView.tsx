import { SearchResult } from '@elastic/search-ui';
import styled from '@emotion/styled';
import React from 'react'

const StyledBox = styled.div(props => ({
    backgroundColor: "white",
    ":hover": {
        backgroundColor: "yellow"
    }
}))

type Props = {
    result: SearchResult,
    onClickLink: () => void
}

const CustomResultView = (props: Props) => {
    const onClick = () => {
        console.log(props.result.id.raw)
    }
    return (
        <StyledBox>
            <p onClick={onClick}>{props.result.post_title.raw}</p>
        </StyledBox>
    )
}

export default CustomResultView