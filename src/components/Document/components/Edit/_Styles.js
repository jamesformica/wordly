import styled, { css } from 'styled-components'

export const Wrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`

export const EditButton = styled('button')`
  background: #f2f2f2;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;

  ${props => props.isEditing && css`
    background: #009688;
    color: #fff;
  `}
`
