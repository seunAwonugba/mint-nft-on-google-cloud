const dotenv = require("dotenv");
dotenv.config();

const { WALLET_ADDRESS } = process.env;
const networkConfig = {
    11155111: {
        name: "sepolia",
        walletAddress: WALLET_ADDRESS,
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfig,
    developmentChains,
};
