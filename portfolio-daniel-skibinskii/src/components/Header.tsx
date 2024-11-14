import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const Header = () => {
    return(<div id="header">
<Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
        {/* <Button>Dashboard</Button> */}
        {/* <Button LinkComponent={Link} to='/'>Dashboard</Button> */}
        {/* {<Link to='#header'> */}
        <Button href='#header' sx={{color: '#fff'}} >About</Button>
            {/* </Link>} */}
        {<Button sx={{color: '#fff'}}>Skills</Button>}
        {<Button sx={{color: '#fff'}}>Work</Button>}

        {<Button href='https://www.linkedin.com/in/skibdan' startIcon={<LinkedInIcon/>} sx={{color: '#fff'}}>Linkedin</Button>}
        {<Button href='https://github.com/skibfan/' startIcon={<GitHubIcon/>} sx={{color: '#fff'}}>GitHub</Button>}
        
    </Stack>
    </div>)
}

export default Header