import styled from 'styled-components'
import { Button, Grid, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { TextColor } from '../../common/TextColor'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const Styles = {
  PauseButton: styled.button`
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.background.controlButtons}; ;
  `,

  PausedBlock: styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    flex-direction: column;
    gap: 8px;
    border-radius: 10px;
    user-select: none;
  `,

  LeaveWorkoutButton: styled.div`
    width: 256px;
    height: 48px;
    outline: none;
    margin-top: 26px;
    background-color: transparent;
    border-radius: 10px;
    color: #eeeeee;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,

  ControlButton: styled(Button)`
    && {
      border: 2px solid;
      color: ${(props) => props.theme.background.controlButtons};
    }
  `,

  ButtonPlayIcon: styled(PlayArrowIcon)`
    && {
      color: white;
    }
  `,

  ButtonPauseIcon: styled(PauseIcon)`
    && {
      color: white;
    }
  `,

  PageWrapper: styled(Grid)`
    && {
      width: 100%;
      min-height: 100vh;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      gap: 32px;
      tab-index: 0;
    }
  `,

  GetReadyTitle: styled(TextColor)`
    && {
      font-weight: 600;
      font-size: 24px;

      @media (max-width: 375px) {
        font-size: 20px;
      }
    }
  `,

  ContentWrapper: styled(Grid)`
    && {
      justify-content: space-between;
    }
  `,

  TimerContent: styled(Grid)`
    && {
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  `,

  VideoWrapper: styled(Grid)`
    && {
      width: 100%;
      position: relative;
      border-radius: 10px;
    }
  `,

  PausedBlockTitle: styled(Typography)`
    && {
      font-size: 24px;
      color: white;
      font-family: 'Source Sans Pro', sans-serif;
    }
  `,

  PausedBlockText: styled(Typography)`
    && {
      font-size: 16px;
      color: white;
      font-family: 'Source Sans Pro', sans-serif;
    }
  `,

  LeaveWorkoutButtonText: styled(Typography)`
    && {
      font-size: 24px;
      color: white;
      font-family: 'Source Sans Pro', sans-serif;
    }
  `,

  PauseWrapper: styled(Grid)`
    && {
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      border-top: 8px solid ${(props) => props.theme.colors.lineBorder};
    }
  `,

  Timer: styled(CountdownCircleTimer).attrs(({ theme }) => ({
    colors: [[theme.background.exerciseTimer, 1]],
    size: 128,
  }))``,
}
