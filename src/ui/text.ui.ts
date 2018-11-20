import styled from 'styled-components'
import { prop, propMap } from './utils'

export const Text = styled.span<{
  fontSize?: string
  fontWeight?: 'bold' | 'normal' | 'light'
  color?: 'primary' | 'secondary' | 'tertiary'
}>`
  font-size: ${prop('fontSize')};
  font-weight: ${prop('font-weight')};
  color: ${propMap('color', {
    primary: '#353535',
    secondary: '#555555',
    tertiary: '#909090',
  })};
`
