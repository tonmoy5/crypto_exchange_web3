import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);


  console.log({
    provider,
    signer,
    transactionContract
  })
}


export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("")

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install matamask to connect to the blockchain before")

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setConnectedAccount(accounts[0])
      //Get All Transactions()
    } else {
      console.log("No accounts found")
    }

  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install matamask to connect");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
      throw new Error("No Ethereum object")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  )
}