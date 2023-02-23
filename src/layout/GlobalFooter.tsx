import React from 'react'
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

const StyledBox = styled.div(props => ({
    backgroundColor: "#121418",
    textAlign: "center",
    height: "60px",
    lineHeight: "60px",
    fontSize: "1rem",
    color: "white"
}))

type Props = {}

const GlobalFooter = (props: Props) => {
    let location = useLocation();
    if (location.pathname == "/") {
        return <></>
    } else {
        return (
            <StyledBox>喜马拉雅华盛顿DC农场</StyledBox>
        )
    }
}

export default GlobalFooter