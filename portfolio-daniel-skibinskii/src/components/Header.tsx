import { Box, Button, Stack } from '@mui/material'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CV_DanielSkibinskii from '../assets/CV_Daniel_Skibinskii __Full_Stack.pdf'

const Header = () => {
    return(<div id="header">
<Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
    
<Stack spacing={2} direction={"row"} >
<Box width='35px'/>
        <Button href='#about' sx={{color: '#fff'}} >About</Button>
        {<Button href='#projects' sx={{color: '#fff'}}>Work</Button>}
</Stack>
<Stack spacing={2} direction={"row"} >
        {<Button href='https://www.linkedin.com/in/skibdan' startIcon={<LinkedInIcon/>} sx={{color: '#fff'}}>Linkedin</Button>}
        {<Button href='https://github.com/skibfan/' startIcon={<GitHubIcon/>} sx={{color: '#fff'}}>GitHub</Button>}
        <Button href={CV_DanielSkibinskii} startIcon={<FileDownloadIcon/>} 
        sx={{color: '#fff'}} download='Daniel_Skibinskii_Full_Stack.pdf'></Button>
        </Stack>
    </Stack>
    </div>)
}

export default Header