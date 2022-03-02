import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Aboutus = () => {
    return (
        <Box>
            
            <Grid container spacing={2} sx={{mt: '70px'}}>
                <Grid item xs={12} sm={6} md={5}>
                <Typography sx={{mt: '110px', textAlign: 'left', ml: '30px', fontFamily:'"Playfair Display",serif', color: '#303030', fontWeight: '700'}} variant="h2" gutterBottom component="div">
                    About Us
                </Typography>
                <Typography sx={{ml: '30px', mt: '10px', textAlign: 'center'}} variant="caption" display="block" gutterBottom>
                Gwtaway is ranked number 1 as the most visited Travel and Tourism website in January 2022. The average amount of time that users spend on the website is 8 minutes, and they see, on average, 8.35 pages per visit. Pages per visit is a popular engagement metric that is calculated by dividing the total number of website views by the total number of visitors. 
                </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                <Container>
                    <Grid item xs={12} sm={12} md={12}>
                        <img style={{width: '99%', height: '400px'}}  src='https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_960_720.jpg' alt=''/>
                    </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <img style={{width: '100%', height: '190px', marginTop: '5px', marginLeft: '5px'}} src='https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_960_720.jpg' alt=''/>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <img style={{width: '100%', height: '190px', marginTop: '5px', marginLeft: '3px'}} src='https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg' alt=''/>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <img style={{width: '98%', height: '190px', marginTop: '5px'}} src='https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg' alt=''/>
                            </Grid>
                        </Grid> 
                        </Container> 
                </Grid> 
                
            </Grid>
        </Box>
    );
};

export default Aboutus;