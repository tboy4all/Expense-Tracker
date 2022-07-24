import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = ({ onAddExpense }: any) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (
    enteredExpenseData: React.FormEvent<HTMLFormElement>
  ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // console.log(expenseData)
    onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
