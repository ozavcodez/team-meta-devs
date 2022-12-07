document.getElementById("connect-button").addEventListener("click", (event) => {
  let account;
  if ((account = null)) {
    return;
  } // To enable the user cancel and opt-out of continuing.
  let button = event.target;
  ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
    account = accounts[0];
    console.log(account);
    button.textContent = account;
  });
});

// export default account