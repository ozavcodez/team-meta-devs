import { Network, Alchemy } from "../alchemy-sdk";
import {account} from "./login.js"

document.getElementById("verify-balance").addEventListener("click", async (event) => {

const settings = {
  apiKey: "43GocNHqnHWIL9bAi8rsM4heNhsjZYc2",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings)// Impo
const userAddress = account;
console.log(userAddress)
const usdcContract = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

// Print token balance of USDC in the conneected address
const balance = await alchemy.core.getTokenBalances(userAddress, [usdcContract])
let wei = parseInt(result,16);
balance = wei / (10**18);
  console.log(balance + "ETH");

if (balance.amount >0){
 alert("Login successful")
 window.location = "./dashboard.html"//Redirect to dashboard if the conditions are met
    return true
    } else {
alert ("Deposit USDC and try again");
  return false
}
})


//Error: GET http://127.0.0.1:5500/alchemy-sdk net::ERR_ABORTED 404 (Not Found)