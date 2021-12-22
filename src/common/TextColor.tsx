import styled from 'styled-components'
import { Typography } from '@mui/material'

export const TextColor = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.title};
    font-family: 'Source Sans Pro', sans-serif;
  }
`
