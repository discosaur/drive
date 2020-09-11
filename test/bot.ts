import { Client } from "../src/Client.ts";

const client = new Client("NzA3NjY5NzU5MzczNzM3OTg1.XrMK0g._aBVjNoPrntQucfr_ny5cF45Tpw")

await client.login();
let a = (await client.guilds.Get("714930431065325609"))!;
console.log((await a.members.Get("276788775105986560"))?.nick);

// while (true) {}
// TODO: Make more fields readonly
