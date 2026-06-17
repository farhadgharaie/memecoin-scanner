import { Connection } from "@solana/web3.js";

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed",
);

console.log("Listening...");

connection.onSlotChange((slotInfo) => {
  console.log("New Slot:", slotInfo.slot);
});
