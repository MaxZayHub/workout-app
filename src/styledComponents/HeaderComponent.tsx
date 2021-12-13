import styled from 'styled-components'

interface Props {
  fontSize: string;
  fontFamily: string;
  alignSelf?: string;
  fontMedia: string;
  fontWeight: string;
  textAlign?: string;
}

export const HeaderComponent =
  styled.h3 <
  Props >
  `
  align-self: ${(props) => props.alignSelf};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin: 0;
    text-align: ${(props) => props.textAlign};

  @media (max-width: 375px) {
    font-size: ${(props) => props.fontMedia};
  }
`
