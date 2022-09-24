import styled from 'styled-components'

export const PaginateContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem;
`

interface PaginateItemProps {
  isSelected: boolean
}

export const PaginateItem = styled.button<PaginateItemProps>`
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.isSelected ? props.theme['green-500'] : props.theme['gray-600']};

  &:hover {
    background: ${(props) => props.theme['green-500']};
    transition: background 0.2s;
  }

  cursor: pointer;
`

export const BeforeAndNext = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => props.theme['green-500']};

  &:disabled {
    color: ${(props) => props.theme['gray-600']};
    cursor: not-allowed;
  }
`

export const MessageVoid = styled.h2`
  color: ${(props) => props.theme['gray-500']};
  margin-top: 3rem;
`
