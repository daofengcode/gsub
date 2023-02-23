import { Box, CircularProgress, Divider, Skeleton, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { usePost } from '../../hooks/usePost';
import styled from '@emotion/styled';
import { getAllTimeString } from '../../utils/string.helper';

const StyledBox = styled.div((props) => ({
    "& img": {
        maxWidth: "100%"
    }
}))

const StyledTime = styled.div(props => ({
    "marginLeft": "auto",
    "color": "blue",
    "textAlign":"right",
    paddingBottom: "8px"
}))


type Props = {}

const Post = (props: Props) => {
    const params = useParams()
    const query = usePost(params.id)

    React.useEffect(() => {
        console.log(query.data)
    }, [query.data])

    if (query.isLoading) {
        return (
            <React.Fragment>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: 5 }}>
                    <CircularProgress />
                </Box>
            </React.Fragment>
        )
    }
    if (query.error) {
        return <NotFound></NotFound>
    }
    if (query.data) {
        return (
            <React.Fragment>
                <Typography variant="h6" paddingY={3}>
                    {query.data.data.title.rendered}
                </Typography>
                <StyledTime>{getAllTimeString(query.data.data.date)}</StyledTime>
                <Divider variant="middle" />
                <StyledBox dangerouslySetInnerHTML={{ __html: query.data.data.content.rendered }}></StyledBox>
            </React.Fragment>
        )
    }
    return <></>
}

export default Post