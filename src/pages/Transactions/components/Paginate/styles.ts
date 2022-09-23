import styled from 'styled-components'

export const PaginateContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem;

  span {
    cursor: pointer;

    &:hover svg {
      color: ${(props) => props.theme['green-500']};
      transition: color 0.2s;
    }
  }
`

export const PaginateItem = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['gray-600']};

  &:hover {
    background: ${(props) => props.theme['green-500']};
    transition: background 0.2s;
  }

  cursor: pointer;
`
