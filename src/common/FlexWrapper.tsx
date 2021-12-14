import styled from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
  gap: 24px;

  @media (max-width: 375px) {
    width: 100%;
  }
`