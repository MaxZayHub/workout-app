import styled from 'styled-components'
import CheckIcon from '@mui/icons-material/Check'

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
}
