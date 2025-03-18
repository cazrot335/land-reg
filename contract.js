// contract.js

export const contractAddress = "0xf41ad839C9507f511A2fd60142190c2C0d9e5846";

export const abi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "landId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "LandRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "landId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "to", "type": "address" }
    ],
    "name": "LandTransferred",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "location", "type": "string" },
      { "internalType": "uint256", "name": "size", "type": "uint256" }
    ],
    "name": "registerLand",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "landId", "type": "uint256" },
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferLand",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "landId", "type": "uint256" }],
    "name": "getLand",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "id", "type": "uint256" },
          { "internalType": "string", "name": "location", "type": "string" },
          { "internalType": "uint256", "name": "size", "type": "uint256" },
          { "internalType": "address", "name": "owner", "type": "address" }
        ],
        "internalType": "struct LandOwnership.Land",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextLandId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];
