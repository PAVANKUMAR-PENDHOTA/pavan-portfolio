import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'footer', label: 'Contact' },
];

// Smooth scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };
  return (
    <>
      <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              sx={{
                fontWeight: 800,
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#1e88e5',
                textDecoration: 'none',
                userSelect: 'none',
              }}
            >
              PP
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    sx: {
                      width: 200,
                      bgcolor: '#fff',
                      p: 2,
                    },
                  }}
                >
                  <List>
                    {sections.map(({ id, label }) => (
                      <ListItemButton
                        key={id}
                        onClick={() => handleNavClick(id)}
                        sx={{
                          borderRadius: 1,
                          mb: 1,
                          '&:hover': { bgcolor: 'primary.light' },
                        }}
                      >
                        <ListItemText
                          primary={label}
                          primaryTypographyProps={{
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            color: '#111',
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box>
                {sections.map(({ id, label }) => (
                  <Button
                    key={id}
                    color="inherit"
                    onClick={() => scrollToSection(id)}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#444',
                      mx: 1,
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.3s',
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}