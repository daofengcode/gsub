import React from 'react'
import styled from '@emotion/styled';

const StyledDiv = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "3rem",
    backgroundColor: "white",
}))

const StyledText = styled.p(props => ({
    paddingTop: "2rem"
}))

type Props = {}

const NotFound = (props: Props) => {
    return (
        <StyledDiv>
            <img src="/images/404.jpg" alt="404" />
            <StyledText>抱歉，您访问的页面不存在。</StyledText>
        </StyledDiv>
    )
}

export default NotFound