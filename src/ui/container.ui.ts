import styled from 'styled-components'
import { prop } from './utils'

export const Container = styled.div<{
  padding?: string
}>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: ${prop('padding')};
`
