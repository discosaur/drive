import { TOKEN } from "../env.ts";
import { Client } from "../src/Client.ts";

const client = new Client(TOKEN);

await client.login();

let a = (await client.guilds.Get("714930431065325609"))!;
console.log((await a.members.Get("486885012281491466"))?.nick);
(await a.members.Get("486885012281491466"))!.nick = "Satoxay";
console.log((await a.members.Get("486885012281491466"))?.nick);

// while (true) {}
// TODO: Make more fields readonly
