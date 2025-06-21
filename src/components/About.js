import {
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
} from '@mui/material';
import portrait from '../assets/images/pass_photo.jpg';

function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: '#111',
            mb: 3,
            textAlign: 'center',
            fontFamily: 'poppins, sans-serif',
          }}
        >
          About <span style={{ color: '#3b82f6' }}>Me</span>
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              alt="Profile Picture"
              src={portrait}
              sx={{
                width: 160, height: 160, margin: '0 auto', boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                border: '4px solid #3b82f6',
                '& img': {
                  objectFit: 'fill',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{ color: '#6b7280', fontSize: '1.125rem', lineHeight: 1.7, alignItems: 'center', textAlign: 'justify' }}
            >
              I'm a passionate Full Stack Developer with 3+ years of experience building web applications using the JavaScript stack (React, Node.js, Express, MongoDB). I focus on clean code, intuitive UI/UX, and creative problem-solving to deliver high-quality solutions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default About;