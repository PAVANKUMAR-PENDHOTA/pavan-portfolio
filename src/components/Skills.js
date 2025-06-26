import {
  Typography,
  Box,
  Container,
  Chip,
} from '@mui/material';

const skillsList = [
  'JavaScript',
  'React',
  'Material-UI',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript',
  'Git',
  'HTML5',
  'CSS3',
  'RESTful APIs',
  'Redux',
  'Next.js',
  'UI/UX Design',
  'Adobe XD',
  'Figma',
  'Adobe Photoshop',
  'Premiere Pro',
  'Social Engineering',
  'Ethical Hacking',
  'kali Linux',
  'Web Security',
  'Penetration Testing',
  'Ubuntu operating system',
];

function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: 7, md: 9 } }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: '#111',
            mb: 2,
            textAlign: 'center',
            fontFamily: 'poppins, sans-serif'
          }}
        >
          Skills <span style={{ color: '#3b82f6' }}> & Expertise</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#6b7280', fontSize: '1.125rem', mb: 4, textAlign: 'center', justifyContent: 'center' }}
        >
          I have hands-on experience with multiple web tools and frameworks, Here are my key strengths.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {skillsList.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
              variant="outlined"
              component="div"
              clickable={false} // Disable click interaction
              onClick={() => { }}
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                px: 2.5,
                py: 1,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: '#fff',
                  borderColor: 'primary.main',
                  cursor: 'default',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
export default Skills;