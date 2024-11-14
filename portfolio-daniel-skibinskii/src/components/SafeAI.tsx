import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material"
import { ReactElement } from "react"
import safeLogo from '../assets/SafeLogo.png'



const SafeAI = ():ReactElement => {
return (<>
<Card variant="elevation" sx={{ display: 'flex', margin: '30px', width: '90%',
      backgroundColor: '#E6E6E6'
     }}>
       
      <CardContent sx={{ flex: '1 1 1 1' }}>
        <Typography component="div" variant="h5" 
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '200', fontStyle: 'italic'}}>
            Your AI-powered virtual companion for overcoming
mental challenges.
Anytime. Anywhere.<br/><br/>
            </Typography>
            <Typography component="div" variant="h5"  align="left"
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '300',
          maxWidth: '90%',
        }}
        >
            <strong>Stack:</strong> Cross-Platform Development, IOS, Android, UI-UX Design, Flutter, Firebase, JSON, Dart, Swift, App Stores for iOS and Android, GIT, Jira, Figma
            </Typography>
            <Typography component="div" variant="h5"  align="left"
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '300',
        }}
        ><br/>
             <Link href='https://safeaiapp.com'>Join the community</Link>
            </Typography>
       
      </CardContent>
       <CardMedia 
        component="img"
        sx={{ width:351, flexShrink: 0}}
        image={safeLogo}
        alt="Live from space album cover"
      />
    </Card>
    </>)
}

export default SafeAI