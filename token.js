const contractId = "0xCABB812637fd0d4b7512A552b8f061445Ae180D5";
const url = "https://speedy-nodes-nyc.moralis.io/b3d77907ce387fb9904b0422/polygon/mainnet/";

window.addEventListener("load", async () => {
    // const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    // customHttpProvider.getBlockNumber().then((result) => {
    //     console.log(result);
    // })
    // const web3 = await Moralis.enableWeb3({ provider: "Network" });
    await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: "0x13881",
            chainName: "Matic Mumbai Testnet",
            // nativeCurrency: {
            //     name: "ECELL Token",
            //     symbol: "ECELL",
            //     decimals: 18
            // },
            rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
        }]
    })
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
        .then((response) => alert("Success"))
        .catch((error) => alert("Error occured"));
    console.log(new FormData(form));
});