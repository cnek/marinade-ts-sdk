import { Marinade } from "../src/marinade"
import { PublicKey } from "@solana/web3.js"
import { MarinadeConfig, web3 } from "../src"

describe("try get all ticket accounts", () => {
  it("test", async() => {
    //const marinadeConfig = new MarinadeConfig({connection: new web3.Connection("https://api.mainnet-beta.solana.com"), publicKey: new PublicKey("94wMfctKqTHT6qEkXCcHXPqV2A6u7osL7Xdj4MAqTBBk")})
    const marinadeConfig = new MarinadeConfig()
    const marinade = new Marinade(marinadeConfig)
    const tx = await marinade.marinadeFinanceProgram.getDelayedUnstakeTickets(new PublicKey("9wmxMQ2TFxYh918RzESjiA1dUXbdRAsXBd12JA1vwWQq"))
    console.log("signature", tx)
  })
})