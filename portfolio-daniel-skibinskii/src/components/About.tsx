import { Avatar, Box, CardContent, Stack, Typography, Card, Grow } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import ds_profile from '../assets/ds_profile.png'
import Slide from '@mui/material/Slide';
import MyStack from "./MyStack";
import { ReactTyped } from "react-typed";

const About = (): ReactElement => {

    const [checked, setChecked] = useState(false)

    useEffect(() =>{
        setChecked(true)
    }, [])

    return (<Box id='about' sx={{width: '100%', minHeight: '500px',textAlign: 'right', 
    display: 'flex', justifyContent: "center", alignItems: 'center', p: 3,
    overflow: 'hidden' // TODO: consider changing
    }}>
        <Stack direction={'column'} spacing={2} alignItems='center'>
            <Stack direction={{xs: 'column-reverse', md: 'row'}} spacing={4} justifyContent="center"
            alignItems='center'
            sx={{width: '100%',
                flexWrap: 'wrap', // TODO: consider removing
            }}>
                <Grow in={checked} timeout={1200}>
                <Card variant="elevation" sx={{backgroundColor: '#003333', color: '#034A61', 
                    maxWidth: '500px', p: 2,
                     width: {xs: '450px', md: '600px'},
                     height: {xs: '115px', md: '100px'},
                     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                     borderRadius: '10px'
                    }} >

                <CardContent sx={{ textAlign: 'start', }} >
                    <Typography  variant="h5" sx={{fontWeight: '600', mt: 1,
                   color: 'white'
                    }}>
                        {"<"}
                        <ReactTyped
                        strings={["Hi! My name is Daniel and I'm a Fullstack Developer.", "On this page you can learn a little more about me. Feel free to explore"] }
                        typeSpeed={30}
                        backDelay={2000}
                        backSpeed={8}
                        cursorChar=">"
                        showCursor
                        />
                             
                        </Typography> 

                </CardContent>
                </Card>
                </Grow>
                
                <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={1000}>
                
                <Typography variant="h2" style={{fontWeight: '800', textAlign: 'center', color: 'white'}}>
                    Daniel<br/> Skibinskii</Typography>
                    </Slide>
                    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                <Avatar
                    sx={{ bgcolor: '#003333', width: { xs: 150, md: 300 }, height: { xs: 150, md: 300 },
                    border: '4px solid white',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', 
                }}
                    alt="Daniel Skibinskii"
                    src={ds_profile}
                    
                />
                </Slide>
                <Box sx={{width: "5px", height: 0}}/>
                
            </Stack>
            <Box sx={{height: '45px'}}/>
                <MyStack />
    </Stack>

    </Box>)
}

export default About