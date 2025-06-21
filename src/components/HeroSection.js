import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Code } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import imageUrl from "../assets/images/photo.jpg";

// Smooth scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: '#f9fafb',
        pt: 2,
        py: { xs: 8, md: 10 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box textAlign={isMobile ? 'center' : 'left'}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4rem' },
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
              >
                Hi, I'm{' '}
                <Typography
                  component="span"
                  variant="h2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif'

                  }}
                >
                  Pavankumar
                </Typography>
              </Typography>

              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: '#666',
                  mb: 2,
                  fontWeight: 'bold',
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: { xs: '1rem', sm: '1.5rem', lg: '2rem' }
                }}
              >
                UI/UX & Full Stack Developer
              </Typography>
              <Typography
                variant="h6"
                component='h6'
                sx={{
                  color: '#666',
                  mb: 4,
                  maxWidth: '600px',
                  mx: isMobile ? 'auto' : 0,
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
              >
                I create high-performance, accessible, and visually stunning digital experiences.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WorkIcon />}
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    textTransform: 'none'
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ContactPageIcon />}
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box display="flex" justifyContent="center" position="relative">
              <Avatar
                src={imageUrl}
                alt="Pavankumar - Full Stack Developer"
                sx={{
                  width: { xs: 280, lg: 350 },
                  height: { xs: 280, lg: 350 },
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: theme.shadows[10],
                  '& img': {
                    objectFit: 'fill',
                  }
                }}
              />
              <Card
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: { xs: 20, lg: -20 },
                  p: 1.5,
                  boxShadow: theme.shadows[8],
                }}
              >
                <CardContent sx={{ textAlign: 'center', width: '94px', height: '26px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        padding: '10px',
                        bgcolor: theme.palette.primary.main,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Code sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight="bold" sx={{ ml: 1, color: 'black' }}>
                        3+ Years Experience
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;