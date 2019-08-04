import styled from 'styled-components'

export const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media print {
    display: block;
  }
`