import React, {useState} from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);    
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div>
          <label htmlFor="amount">Amount<br />
          (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
