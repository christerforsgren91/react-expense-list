import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = () => {

  const dropDownHandler = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expense-filter__control'>
        <label className='expenses-filter label'>Filter by year</label>
        <select className='expenses-filter select' onChange={dropDownHandler} >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
