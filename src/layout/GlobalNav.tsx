import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";


const StyledBox = styled.div(props => ({
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    cursor: "pointer"
}))

const StyledLogo = styled.img(props => ({
    height: "32px",
    marginRight: "8px"
}))

type Props = {}

const GlobalNav = (props: Props) => {
    let location = useLocation();
    const navigate = useNavigate();
    const onClickLogin = () => {
        navigate("/")
    }
    const onClickSearch = () => {
        navigate("/search")
    }
    if (location.pathname == "/") {
        return <></>
    } else {
        return (
            <AppBar sx={{ position: "sticky", top: "0" }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <StyledBox onClick={onClickLogin}>
                            <StyledLogo src="/icon.png" alt="" />
                            <Typography variant="h6" component="div">
                                郭文贵视频｜字幕搜索
                            </Typography>
                        </StyledBox>
                        <IconButton
                            onClick={onClickSearch}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}

export default GlobalNav