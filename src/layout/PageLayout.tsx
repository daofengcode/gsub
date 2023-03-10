import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalFooter from './GlobalFooter'
import GlobalNav from './GlobalNav'
import styled from '@emotion/styled'
import Container from '@mui/material/Container';
import ScrollToTop from '../components/ScrollToTop'

const StyledBox = styled.div(props => ({
    backgroundColor: "#F1F3F6",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "100vw"
}))

const StyledMain = styled.div(props => ({
    flex: 1,
    display: "flex"
}))

type Props = {}

const PageLayout = (props: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    return (
        <StyledBox>
            <GlobalNav />
            <StyledMain id='page-main'>
                <Container ref={ref} maxWidth="lg" sx={{ marginY: 1, bgcolor: "white", flex: 1 }}>
                    <Outlet />
                </Container>
            </StyledMain>
            <GlobalFooter />
            <ScrollToTop></ScrollToTop>
        </StyledBox>
    )
}

export default PageLayout