import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Link,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import doctorite from '../assets/images/01.png';
import run from '../assets/images/02.jpg';
import bio from '../assets/images/03.jpg';

// Smooth scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const projectsData = [
  {
    title: 'Doctorite',
    description:
      'Doctorite is a mental wellness platform that provides comprehensive care solutions for behavioral health needs.',
    visit: 'https://www.doctorite.ai/',
    image: doctorite,
  },
  {
    title: 'Runfit.pro',
    description:
      'RunFit.pro is conducting  corporate wellness programs, community challenges and marathon events.',
    visit: 'https://www.fitniti.com/',
    image: run,
  },
  {
    title: 'Twist Bioscience',
    description:
      'Contributed to the development of a secure web application for manufacturing synthetic DNA and DNA products.',
    visit: 'https://www.twistbioscience.com/',
    image: bio,
  }
];

const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 7, md: 8 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth={false}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#111',
            mb: 6,
            textAlign: 'center',
            fontFamily: 'poppins, sans-serif',
          }}
        >
          My <span style={{ color: '#3b82f6' }}>Projects</span>
        </Typography>

        <Grid container spacing={4} sx={{ width: '100%', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          {projectsData.map(({ title, description, visit, image }, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: 'auto',
                  // display: 'flex',
                  maxWidth: 300,
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }} component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end' }}>
                  <Button
                    component={Link}
                    href={visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: 2,
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#fff',
                      },
                    }}
                    variant="outlined"
                  >
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => scrollToSection('hero')}
            sx={{
              px: 2,
              py: 2,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&: hover': {
                backgroundColor: 'primary.main',
                color: '#fff'
              }
            }}
          >
            View More Projects
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};
export default ProjectsSection;