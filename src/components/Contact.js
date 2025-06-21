import { Box, Container, Typography, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#111',
            mb: 2,
            textAlign: 'center',
            lineHeight: 1.1,
            fontFamily: 'poppins, sans-serif',
          }}
        >
          Contact <span style={{ color: '#3b82f6' }}> Me</span>
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Typography
            variant="body1"
            sx={{
              color: '#6b7280',
              fontSize: '1.125rem',
              mb: 4,
              textAlign: 'center',
              maxWidth: '800px',
              justifyContent: 'center',
            }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out via email or phone, or connect with me on LinkedIn.
          </Typography>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#111' }}>
              Email
            </Typography>
            <Link
              href="mailto:your.email@example.com"
              sx={{ color: '#6b7280', fontSize: '1rem', textDecoration: 'none' }}
            >
              pendhotapavankumar@gmail.com
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#111' }}>
              Phone
            </Typography>
            <Typography sx={{ color: '#6b7280', fontSize: '1rem' }}>
              +91 7673970306
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'center' }}>
            <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#111' }}>
              Location
            </Typography>
            <Typography sx={{ color: '#6b7280', fontSize: '1rem' }}>
              Hyderabad, TG, IND
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}