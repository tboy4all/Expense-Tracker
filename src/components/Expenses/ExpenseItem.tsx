import ExpenseDate from './ExpenseDate'
// import Card from './Card'
import './ExpenseItem.css'

type ExpensesProps = {
  title: string
  amount: number
  date: Date
}

const ExpenseItem = ({ title, amount, date }: ExpensesProps) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
