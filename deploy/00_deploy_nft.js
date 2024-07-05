const dotenv = require("dotenv");
dotenv.config();
const { network } = require("hardhat");
const { verifyNft } = require("../utils/verifyNft");
const { networkConfig, developmentChains } = require("../helper");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    let senderAddress;
    const chainId = network.config.chainId;

    if (developmentChains.includes(network.name)) {
        senderAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    } else {
        senderAddress = networkConfig[chainId].walletAddress;
    }

    const deployNft = await deploy("NftOnGoogleCloud", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    console.log("NFT deployed!!!", deployNft);

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verifyNft(deployNft.address);
    }
};

module.exports.tags = ["NFT"];
