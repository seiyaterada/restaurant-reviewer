"use client";
import { useState } from 'react'
import { Box, Button, Container, FormControl, Paper, TextField, Typography } from '@mui/material'
import Navbar from '@/components/Navbar';

const BACKEND_API = "http://localhost:4000"

export default function Home() {
  const [data, setData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${BACKEND_API}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ review: data })
      })
      const responseData = await res.json()
      console.log(responseData)
      alert('Thanks for submitting your review!')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <main><>
      <Navbar/>
      <Container sx={{ justifyContent: "center", alignItems: "center", display: "flex"}}>
      <Paper elevation={8} sx={{borderRadius: "12px"}} className="p-6 my-2" >
      <Typography variant="h5">Add a review for this restaurant</Typography>
      <Box 
        display="flex"          // Set display to flex
        flexDirection="column"  // Stack children vertically
        alignItems="center"     // Center children vertically
        sx={{marginTop: "1rem"}}
      >
        <FormControl sx={{display: "block"}} required>
          <TextField
            label="Review"
            multiline
            onChange={(e) => setData(e.target.value)}
          />
          </FormControl>
          <Button
            variant='outlined'
            onClick={handleSubmit}
            sx={{marginTop: "1rem"}}
          >
            Submit Review
          </Button>
      </Box>
      </Paper>
    </Container>
    </>
    </main>
  )
}
