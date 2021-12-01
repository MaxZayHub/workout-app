import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import exercises from "../store/exercises";
import {Button, Grid} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";

const MainImage = styled.div`
  background-image: url('../assets/startImage.png');
  width: 100%;
`

const MainPage = observer( () => {

  useEffect(() => {
    exercises.fetchExercises()
  }, [])

  return (
    <Grid container width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'} gap={'24px'}>
      <Grid container item direction={'column'} alignItems={'center'} justifyContent={'center'} width={'55%'}>
        <Grid item alignSelf={'flex-start'}>
          <Button>
            <ArrowBackIcon />
          </Button>
        </Grid>
        <Grid item alignSelf={'flex-start'}>
          <MainImage/>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default MainPage;