import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-alice-carousel';

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} >
          <Typography className='pb-5' variant='h6'> Company </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> About Us </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Media </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Careers </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Partnerships </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Typography className='pb-5' variant='h6'> Solutions </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Marketing Solutions </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Analytics </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> E-Commerce </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Insights </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Customer Support </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Typography className='pb-5' variant='h6'> Documentation </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> User Guides </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> API Status </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Typography className='pb-5' variant='h6'> Legal </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Claims </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Privacy Policy </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom> Terms of Service </Button>
          </div>
        </Grid>
      </Grid>


      <Grid>
        <Grid container direction="column" alignItems="center" sx={{ bgcolor: 'black', color: 'white', py: 4 }}>
          {/* Footer Content */}
          <Grid item xs={12} sx={{ textAlign: 'center', pt: 4 }}>
            <Typography variant="body2" component="p" sx={{ mb: 2 }}>
              &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 2 }}>
              Crafted with passion by Ayush Aryan.
            </Typography>
            <Typography variant="body2" component="p">
              Icons designed by {' '}
              <Link href="https://www.freepik.com/" target='_blank' color="inherit" underline="hover" sx={{ mx: 0.5 }}>
                Freepik {' '}
              </Link>
              and sourced from {' '}
              <Link href="https://www.flaticon.com/" target='_blank' color="inherit" underline="hover" sx={{ mx: 0.5 }}>
                flaticon.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>


    </div>
  );
}

export default Footer;
