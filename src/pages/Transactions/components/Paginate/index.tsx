import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Transaction } from '../../../../contexts/TransactionsContext'
import { api } from '../../../../lib/axios'
import { PaginateContainer, PaginateItem } from './styles'

interface PaginateProps {
  pages: number
  handleSetCurrentPage: (index: number) => void
}

export function Paginate({ pages, handleSetCurrentPage }: PaginateProps) {
  return (
    <PaginateContainer>
      <span>
        <CaretLeft size={24} weight="fill" />
      </span>

      {Array.from(Array(pages), (item, index) => {
        return (
          <PaginateItem
            key={index}
            value={index}
            onClick={(e) =>
              handleSetCurrentPage(Number((e.target as HTMLInputElement).value))
            }
          >
            {index + 1}
          </PaginateItem>
        )
      })}

      <span>
        <CaretRight size={24} weight="fill" />
      </span>
    </PaginateContainer>
  )
}
