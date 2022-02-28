import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Aboutus = () => {
    return (
        <Box>
            <Typography sx={{mt: '100px', textAlign: 'left', ml: '30px', fontFamily:'"Playfair Display",serif', color: '#303030', fontWeight: '700'}} variant="h2" gutterBottom component="div">
                    About Us
                </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={5}>
                <Typography sx={{ml: '30px', mt: '10px'}} variant="caption" display="block" gutterBottom>
                Gwtaway is ranked number 1 as the most visited Travel and Tourism website in January 2022. The average amount of time that users spend on the website is 8 minutes, and they see, on average, 8.35 pages per visit. Pages per visit is a popular engagement metric that is calculated by dividing the total number of website views by the total number of visitors. The bounce rate for booking.com is 32.90%, meaning that 32.90% of visitors leave the website after viewing just one page.Businesses owners, people in tourism, hospitality and the arts industries are thrilled to have uMngeni Tourism finally establishing itself.Hundreds of people gathered at the Nelson Mandela Capture Site outside Howick on Wednesday to celebrate uMngeni Tourism and to view their official campaign video and the launch of their website. Its chairperson, JP Prinsloo, said the past 14 months of uMngeni Tourism had been a journey of introspection and reflection to truly understand their purpose as the official community tourism organisation of uMngeni.In 2006, Active Hotels Limited officially changed its name to Booking.com Limited.[6] The integrations of Booking.com and Active Hotels successfully helped the parent improve its financial position from a loss of $19 million in 2002 to $1.1 billion in profit in 2011. This acquisition was praised by some social media as “the best acquisition in Internet history” since no other acquisition in the digital travel market had been shown to be as profitable.n August 2012, Ctrip (now Trip.com Group) a Chinese online travel company, formed a partnership with the company to allow it to access Booking.com's global portfolio.[12] Panorama Group, Indonesia's largest tour and travel company, formed a strategic partnership with Booking.com in 2013 to access the website's portfolio of hotels.[13] In October 2014, Ural Airlines partnered with Booking.com.n April 24, 2020, Booking.com drew criticism when it applied for state aid from under the Dutch government's relief program for business affected by the COVID-19 pandemic, while paying billions to shareholders, with $6.3 billion in cash on its balance sheet.In response, on May 22, Booking announced that it would not seek further wage subsidies from the Dutch government, and instead look for long term answers.[50] The company soon after decided to lay off 25% of its global workforce, and moved on to collective lay offs of on the Amsterdam workforce approximately 25% of its pre-COVID workforce. 


                </Typography>
                </Grid>
                <Grid item xs={6} md={7} sx={{}}>
                    <Grid item xs={6} md={12}>
                        <img style={{width: '99%', height: '400px'}}  src='https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_960_720.jpg' alt=''/>
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <img style={{width: '100%', height: '190px', marginTop: '5px', marginLeft: '5px'}} src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_960_720.jpg' alt=''/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img style={{width: '100%', height: '190px', marginTop: '5px', marginLeft: '3px'}} src='https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg' alt=''/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img style={{width: '98%', height: '190px', marginTop: '5px'}} src='https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_960_720.jpg' alt=''/>
                    </Grid>
                    </Grid> 
                </Grid>
            </Grid>
        </Box>
    );
};

export default Aboutus;