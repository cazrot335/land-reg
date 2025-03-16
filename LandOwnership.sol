// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LandOwnership {
    struct Land {
        uint256 id;
        string location;
        uint256 size; // square meters
        address owner;
    }

    mapping(uint256 => Land) public lands;
    uint256 public nextLandId = 1;

    event LandRegistered(uint256 landId, address owner);
    event LandTransferred(uint256 landId, address from, address to);

    function registerLand(string calldata location, uint256 size) external {
        lands[nextLandId] = Land({
            id: nextLandId,
            location: location,
            size: size,
            owner: msg.sender
        });
        emit LandRegistered(nextLandId, msg.sender);
        nextLandId++;
    }

    function transferLand(uint256 landId, address newOwner) external {
        require(lands[landId].owner == msg.sender, "Not the owner");
        lands[landId].owner = newOwner;
        emit LandTransferred(landId, msg.sender, newOwner);
    }

    function getLand(uint256 landId) external view returns (Land memory) {
        return lands[landId];
    }
}
