import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Paginate } from './components/Paginate'
import { SearchForm } from './components/SearchForm'
import {
  CardTransaction,
  HeaderTransactions,
  PriceHightlight,
  TransactionCardList,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const [itensPerPage, setItensPerPage] = useState(7)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(transactions.length / itensPerPage)

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage

  const currentItens = transactions.slice(startIndex, endIndex)

  function handleSetCurrentPage(index: number) {
    setCurrentPage(index)
  }

  function handleBeforeAndNextPage(type: string) {
    if (type === 'before') {
      setCurrentPage((data: number) => (data -= 1))
    }
    if (type === 'next') {
      setCurrentPage((data: number) => (data += 1))
    }
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <HeaderTransactions>
          <span>Transações</span>
          <span>
            {transactions.length > 1
              ? `${transactions.length} itens`
              : `${transactions.length} item`}
          </span>
        </HeaderTransactions>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            {currentItens.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>

        <TransactionCardList>
          {transactions.map((transaction) => (
            <CardTransaction key={transaction.id}>
              <header>
                <span>{transaction.description}</span>
                <PriceHightlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHightlight>
              </header>
              <footer>
                <div>
                  <TagSimple size={16} />
                  {transaction.category}
                </div>
                <div>
                  <CalendarBlank size={16} />
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </div>
              </footer>
            </CardTransaction>
          ))}
        </TransactionCardList>

        <Paginate
          pages={pages}
          handleSetCurrentPage={handleSetCurrentPage}
          handleBeforeAndNextPage={handleBeforeAndNextPage}
          currentPage={currentPage}
        />
      </TransactionsContainer>
    </div>
  )
}
