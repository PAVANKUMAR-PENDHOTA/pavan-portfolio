import {
  Typography,
  Box,
  Container,
  Paper,
} from '@mui/material';

const experienceTimeline = [
  {
    type: 'work',
    role: 'Senior Frontend Developer',
    company: 'Freelancer ',
    duration: '2024 Feb - Present',
    description:
      'Leading frontend development efforts building scalable React applications and UI/UX design with a focus on performance and accessibility.',
  },
  {
    type: 'work',
    role: 'Frontend Developer',
    company: 'Sparity Soft Technologies Pvt. Ltd.',
    duration: '2022 Feb - 2024 Jan',
    description:
      'I developed and maintained client websites using React, Redux, Next.js, and Material-UI, gaining hands-on experience with real-world projects and collaborative development.',
  },
  {
    type: 'learning',
    role: 'Full Stack Developer',
    company: 'STPI & Code Academy',
    duration: '2021 - 2022',
    description: 'I started my career with a Full Stack Developer internship at STPI Kakatiya IT Park, working with PHP. To advance my skills, I later completed a MERN Stack course at VisualPath Code Academy, where I gained practical experience in modern web technologies.',
  },
  {
    type: 'education',
    role: 'M.Sc. in Computer Science',
    company: 'Kakatiya University',
    duration: '2018 - 2020',
    description: 'Graduated with honors, specializing in software engineering and web development.',
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f9fafb' }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, color: '#111', mb: 6, textAlign: 'center', fontFamily: 'poppins, sans-serif' }}
        >
          Experience <span style={{ color: '#3b82f6' }}> & Education</span>
        </Typography>
        <Box>
          {experienceTimeline.map(({ type, role, company, duration, description }, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 3,
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 12,
                  top: 24,
                  width: 12,
                  height: 12,
                  bgcolor: type === 'work' ? 'primary.main' : 'secondary.main',
                  borderRadius: '50%',
                },
                pl: 6,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#111' }}>
                {role}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#6b7280', mb: 1 }}>
                {company} | {duration}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                {description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
export default Experience;