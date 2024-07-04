const dotenv = require("dotenv");
dotenv.config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

const {
    SEPOLIA_URL,
    WALLET_ACCOUNT_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    COIN_MARKET_CAP_API_KEY,
} = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: SEPOLIA_URL,
            accounts: [String(WALLET_ACCOUNT_PRIVATE_KEY)],
            chainId: 11155111,
            blockConfirmations: 6,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
