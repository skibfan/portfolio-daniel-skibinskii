import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Box, Typography } from '@mui/material'

function App() {

  return (
    <>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Box component="footer" sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ marginTop: 4, width: "100%", bottom: 0, padding: "10px" }}>
            © {new Date().getFullYear()} Daniel Skibinskii. All rights reserved.
          </Typography>
        </Box>
    </>
  )
}

export default App
