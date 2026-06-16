import { Box, Button, Stack, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Contact = () => {
  return (
    <Box id="contact" sx={{ textAlign: 'center', py: 8, px: 3 }}>
      <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
        Get In Touch
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: 480, mx: 'auto' }}>
        I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href="mailto:skibfan@icloud.com"
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: '#aaa', color: '#aaa' } }}
        >
          Email Me
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/skibdan"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: '#aaa', color: '#aaa' } }}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/skibfan/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: '#aaa', color: '#aaa' } }}
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  )
}

export default Contact
