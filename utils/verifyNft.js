const hre = require("hardhat");

const verifyNft = async (contractAddress) => {
    console.log("Verifying NFT contract");

    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            // constructorArguments: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(error);
        }
    }
};

module.exports = { verifyNft };
