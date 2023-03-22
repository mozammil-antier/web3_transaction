import React from 'react'
import { Web3Auth } from "@web3auth/modal";
import { ThemeProvider } from 'react-bootstrap';

const SocialConnect = () => {

const SocialLogin = async ()=>{
  const web3auth = new Web3Auth({
    clientId: "BPLcETS-dW88qkqmW6eEyA1KYm7F8Il9Vn9dIa9eN2ZLnFYcX8UT9xWC8WTJkVc43aZNxfisUKdJnsKGMQ_iw34", // Get your Client ID from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x1", // Please use 0x5 for Goerli Testnet
    },
  });
  
  await web3auth.initModal();
  
  await web3auth.connect().then(e => {if(e){console.log('you are connected')}}).catch(err => console.log(err,'you are connected'))
  await web3auth.connect().then(e => {if(e){console.log('you are connected')}}).catch(err => console.log(err,'you are connected'))

}



    return (
    <div>
      <h1>SocialConnect</h1>
      {}
      <button onClick={SocialLogin()} >Login</button>
    </div>
  )
}

export default SocialConnect




//Initialize within your constructor




