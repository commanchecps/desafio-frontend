import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                        <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DESAFIO TEIA
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem
                                    href="/listar"
                                    component="a"
                                >
                                    <Typography
                                        textAlign="center">Listar</Typography>
                                </MenuItem>
                                <MenuItem
                                    href="/detalhes/random"
                                    component="a"
                                >
                                    <Typography
                                        textAlign="center">Foto Aleatória</Typography>
                                </MenuItem>
                                <MenuItem
                                    href="https://github.com/commanchecps/desafio-frontend"
                                    component="a"
                                >
                                    <Typography
                                        textAlign="center">Código Fonte</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DESAFIO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem
                                href="/listar"
                                component="a"
                            >
                                <Typography
                                    textAlign="center">Listar</Typography>
                            </MenuItem>
                            <MenuItem
                                href="/detalhes/random"
                                component="a"
                            >
                                <Typography
                                    textAlign="center">Foto Aleatória</Typography>
                            </MenuItem>
                            <MenuItem
                                href="https://github.com/commanchecps/desafio-frontend"
                                component="a"
                                target='_blank'
                            >
                                <Typography
                                    textAlign="center">Código Fonte</Typography>
                            </MenuItem>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Avatar">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Desenho" src="/logo.svg" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
}
export default ResponsiveAppBar;