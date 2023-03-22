
import { useState ,useEffect} from "react";
import Web3 from "web3";
import contractABI from "../ABI/back.json"


export const Web3Instance =() => {

  const [ContractDetails, setContractDetails]  = useState({
    contractName:'',
    contractBalance:'',
    contractSymbol:'',
    contractTotalSuply:'',
  })

  

  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [inputValue, setInputValue] = useState({})


  const handleTransfer = async () => {
    const ammount = 1000000000000000000/ Math.pow(10, 18)
   const mintvar = await contract.methods.transfer('0x8e3c04c2f4E994Ae1913565f5c736cf8948a1b2F',ammount).send({from:"0x71dCd599Bc6c246907d93BC38100E3409322DaE7"});
   console.log(mintvar,'mintvar');
  }

  
  const { ethereum } = window;
  let web3Object = new Web3(ethereum);
  
  let contract = new web3Object.eth.Contract(
    contractABI,
    "0x3cd71b6a70F9A5920ED6154e580ef8A34429cbEd"
  );



  const getContractBalance = async()=>{
    const bal = await contract.methods.balanceOf("0x71dCd599Bc6c246907d93BC38100E3409322DaE7").call()/ Math.pow(10, 18)
    console.log(contract)
     const name = await contract.methods.name().call()
     const Symbol = await contract.methods.symbol().call()
     const TotalSuply = await contract.methods.totalSupply().call()
     setContractDetails({contractName: name, contractBalance:bal,contractSymbol:Symbol,contractTotalSuply:TotalSuply})
  }
  useEffect(() => {
    getContractBalance()
  }, [])
    return(
    <>
    <h3>contractName: {ContractDetails.contractName}</h3>
    <h3>contractBalance: {ContractDetails.contractBalance}</h3>
    <h3>contractSymbol: {ContractDetails.contractSymbol}</h3>
    <h3>contractTotalSuply: {ContractDetails.contractTotalSuply}</h3>


    <div>
    {/* <input type='text' name='from' placeholder='from' onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/> */}
    <br/>
    <br/>
    <input type='text' name='to' placeholder='to'onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/>
    <br/>
    <br/>
    <input type='number' name='value' placeholder='amount'onChange= {(e) => setInputValue({...inputValue, [e.target.name]: e.target.value })}/>
    <br/>
    <br/>
    <button onClick={handleTransfer}>Send Transaction</button>

    </div>
    </>
  )

}






