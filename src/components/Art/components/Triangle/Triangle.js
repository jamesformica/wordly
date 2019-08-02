import styled, { css } from 'styled-components'

const Triangle = styled('div')`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 0;
  height: 0;
  border: ${props => props.size}px solid transparent;

  ${props => props.rotation === 0 && css`
    border-top-color: ${props => props.colour};
    border-left-color: ${props => props.colour};
  `}

  ${props => props.rotation === 1 && css`
    border-top-color: ${props => props.colour};
    border-right-color: ${props => props.colour};
  `}

  ${props => props.rotation === 2 && css`
    border-bottom-color: ${props => props.colour};
    border-right-color: ${props => props.colour};
  `}

  ${props => props.rotation === 3 && css`
    border-bottom-color: ${props => props.colour};
    border-left-color: ${props => props.colour};
  `}
`

export default Triangle
