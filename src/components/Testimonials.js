import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const testimonialsData = [
  { name: 'Mahesh D', role: 'Developer', text: 'This is an amazing product!' },
  { name: 'Shiva T', role: 'Designer', text: 'Loved the clean UI and UX!' },
  { name: 'Sai Kumar P', role: 'Manager', text: 'Improved our workflow tremendously.' },
];

function Testimonials() {
  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 7, md: 9 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 10 } }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.2rem', md: '3rem' },
            color: '#111',
            mb: 8,
            textAlign: 'center',
          }}
        >
          My <span style={{ color: '#3b82f6' }}>Testimonials</span>
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {testimonialsData.map(({ name, role, text }, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex' }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  width: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#6b7280',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    mb: 3,
                    lineHeight: 1.7,
                  }}
                >
                  “{text}”
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: '#111' }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: '#6b7280' }}
                  >
                    {role}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Testimonials;
