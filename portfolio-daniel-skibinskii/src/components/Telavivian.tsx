import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material"
import { ReactElement } from "react"
import telavivian from '../assets/telavivian.png'



const TelAvivian = ():ReactElement => {
return (<>
<Card variant="elevation" sx={{ display: 'flex', margin: '30px', width: '90%',
      backgroundColor: '#E6E6E6'
     }}>
        <CardMedia 
        component="img"
        sx={{ width:351 }}
        image={telavivian}
        alt="Live from space album cover"
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" 
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '200', fontStyle: 'italic'}}>
            Navigate through the city of Tel-Aviv and save your favorite places! <br/><br/>
            </Typography>
            <Typography component="div" variant="h5"  align="left"
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '300',
          maxWidth: '40%',
        }}
        >
            <strong>Stack:</strong> React, JavaScript, Node.Js, TypeScript, Redux, Axios, Bcrypt, Router, Cookies, cors, express, dotenv, Leaflet, MUI, Vite, JsonWebToken, HTML, CSS
            </Typography>
            <Typography component="div" variant="h5"  align="left"
        sx={{fontFamily:'Heebo, Arial, sans-serif', fontWeight: '300',
          maxWidth: '40%',
        }}
        ><br/>
             <Link href='https://telavivian-map.onrender.com'>Check it out!</Link>
            </Typography>
       
      </CardContent>
    </Card>
    </>)
}

export default TelAvivian