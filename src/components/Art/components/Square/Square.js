import styled from 'styled-components'

const Square = styled('div')`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.colour};
`

export default Square
