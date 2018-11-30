/*
 * Bike.sol
 *
 *
 * Command to compile: solc --optimize --combined-json abi,bin,interface src/Bike.sol > json/Bike.json
 */
pragma solidity ^0.5.0;

contract Bike {
  /* define data variables of the bike */
  address owner;
  bytes16 fabric;
  bytes16 model;
  uint    year;

  event BikeInfo (
    address owner,
    bytes16 fabric,
    bytes16 model,
    uint    year
  );

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  /* this function is executed at initialization and sets the owner and another data of the bike contract */
  constructor (bytes16 _fabric, bytes16 _model, uint _year) public {
    owner  = msg.sender;
    fabric = _fabric;
    model  = _model;
    year   = _year;

    emit BikeInfo(owner, fabric, model, year);
  }

  /* Function to recover the data of the bike */
  function getInfo () public view returns (address, bytes16, bytes16, uint) {
    return (owner, fabric, model, year);
  }

  /* Function to transfer to another owner for this bike contract */
  function transfer(address newOwner) onlyOwner public {
    owner = newOwner;
  }

  /* Function to kill the bike contract */
  function kill() onlyOwner public {
    selfdestruct(msg.sender);
  }
}
