

// import {Card, Button, Row} from 'react-bootstrap'; 

// const Body = () => {
//   return <div>

//  <h1>What service do you need ?</h1>
//     <Row xs={20} md={3} className="g-4">
// <Card border="dark" style={{ width: '18rem' }}>
//   <Card.Img variant="top" style={{height: "200px", }} src="https://i.pinimg.com/564x/3d/57/53/3d575333ea0773d552bd51f16d4c5851.jpg" />
//   <Card.Body>
//     <Card.Title>Gardening</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>


// <Card border="dark" style={{ width: '18rem' }}>
//   <Card.Img variant="top" style={{height: "200px"}} src="https://i.pinimg.com/564x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" />
//   <Card.Body>
//     <Card.Title>Carpenting</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>


// <Card border="dark" style={{ width: '18rem' }}>
//   <Card.Img variant="top" style={{height: "200px"}} src="https://i.pinimg.com/564x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" />
//   <Card.Body>
//     <Card.Title>Carpenting</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>


// <Card border="dark" style={{ width: '18rem' }}>
//   <Card.Img variant="top" style={{height: "200px"}} src="https://i.pinimg.com/564x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" />
//   <Card.Body>
//     <Card.Title>Carpenting</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>

// </Row>

//  }
 

//  </div>;
// };

// export default Body;

import * as React from 'react';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="localhost:3000">
        khademni.tn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// this.state=[
//   {title:"skander", imgurl:""},
//   {title:"oussema", imgurl:""},
//   {title:"aymen", imgurl:""},
//   {title:"fahd", imgurl:""},
//   {title:"yass", imgurl:""},
//   {title:"kad", imgurl:""},
//   {title:"trik", imgurl:""},
//   {title:"aziz", imgurl:""},
//   {title:"meher", imgurl:""},

// ]

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Find the Jobber that fits all your expectations and criterias.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              What service do you need ?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Become a jobber</Button>
              <Button variant="outlined"> Ask for a service</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Service
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Khademni.tn
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We are here to help you and make your life easier
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}