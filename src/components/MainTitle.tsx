import React from 'react';
import {Grid, Typography} from "@mui/material";

const MainTitle = () => {
    return (
        <Grid container width={'100%'} flexDirection={'column'} justifyContent={'space-around'} gap={'4px'}>
            <Typography alignSelf={'flex-start'} fontFamily={'Source Sans Pro'} fontWeight={'400'} variant={'h5'} fontSize={'14px'}>Day1</Typography>
            <Typography alignSelf={'flex-start'} fontFamily={'Source Sans Pro'} fontWeight={'600'} variant={'h3'} fontSize={'24px'}>Morning Flexibility Routine</Typography>
            <Typography alignSelf={'flex-start'} fontFamily={'Source Sans Pro'} fontWeight={'400'} variant={'h5'} fontSize={'14px'}>Easy &#183; 15 min &#183; no equipment</Typography>
        </Grid>
    );
};

export default MainTitle;