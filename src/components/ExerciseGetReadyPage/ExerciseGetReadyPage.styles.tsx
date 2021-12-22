import styled from 'styled-components'
import { Button, Grid } from '@mui/material'
import { TextColor } from '../../common/TextColor'

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
      color: ${(props) => props.theme.background.controlButtons};
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
    }
  `,

  PageTitle: styled(TextColor)`
    && {
      font-weight: 600;
      font-size: 24px;

      @media (max-width: 375px) {
        font-size: 20px;
      }
    }
  `,

  VideoWrapper: styled(Grid)`
    && {
      width: 100%;
    }
  `,
}
