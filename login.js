document.getElementById("connect-button").addEventListener("click", (event) => {
  let account;
  let button = event.target;
  ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
    account = accounts[0];
    console.log(account);
    button.textContent = account;
  });
});

