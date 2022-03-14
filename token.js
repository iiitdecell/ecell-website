const contractId = "0xCABB812637fd0d4b7512A552b8f061445Ae180D5";

window.addEventListener("load", async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    console.log(address);
    try {
        const wasAdded = await ethereum.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address: contractId,
                    decimals: 18,
                    symbol: "ECELL",
                },
            },
        });
        console.log(wasAdded);
    } catch (e) {
        console.log(e);
    }
    const tokenField = document.getElementsByName("tokenAdd")[0];
    tokenField.value = address;
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwBi3dBusbyU68eFuMmk_ywnD31_43OV8zJ9zFAPoPNjIiP6wxcG0OZOaR9s2bPUkia/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    console.log(new FormData(form));
});