import styled from 'styled-components'
import { Grid } from '@mui/material'
import { TextColor } from '../../common/TextColor'

export const Styles = {
  PageWrapper: styled(Grid)`
    && {
      align-items: center;
      justify-content: start;
      gap: 8px;
      flex-direction: row;
    }
  `,

  CardWrapper: styled(Grid)`
    && {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      width: auto;
    }
  `,

  StyledTitle: styled(TextColor)`
    && {
      font-size: 20px;
      font-weight: 600;

      @media (max-width: 375px) {
        font-size: 18px;
      }
    }
  `,

  DurationTitle: styled(TextColor)`
    && {
      font-size: 14px;
      font-weight: 400;
    }
  `,
}
