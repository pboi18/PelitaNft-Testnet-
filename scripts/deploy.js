async function main() {
    // Grab the contract factory 
    const PelitaNft = await ethers.getContractFactory("PelitaNft");
 
    // Start deployment, returning a promise that resolves to a contract object
    const pelitaNft = await PelitaNft.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", pelitaNft.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });