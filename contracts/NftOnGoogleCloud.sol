// SPDX-License-identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error NftOnGoogleCloud__MaxNFTSupplyMinted();
error NftOnGoogleCloud__MaxMintPerUserExceeded();
error NftOnGoogleCloud__UnAuthorized();

contract NftOnGoogleCloud is ERC721, Ownable {
    uint private _tokenIdCounter;
    uint public MAX_SUPPLY = 10;
    uint public maxMintsPerUser = 10;
    string public baseTokenURI;

    mapping(address => uint) private _mintsPerUser;

    constructor() ERC721("NftOnGoogleCloud", "GCNFT") Ownable(msg.sender) {}

    function mintTo(address to) public payable returns (uint) {
        if (_tokenIdCounter > MAX_SUPPLY) {
            revert NftOnGoogleCloud__MaxNFTSupplyMinted();
        }
        if (_mintsPerUser[to] < maxMintsPerUser) {
            revert NftOnGoogleCloud__MaxMintPerUserExceeded();
        }

        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
        _mintsPerUser[to]++;

        return _tokenIdCounter;
    }

    function setMaxMintsPerUser(uint maxMints) external onlyOwner {
        maxMintsPerUser = maxMints;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        baseTokenURI;
    }
}
