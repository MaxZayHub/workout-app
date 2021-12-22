import styled from 'styled-components'
import { Grid } from '@mui/material'
import { TextColor } from '../../common/TextColor'

export const Styles = {
  PageWrapper: styled(Grid)`
    && {
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      gap: 4px;
    }
  `,

  SmallText: styled(TextColor)`
    && {
      align-self: flex-start;
      font-weight: 400;
      font-size: 14px;
    }
  `,

  TitleText: styled(TextColor)`
    && {
      align-self: flex-start;
      font-weight: 600;
      font-size: 24px;

      @media (max-width: 375px) {
        font-size: 20px;
      }
    }
  `,
}
