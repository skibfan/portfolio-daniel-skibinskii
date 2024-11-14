import { Avatar, Box, CardContent, Stack, Typography, Card } from "@mui/material";
import { teal } from "@mui/material/colors";
import { ReactElement } from "react";
import ds_profile from '../assets/ds_profile.png'
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
  

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#E6E6E6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontFamily: 'Heebo, Arial, sans-serif',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const About = (): ReactElement => {

    return (<Box id='about' sx={{width: '100%', height: '500px',textAlign: 'right', 
    display: 'flex', justifyContent: "flex-end", alignItems: 'center'
    }}>
        <Stack direction={'column'} spacing={2}>
    <Stack direction={'row'} spacing={4} justifyContent="center">
        <Card variant="elevation" sx={{backgroundColor: '#FFB364', color: '#034A61'}} >

        <CardContent sx={{width: '500px', 
            alignItems: 'center', textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent:'center', 
            }} >
            <Typography  variant="h5" style={{fontFamily: 'Heebo, Arial, sans-serif', fontWeight: '600'}}>
                Hi! My name is Daniel and I'm a Fullstack Developer.
                </Typography> 
                <Typography variant="h5" style={{fontFamily: 'Heebo, Arial, sans-serif', fontWeight: '600'}}>
                    On this page you can learn a little more about me, so feel free to explore!
                </Typography>
          </CardContent>
          </Card>
        <Typography variant="h2" style={{fontFamily: 'Heebo, Arial, sans-serif', fontWeight: '800'}}>
            Daniel<br/> Skibinskii</Typography>
        <Avatar
            sx={{ bgcolor: '#2A87A6', width: 200, height: 200 }}
            alt="Daniel Skibinskii"
            src={ds_profile}
        />
        <Box sx={{width: "5px", height: 0}}/>

    </Stack>
    <Box sx={{height: '45px'}}/>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid size={2}>
    <Item>React</Item>
  </Grid>
  <Grid size={2}>
    <Item>JavaScript</Item>
  </Grid>
  <Grid size={2}>
    <Item>Node.JS</Item>
  </Grid>
  <Grid size={2}>
    <Item>TypeScript</Item>
  </Grid>
</Grid>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid size={2}>
    <Item>HTML</Item>
  </Grid>
  <Grid size={2}>
    <Item>CSS</Item>
  </Grid>
  <Grid size={2}>
    <Item>Git</Item>
  </Grid>
  <Grid size={2}>
    <Item>PgAdmin</Item>
  </Grid>
</Grid>
    </Stack>

    </Box>)
}

export default About