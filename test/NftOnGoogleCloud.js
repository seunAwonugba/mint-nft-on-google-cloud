const { expect } = require("chai");
const { getNamedAccounts, deployments, ethers } = require("hardhat");

describe("NftOnGoogleCloud", async () => {
    let nft;
    let deployer;
    beforeEach(async () => {
        const getNamedAccount = await getNamedAccounts();
        deployer = getNamedAccount.deployer;

        const deployNft = await deployments.get("NftOnGoogleCloud");

        nft = await ethers.getContractAt(deployNft.abi, deployNft.address);
    });

    describe("Deployment", async () => {
        it("Should set the right owner", async () => {
            const [owner] = await ethers.getSigners();

            // /** from openzeppelin
            //  * @dev Returns the address of the current owner.
            //  */
            // function owner() public view virtual returns (address) {
            //     return _owner;
            // }

            expect(nft.owner()).to.equal(owner.address);
        });
    });
});
