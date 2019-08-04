import styled, { css } from 'styled-components'

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media print {
    display: none;
  }
`

export const EditButton = styled('button')`
  background: #fff;
  font-size: 0.875rem;
  border: 2px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  outline: 0;
  cursor: pointer;

  ${props => props.isEditing && css`
    background: #000;
    color: #fff;
  `}
`

export const OptionWrapper = styled('div')`
  display: flex;
`

export const ShapeButton = styled('button')`
  color: #000;
  background: #fff;
  font-size: 0.75rem;
  border: 2px solid #000;
  border-radius: 0.25rem;
  padding: 0 0.75rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  outline: 0;
  cursor: pointer;

  ${props => props.name === props.shape && css`
    color: #fff;
    background: #000;
  `}
`
