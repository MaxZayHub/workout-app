import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App/App'
import { Grid } from '@mui/material'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext)

  const switchOnChangeHandler = () => {
    themeContext?.setDarkMode(!themeContext?.darkMode)
  }

  return (
    <>
      {themeContext && (
        <Switch
          onColor={'#4f4f4f'}
          onChange={switchOnChangeHandler}
          checked={themeContext?.darkMode}
          uncheckedIcon={
            <Grid
              container
              width={'100%'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <img src={sun} alt={'light mode'} width={20} height={20} />
            </Grid>
          }
          checkedIcon={
            <Grid
              container
              width={'100%'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <img src={moon} alt={'dark mode'} width={20} height={20} />
            </Grid>
          }
        />
      )}
    </>
  )
}

export default ThemeSwitch
