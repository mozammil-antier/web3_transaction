import React,{Children, useState} from 'react'



const SwitchNetwork = () => {
const [network, setNetwork] = useState();


const { ethereum } = window;
if (ethereum) {
  ethereum.on('chainChanged', function () {
    handleDropdown();
  })



    const handleDropdown = async (e) => {
        try{

            window.ethereum.request({ 
                method: 'wallet_switchEthereumChain', 
                params: [{ chainId: e.target.value }],
            });
        } catch(err) {
            
        }
            
        // async function addMaticNetwork() {
        //     try {
        //       const result = await window.ethereum.request({
        //         method: "wallet_addEthereumChain",
        //         params: [{
        //           chainId: "0x42161",
        //           rpcUrls: ["https://arbitrum-mainnet.infura.io"],
        //           chainName: "Arbitrum One",
        //           nativeCurrency: {
        //             name: "Arbitrum One",
        //             symbol: "ETH",
        //             decimals: 18
        //           },
        //           blockExplorerUrls: ["https://explorer.arbitrum.io"]
        //         }]
        //       });
        //     } catch (error){
        //       console.log(error)
        //     }
        //   }
    }
  return (
    <div>
      <select id="dropdown-item-button" title="Dropdown button" onChange={(e) => handleDropdown(e)}>
      <option>Select Network</option>
      <option value="0xfa2">Fanton Testnet </option>
      <option value="0x5">Goerili Testnet</option>
      <option value="0x97">BNB Testnet</option>
    </select>
    </div>
  )
}
}

export default SwitchNetwork