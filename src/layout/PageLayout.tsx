import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalFooter from './GlobalFooter'
import GlobalNav from './GlobalNav'
import styled from '@emotion/styled';

const StyledBox = styled.div(props => ({
    backgroundColor: "#F1F3F6",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "100vw"
}))
const StyledMain = styled.div(props => ({
    flex: 1
}))

type Props = {}

const PageLayout = (props: Props) => {
    return (
        <StyledBox>
            <GlobalNav />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <GlobalFooter />
        </StyledBox>
    )
}

export default PageLayout