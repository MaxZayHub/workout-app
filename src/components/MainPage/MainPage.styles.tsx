import styled from 'styled-components'

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

  ContentWrapper: styled.div`
    display: flex;
    width: 55%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    z-index: 1;

    @media (max-width: 375px) {
      width: 90%;
      padding: 16px;
    }
  `,
}
