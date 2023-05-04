import { Fragment } from "react";
import { ethers } from "ethers";
import  {SafeAuthKit, Web3AuthAdapter} from '@safe-global/auth-kit';
import { Web3Auth, Web3AuthOptions} from "@web3auth/modal";
import '../css/example.css';
import { useEffect, useState } from 'react';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
  WALLET_ADAPTERS
} from '@web3auth/base'

export default function navbar() {
    const options: Web3AuthOptions = {
        clientId: 'BJx3DIXgC3KJQsHWDsWLvWGnokXojw5PgUXR7EReBrmrf_mHXrmjV4NdGU_n85JqmEDDMt3lBAq6xhpHJRAIeTw',
        authMode: "WALLET",
        web3AuthNetwork: 'testnet',
        chainConfig: {chainNamespace : 'eip155' ,chainId : '0x13881' , rpcTarget : 'https://polygon-mumbai.g.alchemy.com/v2/cEflTfqtGxaviVhoMHgP4mXqEyENZGPG', displayName : 'Mumbai', 
        blockExplorer : 'https://mumbai.polygonscan.com/', ticker : 'MATIC', tickerName:'Polygon' ,decimals : 18 },
      };
    const modalConfig = {}
    const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
      mfaLevel: 'mandatory'
    },
    adapterSettings: {
      uxMode: 'popup',
      whiteLabel: {
        name: 'BlockBuddy'
      }
    }
  })
  const web3AuthAdapter = new Web3AuthAdapter(options, [openloginAdapter], modalConfig);

//   async function sum(){
//     const safeAuthKit = await SafeAuthKit.init(web3AuthAdapter);
//   }
//   sum();



    const items = [{name : 'Home ',link:'/'},{ name : 'About ',link:'/'}, {name : 'Portfolio ',link:'/'},{ name: 'Blog ',link:'/'},{name: 'Contact ',link:'/'}];
    const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/bW1gzsPBDTEyvSWVfD0OFs7LtLWsZYvO");
    async function func(){
        console.log(await provider.getBlockNumber());}
        func();
    return (
        <div >
            
            <h1 className = 'top'>GodSpeed</h1>
            <ul className= 'listgroup'>
                {items.map(items => <a href={items.link}><li style={{display: 'inline-block',marginLeft:30}}> {items.name} </li></a>)}
            </ul>
        </div>
    );
}
//contracts
//metamask
//rainbow toolkit
//viem.sh

