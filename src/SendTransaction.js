import React,{useState} from 'react'
import Web3 from 'web3'

const SendTransaction = (props) => {
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [inputValue, setInputValue] = useState({})
 


  const currentProvider = window.ethereum
  const handleTransaction = async () => {
    if(currentProvider){
      const web3 = new Web3(currentProvider);
      web3.eth.sendTransaction({
        from:   inputValue.from,
        to: inputValue.to,
        value: (inputValue.value*Math.pow(10,18))
    })
    }
  }
  return (
    <div>
    <input type='text' name='from' placeholder='from' onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/>
    <br/>
    <br/>
    <input type='text' name='to' placeholder='to'onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/>
    <br/>
    <br/>
    <input type='number' name='value' placeholder='amount'onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/>
    <br/>
    <br/>
    <button onClick={handleTransaction}>Send Transaction</button>


    </div>
  )
}

export default SendTransaction