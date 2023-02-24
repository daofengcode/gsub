import React from 'react'
import { KeyboardArrowUp } from '@mui/icons-material'
import { Box, Fab, Zoom } from '@mui/material'

type Props = {}

const ScrollToTop = (props: Props) => {
    const [visible, setVisible] = React.useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisible)
        return () => {
            window.removeEventListener("scroll", toggleVisible)
        }
    }, [])

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <Zoom in={visible}>
            <Box
                role="presentation"
                sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 1 }}>
                <Fab onClick={onClick} color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    )
}

export default ScrollToTop