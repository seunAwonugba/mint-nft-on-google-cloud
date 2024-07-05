const { getNamedAccounts, deployments, ethers } = require("hardhat");

const main = async () => {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const nftContract = await ethers.getContractAt(
        "NftOnGoogleCloud",
        contractAddress
    );

    const mintTokenTxn = await nftContract.mintTo(contractAddress);
    console.log(mintTokenTxn);
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
