import styled from 'styled-components'
import { Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const Styles = {
  MainImage: styled.img`
    width: 100%;
  `,

  FlexWrapper: styled.div`
    display: flex;
    width: 55%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 56px;
    gap: 24px;

    @media (max-width: 375px) {
      width: 100%;
    }
  `,

  ArrowBackIconStyled: styled(ArrowBackIcon)`
    && {
      color: ${(props) => props.theme.background.controlButtons};
    }
  `,

  ContentWrapper: styled.div`
    display: flex;
    width: 55%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    z-index: 1;
    margin-bottom: 100px;

    @media (max-width: 375px) {
      width: 90%;
      padding: 16px;
    }
  `,

  PageWrapper: styled(Grid)`
    && {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      margin-bottom: 100px;
      flex-direction: column;
    }
  `,

  ArrowWrapper: styled(Grid)`
    && {
      align-self: flex-start;
    }
  `,

  ImageWrapper: styled(Grid)`
    && {
      align-self: flex-start;
    }
  `,

  TitleWrapper: styled(Grid)`
    && {
      align-self: flex-start;
    }
  `,
}
