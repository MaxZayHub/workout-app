import styled from 'styled-components'
import { Button } from '@mui/material'

export const Styles = {
  VideoStyled: styled.video`
    width: 100%;
  `,

  TimerWrapper: styled.div`
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 82px;

    @media (max-width: 375px) {
      width: 66%;
      margin-right: 0;
    }
  `,

  SkipButton: styled(Button)`
    && {
      border: 2px solid;
    }
  `,
}
