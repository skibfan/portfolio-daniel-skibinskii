import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import { Typography } from '@mui/material'

function App() {

  return (
    <>

        <Header />
        <About />
        <Projects />
        <footer style={{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography variant="subtitle2" sx={{ marginTop: 4, width: "100%", bottom: 0, padding: "10px" }}>
                © 2024 Daniel Skibinskii. All rights reserved.
                </Typography>
            </footer>
    </>
  )
}

export default App
