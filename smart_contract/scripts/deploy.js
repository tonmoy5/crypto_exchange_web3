const main = async () => {
  const Transactons = await hre.ethers.getContractFactory("Transactons");
  const transaction = await Transactons.deploy();

  await transaction.deployed();

  console.log("Transactons deployed to: ", transaction.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
