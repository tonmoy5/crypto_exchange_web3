//SPDX-License-Identifier: <SPDX-License>

pragma solidity ^0.8.0;

contract Transactons{
  uint256 transactionCount;

  event Transfer(address from, address revciver, uint amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct{
    address sender;
    address revciver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TrasferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }


  function getAllTransactions() public view returns(TransferStruct[] memory) {
    return transactions;
  }


  function getTransactionCount() public view returns(uint256) {
    return transactionCount;
  }

}