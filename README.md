# LandOwnership Smart Contract

This smart contract allows users to **register land** with a location and size, and **transfer ownership** to others. It is deployed and tested on the **Sepolia Testnet**.

yet to make frontend 

## Contract Features

- Register a piece of land with:
  - Location (string)
  - Size in square meters (uint)
  - Owner (address)
- Transfer ownership of registered land.
- Retrieve land details using the land ID.

## How to Test (Sepolia Testnet)

1. **Deploy the Contract**
   - Use [Remix IDE](https://remix.ethereum.org)
   - Connect MetaMask (set to Sepolia Testnet)
   - Compile and deploy via "Injected Provider - MetaMask"

2. **Register Land**
   - Function: `registerLand("Location", size)`
   - Example: `registerLand("New York", 1000)`
   - Confirm the transaction
   - The first land ID will be 1

3. **View Land Info**
   - Function: `getLand(1)`
   - Check returned data for location, size, and owner address

4. **Transfer Land Ownership**
   - Function: `transferLand(1, recipientAddress)`
   - Only the land owner can transfer ownership
   - Confirm transaction
   - Use `getLand(1)` again to verify the new owner

## Notes

- You can view transactions and contract data on [https://sepolia.etherscan.io](https://sepolia.etherscan.io)
- Get free Sepolia ETH from: [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
