import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Logo from '../../assets/logo 2.svg';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function ScrollTop(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
                target: window ? window() : undefined,
                disableHysteresis: true,
                threshold: 100,
        });

        const handleClick = (event) => {
                const anchor = (event.target.ownerDocument || document).querySelector(
                        '#back-to-top-anchor',
                );

                if (anchor) {
                        anchor.scrollIntoView({
                                block: 'center',
                        });
                }
        };

        return (
                <Fade in={trigger}>
                        <Box
                                onClick={handleClick}
                                role="presentation"
                                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        >
                                {children}
                        </Box>
                </Fade>
        );
}



export default function BackToTop(props) {
        return (
                <React.Fragment>
                        <AppBar className="navbar">
                                <Container >
                                        <Toolbar>
                                                <div style={{ width: "80px" }}>
                                                        <NavLink to="/">
                                                                <img src={Logo} alt="Logo" />
                                                        </NavLink>
                                                </div>
                                                <ul className="navItems">
                                                        <li className="navItem">
                                                                <NavLink to="/posts" className="navLink">
                                                                        প্রশ্ন
                                                                </NavLink>
                                                        </li>
                                                        <li className="navItem">
                                                                <NavLink to="/books" className="navLink">
                                                                        বই
                                                                </NavLink>
                                                        </li>
                                                        <li className="navItem">
                                                                <NavLink to="" className="navLink">
                                                                        নারীদের পাতা
                                                                </NavLink>
                                                        </li>
                                                </ul>
                                        </Toolbar>
                                </Container>
                        </AppBar>

                        <Toolbar id="back-to-top-anchor" />

                        <ScrollTop {...props}>
                                <Fab size="small" aria-label="scroll back to top">
                                        <KeyboardArrowUpIcon />
                                </Fab>
                        </ScrollTop>
                </React.Fragment>
        );
}