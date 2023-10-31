import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
        <Toolbar disableGutters>
            <Typography 
                variant="h6" 
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    marginLeft: '1rem'
                  }}
            >
                Restaurant Reviews
            </Typography>
            <Button color="inherit">
                Add Review
            </Button>
            <Button color="inherit">
                View Reviews
            </Button>
        </Toolbar>
    </AppBar>
  );
}