import styled from 'styled-components'

const Triangle = styled('div')`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 0;
  height: 0;
  border: ${props => props.size / 2}px solid transparent;
  border-top-color: ${props => props.colour};
  border-right-color: ${props => props.colour};
`

export default Triangle
