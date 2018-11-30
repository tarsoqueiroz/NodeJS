/*
 * Greeter.sol
 *
 * Instructions from https://arvanaghi.com/blog/testing-smart-contracts-on-a-private-blockchain-with-Geth/
 */
pragma solidity ^0.5.0;

contract mortal {
  /* Define variable owner of the type address */
  address owner;

  /* This function is executed at initialization and sets the owner of the contract */
  constructor () public {
    owner = msg.sender;
  }

  /* Function to recover the funds on the contract */
  function kill() public {
    if (msg.sender == owner) {
      selfdestruct(msg.sender);
    }
  }
}

contract greeter is mortal {
  /* Define variable greeting of the type string */
  string greeting;

  /* This runs when the contract is executed */
  constructor (string memory _greeting) public {
    greeting = _greeting;
  }

  /* Main function */
  function greet() public view returns (string memory) {
    return greeting;
  }
}
