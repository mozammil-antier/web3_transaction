import './App.css';
import React, { useState } from 'react';
import SendTransaction from './SendTransaction';
import {Web3Instance} from './components/contractFunction/Calling';
import ConnectWallet from './WalletConnect/ConnectWallet';
import TokenSearchAdd from './components/TokenSearch/TokenSearchAdd';
import SocialConnect from './components/Web3SocialConnect/SocialConnect';

function App() {


  return (
    <div className="App">
      <h1>Contract Details</h1>
      {/* <h2>Connect Wallet</h2> */}
      {/* <button onClick={handleClick}>Click to Connect Metamask</button>
      <h3>Wallet Address is : {userAddress}</h3>
      <h4>wallet Balance : {userBalance}</h4>
      <br />
      <SendTransaction Address={userAddress} Balance={userBalance} /> */}
      {/* <Web3Instance/> */}
      <ConnectWallet/>
      {/* <TokenSearchAdd/> */}
      <SocialConnect/>

    </div>
  );  
};

export default App;
