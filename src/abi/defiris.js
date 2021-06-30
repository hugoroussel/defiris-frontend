const defiris = `[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_variableAssetAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_variableLendingPoolAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_fixedAssetAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_fixedPoolAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_vesting",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_mphMinter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_mphToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maturationTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "depositFixed",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "depositVariable",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`;
export default defiris;
