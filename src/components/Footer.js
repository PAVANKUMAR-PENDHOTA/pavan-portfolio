import {
  Typography,
  Box,
  Container,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        py: 6,
        bgcolor: '#222933',
        color: '#ddd',
        textAlign: 'center',
        fontSize: '0.9rem',
        userSelect: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} Pavankumar Pendhota. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link
            href="https://github.com/PAVANKUMAR-PENDHOTA"
            target="_blank"
            rel="noopener noreferrer"
            color="#ddd"
            sx={{ mx: 1, '&:hover': { color: '#fff' } }}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pavankumar-pendhota-58b47123b/"
            target="_blank"
            rel="noopener noreferrer"
            color="#ddd"
            sx={{ mx: 1, '&:hover': { color: '#fff' } }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;