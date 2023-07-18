// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Migrations");
// eslint-disable-next-line no-undef
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0xf627578486cB8c8F3500F0B8D647275594c35a74',
    '1000000000000000000000'
  )
};
