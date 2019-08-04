import styled from 'styled-components'

const Circle = styled('div')`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props => props.colour};
`

export default Circle
