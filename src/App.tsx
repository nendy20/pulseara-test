import { Box } from '@mui/material'
import Home from '@/pages/Home'

function App() {
  return (
    <Box py="3.5rem" px={{ xs: "0.5rem", md: "1rem", lg: "3.5rem" }}
      sx={{ minHeight: "100vh", bgcolor: (theme) => theme.palette.secondary.main }}
    >
      <Home />
    </Box>
  )
}

export default App
