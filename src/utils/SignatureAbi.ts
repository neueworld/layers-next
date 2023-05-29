const SignatureAbi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_messageHash',
        type: 'bytes32'
      }
    ],
    name: 'getEthSignedMessageHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_msg',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'getMessageHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_ethSignedMessageHash',
        type: 'bytes32'
      },
      {
        internalType: 'bytes',
        name: '_signature',
        type: 'bytes'
      }
    ],
    name: 'recoverSigner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes'
      }
    ],
    name: 'splitSignature',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_msg',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_signature',
        type: 'bytes'
      }
    ],
    name: 'verify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];

export default SignatureAbi;
