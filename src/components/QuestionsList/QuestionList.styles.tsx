import styled from 'styled-components'
import { Grid } from '@mui/material'
import { TextColor } from '../../common/TextColor'

export const Styles = {
  PageWrapper: styled(Grid)`
    && {
      flex-direction: column;
      width: 100%;
      gap: 8px;
      align-self: flex-start;
    }
  `,

  TitleText: styled(TextColor)`
    && {
      text-align: left;
      font-weight: 600;
      font-size: 16px;

      @media (max-width: 375px) {
        font-size: 15px;
      }
    }
  `,

  ListWrapper: styled(Grid)`
    && {
      flex-direction: column;
      align-self: flex-start;
      align-items: center;
      width: 100%;
      gap: 8px;
    }
  `,
}
