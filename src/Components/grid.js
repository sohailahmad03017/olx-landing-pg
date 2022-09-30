import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <>
        {/* // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        //         {Array.from(Array(6)).map((_, index) => ( */}
        {/* //             <Grid item xs={2} sm={6} md={3} key={index}>
        //                 <Item>xs=2</Item>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box> */}
        <div className='container' >
            <div className='row'>
                <div className='col-md-4'>
                <img src={footer} className='footer'/>
                </div>
                <div className='col-md-4'>
                <h2>TRY THE OLX APP</h2>
    <p className=''>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div className='col-md-4'>
                <h4>GET YOUR APP TODAY</h4>
    
    <div>
         <span><img src={footer1} className='footer1'/></span>
        <span><img src={footer2} className='footer2'/></span>
        <span><img src={footer3} className='foooter3'/></span>
    </div>
   
                </div>
            </div>
        </div>
        <footer>
            <div className='container'>
                <div className='row'>
<div className='col-md-2'>
    <h4>POPULAR CATEGORIES</h4>
    <p className='text-secondary'>Cars</p>
    <p className='text-secondary'>Flats for rent</p>
    <p className='text-secondary'>Mobile Phones</p>
    <p className='text-secondary'>Jobs</p>
</div>
<div className='col-md-2'>
    <h4>TRENDING SEARCHES</h4>
    <p className='text-secondary'>Bikes</p>
    <p className='text-secondary'>Books</p>
    <p className='text-secondary'>Watches</p>
    <p className='text-secondary'>Dogs</p>
</div>
<div className='col-md-2'>
    <h4>ABOUT US</h4>
    <p className='text-secondary'>About EMPG</p>
    <p className='text-secondary'>OLX Blog</p>
    <p className='text-secondary'>Contact Us</p>
    <p className='text-secondary'>OLX for Bussiness</p>
</div>
<div className='col-md-2'>
    <h4>OLX</h4>
    <p className='text-secondary'>Help</p>
    <p className='text-secondary'>Sitemap</p>
    <p className='text-secondary'>Terms of use</p>
    <p className='text-secondary'>Privacy Policy</p>
</div>
<div className='col-md-4'>
    <h4>FOLLOW US</h4>
    <div>
        <span><img src={facebook} className='facebook'/></span>
        <span><img src={twitter} className='twitter'/></span>
        <span><img src={youtube} className='youtube'/></span>
        <span><img src={instagram} className='instagram'/></span>
    </div>
    <div>
    <span><img src={footer1} className='footer1'/></span>
        <span><img src={footer2} className='footer2'/></span>
        <span><img src={footer3} className='foooter3'/></span>
    </div>
  
</div>
                </div>
            </div>
        </footer>
        </>
    );
}

