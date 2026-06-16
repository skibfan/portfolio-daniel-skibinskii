import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Link } from '@mui/material';
import telavivian from '../assets/telavivian.png'
import safeLogo from '../assets/SafeLogo.png'
import tlvtechLogo from '../assets/tlvtech_logo.png'

interface Project {
  title: string
  href?: string
  period: string
  description: string
  stack: string
  image?: string
  imageBg?: string
  imageScale?: boolean
  initials?: string
}

const projects: Project[] = [
  {
    title: 'TLV Tech',
    period: 'Jan 2025 – Feb 2026 · Tel Aviv',
    description:
      'Full Stack Developer on two production B2C platforms. Refactored a legacy backend reducing page load by ~43%, built a fraud-detection system that cut daily manual review from several hours to 10–15 minutes, brought a second product to client-facing beta with a payments system.',
    stack: 'React, Next.js, Redux, Node.js, GraphQL, PHP, MongoDB, REST APIs, AWS, Heroku, GitHub Actions, Git, Agile',
    image: tlvtechLogo,
    imageScale: true,
  },
  {
    title: 'Tel-Avivian',
    href: 'https://telavivian-map.onrender.com',
    period: 'Personal project',
    description: 'Explore the city you know!',
    stack: 'React, JavaScript, TypeScript, Node.js, Redux, Axios, Bcrypt, Express, Leaflet, MUI, Vite, JWT, HTML, CSS',
    image: telavivian,
    imageScale: true,
  },
  {
    title: 'SafeAI · Safe',
    href: 'https://safeaiapp.com',
    period: 'Feb 2024 – Dec 2024 · Tel Aviv (part-time)',
    description:
      'Built a Flutter mobile app (MVC) from early development through App Store and Google Play submission. AI-powered virtual companion for overcoming mental challenges — anytime, anywhere.',
    stack: 'Flutter, Dart, Firebase, Swift, iOS, Android, Figma, Jira, Git',
    image: safeLogo,
    imageBg: 'white',
  },
  {
    title: 'Fitter',
    period: 'Jul 2023 – Oct 2023 · Tel Aviv',
    description: 'Developed features for a cross-platform fitness app on iOS and Android.',
    stack: 'Flutter, Dart, iOS, Android',
    initials: 'FIT',
  },
]

const dotSize = { xs: 135, md: 220 }

const MyProjects = () => {
  return (
    <Timeline id='projects' position="right" sx={{ marginTop: '75px' }}>
      {projects.map((p, i) => (
        <TimelineItem key={p.title}>
          <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }} align="right">
            <Box sx={{ maxWidth: '400px', ml: 'auto' }}>
              {p.href ? (
                <Link href={p.href} color="inherit" target="_blank" rel="noopener noreferrer">
                  <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                    {p.title}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                  {p.title}
                </Typography>
              )}
              <Typography variant="caption" sx={{ display: 'block', opacity: 0.6, mb: 0.5 }}>
                {p.period}
              </Typography>
              <Typography>{p.description}</Typography>
            </Box>
          </TimelineContent>

          <TimelineSeparator sx={{ minHeight: '300px' }}>
            {i !== 0 && <TimelineConnector />}
            {i === 0 && <TimelineConnector sx={{ visibility: 'hidden' }} />}
            <TimelineDot
              color="secondary"
              sx={{
                width: dotSize,
                height: dotSize,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                padding: 0,
                border: 'none',
                bgcolor: p.imageBg ?? 'secondary.main',
              }}
            >
              {p.image ? (
                <CardMedia
                  component="img"
                  sx={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'cover',
                    ...(p.imageScale && { transform: 'scale(1.2)', width: '100%', height: '100%' }),
                  }}
                  image={p.image}
                  alt={p.title}
                />
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <Typography
                    variant="h5"
                    sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1rem', md: '1.4rem' }, letterSpacing: 1 }}
                  >
                    {p.initials}
                  </Typography>
                </Box>
              )}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineOppositeContent sx={{ py: '12px', px: 2, m: 'auto 0' }} align="left">
            <Box sx={{ maxWidth: '400px' }}>
              <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                Stack
              </Typography>
              <Typography>{p.stack}</Typography>
            </Box>
          </TimelineOppositeContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default MyProjects
