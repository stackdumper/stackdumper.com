import styled from 'styled-components'
import { prop } from './utils'

export const Section = styled.div<{
  height?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: ${prop('height')};
`
