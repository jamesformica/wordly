import styled from 'styled-components'

export const TitleInput = styled('input')`
  display: block;
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
  font-family: 'Crimson Pro', serif;
  font-size: 1.5rem;
  font-weight: 500;

  &:focus {
    outline: 0;
    background: #f2f2f2;
  }
`