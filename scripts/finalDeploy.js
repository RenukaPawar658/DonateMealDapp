const hre = require("hardhat");
async function main() {
    const DonateMeal = await hre.ethers.getContractFactory("DonateMeal");  
    const contract = await DonateMeal.deploy(); 
  
    await contract.deployed();
    console.log("Address of contract:", contract.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  