import styled from 'styled-components'
import CheckIcon from '@mui/icons-material/Check'
import { Grid } from '@mui/material'
import { TextColor } from '../../common/TextColor'

export const Styles = {
  SaveContinueButton: styled.button`
    width: 100%;
    height: 48px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.background.startButton};
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    font-family: Source Sans Pro, sans-serif;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
    cursor: pointer;
  `,

  CheckIconStyled: styled(CheckIcon)`
    && {
      font-size: 76px;
    }
  `,

  PageWrapper: styled(Grid)`
    && {
      width: 100%;
      min-height: 100vh;
      align-items: center;
      justify-content: start;
      flex-direction: column;
    }
  `,

  ContentWrapper: styled(Grid)`
    && {
      width: 55%;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      margin-top: 124px;
    }
  `,

  TitleText: styled(TextColor)`
    && {
      font-size: 40px;
      font-weight: 600;
    }
  `,

  MessageText: styled(TextColor)`
    && {
      font-size: 20px;
      font-weight: 400;
    }
  `,

  TimeWrapper: styled(Grid)`
    && {
      margin-top: 32px;
    }
  `,

  Minutes: styled(TextColor)`
    && {
      font-size: 14px;
    }
  `,

  MinutesWrapper: styled(Grid)`
    && {
      margin-top: 4px;
    }
  `,

  MinutesText: styled(TextColor)`
    && {
      font-size: 40px;
      font-weight: 600;
    }
  `,

  ButtonWrapper: styled(Grid)`
    && {
      width: 100%;
      margin-top: 40px;
    }
  `,
}
