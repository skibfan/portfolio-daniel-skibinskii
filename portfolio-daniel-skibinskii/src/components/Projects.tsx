import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import telavivian from '../assets/telavivian.png'
import { CardMedia, Grow, Link } from '@mui/material';
import safeLogo from '../assets/SafeLogo.png'


const MyProjects = () => {
  return (
    <Timeline id='projects'
    position="right"
    sx={{marginTop: '75px'}}>
      
        {/* Telavivian  */}
      <TimelineItem>
      <TimelineContent
          sx={{ py: '12px', px: 2, m: 'auto 0' }}
          align="right"
        >
          <Link href='https://telavivian-map.onrender.com' color="inherit">
          <Typography variant="h6" component="span"
          sx={{fontWeight: 700}}
          >
            Tel-Avivian
          </Typography>
          </Link>
          <Typography>Explore the city you know!</Typography>
        </TimelineContent>

        <TimelineSeparator sx={{minHeight: '350px'}}>
          <TimelineConnector />
          <TimelineDot
              color="secondary"
              sx={{

                width: {xs: 135, md: 300},
                height: {xs: 135, md: 300}, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                padding: 0,
                border: 'none',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", 
                  transform: "scale(1.2)",
                }}
                image={telavivian}
                alt="telavivian"
              />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
          <TimelineOppositeContent sx={{ py: '12px', px: 2, m: 'auto 0', }} align="left">
          
            <Typography variant="h6" component="span"
            sx={{fontWeight: 700}}>
              Stack
            </Typography>
            <Typography sx={{maxWidth: '500px'}}>React, JavaScript, Node.Js, TypeScript, Redux, Axios, Bcrypt, Router, Cookies, cors, express, dotenv, Leaflet, MUI, Vite, JsonWebToken, HTML, CSS</Typography>
            
        </TimelineOppositeContent>
      </TimelineItem>
      

      {/* SAFE */}
      <TimelineItem>


      <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }} align="right">
        <Link href='https://safeaiapp.com' color="inherit">
          <Typography variant="h6" component="span"
          sx={{fontWeight: 700}}
          
          >
            SafeAI
          </Typography>
          </Link>
          <Typography sx={{maxWidth: '500px'}}>Your AI-powered virtual companion for overcoming
            mental challenges.
            Anytime. Anywhere.</Typography>


        </TimelineContent>
      

        <TimelineSeparator sx={{minHeight: '350px'}}>
          <TimelineConnector  />
          <TimelineDot
              color="secondary"
              sx={{

                width: {xs: 135, md: 300},
                height: {xs: 135, md: 300}, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                padding: 0,
                border: 'none',
                bgcolor: 'white'
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "90%",
                  height: "90%",
                  objectFit: "cover", 
                  // transform: "scale(1.2)",
                }}
                image={safeLogo}
                alt="telavivian"
              />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
       
          <TimelineOppositeContent
            sx={{ py: '12px', px: 2, m: 'auto 0' }}
            align="right"
          >
            

            <Typography variant="h6" component="span"
            sx={{fontWeight: 700}}>
              Stack
            </Typography>
            <Typography sx={{maxWidth: '500px'}}>Cross-Platform Development, IOS, Android, UI-UX Design, Flutter, Firebase, JSON, Dart, Swift, App Stores for iOS and Android, GIT, Jira, Figma</Typography>
            
          </TimelineOppositeContent>

      </TimelineItem>
      

      

     
    </Timeline>
  );
}

export default MyProjects