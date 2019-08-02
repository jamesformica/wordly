import styled from 'styled-components'

export const Wrapper = styled('div')`
  flex-grow: 1;
  width: 100%;
  background: #f2f2f2;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-top: 1rem;
`

export const Textarea = styled('textarea')`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 1rem;
  border: 0;

  &:focus {
    outline: 0;
  }
`