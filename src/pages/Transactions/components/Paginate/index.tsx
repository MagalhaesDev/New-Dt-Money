import { CaretLeft, CaretRight } from 'phosphor-react'

import {
  PaginateContainer,
  PaginateItem,
  BeforeAndNext,
  MessageVoid,
} from './styles'

interface PaginateProps {
  pages: number
  currentPage: number
  handleSetCurrentPage: (index: number) => void
  handleBeforeAndNextPage: (type: string) => void
}

export function Paginate({
  pages,
  handleSetCurrentPage,
  handleBeforeAndNextPage,
  currentPage,
}: PaginateProps) {
  return (
    <PaginateContainer>
      {pages > 0 ? (
        <>
          <BeforeAndNext
            onClick={(e) => handleBeforeAndNextPage('before')}
            disabled={currentPage === 0}
          >
            <CaretLeft size={24} weight="fill" />
          </BeforeAndNext>

          {Array.from(Array(pages), (item, index) => {
            return (
              <PaginateItem
                key={index}
                value={index}
                onClick={(e) =>
                  handleSetCurrentPage(
                    Number((e.target as HTMLInputElement).value),
                  )
                }
                isSelected={index === currentPage}
              >
                {index + 1}
              </PaginateItem>
            )
          })}

          <BeforeAndNext
            onClick={(e) => handleBeforeAndNextPage('next')}
            disabled={currentPage + 1 >= pages}
          >
            <CaretRight size={24} weight="fill" />
          </BeforeAndNext>
        </>
      ) : (
        <MessageVoid>Nenhuma transação foi encontrada</MessageVoid>
      )}
    </PaginateContainer>
  )
}
