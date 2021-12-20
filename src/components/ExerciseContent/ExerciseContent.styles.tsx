import styled from 'styled-components'
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

export const Style = {
  PauseButton: styled.button`
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #aa00ff;
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
}
