const CONTRACT_ADDRESS = "0x10acBd9Ff07F959F9C277AAdd277960F47C362FF"
const META_DATA_URL = "ipfs://bafyreigzimwljjryxovjcpiqjrkdsmnpdkbb4qniwljls4v6hypszdxfdi/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });