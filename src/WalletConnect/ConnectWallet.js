import React,{useState,useEffect} from 'react';
import Web3 from 'web3';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SwitchNetwork from '../components/NetworkSwitch/SwitchNetwork';


function ConnectWallet() {
  const [userAddress, setUserAddress] = useState('')
  const [userBalance, setUserBalance] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)
  
  const currentProvider = window.ethereum
// const [disConne]

  const handleConnectWallet = async() => {
      setWalletConnected(true)


        await currentProvider.request({ method: 'eth_requestAccounts' })
        if (currentProvider) {
          const web3 = new Web3(currentProvider);
          const userAccount = await web3.eth.getAccounts();
          const userBalance = await web3.eth.getBalance(userAccount[0])
          console.log()
          setUserAddress(userAccount)
          setUserBalance(parseInt(userBalance) / Math.pow(10, 18))
        } else {
          alert('install Metamask')
        }
  
  
  }
  const handleDisConnectWallet = async() => {
      setWalletConnected(false)
    setUserAddress('')
    setUserBalance('')
  }
  // const handleConnectWallet = async() => {
  //     setWalletConnected(true)
  //     if(walletConnected){

  //       await currentProvider.request({ method: 'eth_requestAccounts' })
  //       if (currentProvider) {
  //         const web3 = new Web3(currentProvider);
  //         const userAccount = await web3.eth.getAccounts();
  //         const userBalance = await web3.eth.getBalance(userAccount[0])
  //         console.log()
  //         setUserAddress(userAccount)
  //         setUserBalance(parseInt(userBalance) / Math.pow(10, 18))
  //       } else {
  //         alert('install Metamask')
  //       }
  //     }else{
  //       setUserAddress('')
  //       setUserBalance('')
  //     }
  
  // }
  console.log(walletConnected,"Wallet Connected")
  return (
    <>
  
      <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand style={{color:'white'}}  href="/home">{!walletConnected? ("Connect Metamask") :("Disconnect Metamask")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#link">Link</Nav.Link>
            <SwitchNetwork/>
          </Nav>
        </Navbar.Collapse>
      {
        !walletConnected ?( <Button variant="warning" onClick={handleConnectWallet}>Connect Metamask</Button>) :
        (<Button variant="warning" onClick={handleDisConnectWallet}>Diconnect Metamask</Button>)
      }

      {/* {<Button variant="warning" onClick={handleConnectWallet} >{!walletConnected? "Connect Wallet": "Disconnect Wallet"}</Button>} */}
      </Container>

    </Navbar>
<Card style={{ width: '40rem',display:'flex',justifyContent:'center' }}>
<ListGroup variant="flush">
  <ListGroup.Item>Wallet Address : {userAddress}</ListGroup.Item>
  <ListGroup.Item>Wallet Balance : {userBalance}</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
</Card>
    </>
  );
}

export default ConnectWallet  ;