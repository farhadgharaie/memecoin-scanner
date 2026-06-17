import { Connection } from "@solana/web3.js";

async function main() {
  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  const slot = await connection.getSlot();

  console.log("Connected to Solana");
  console.log("Current Slot:", slot);
}

main();