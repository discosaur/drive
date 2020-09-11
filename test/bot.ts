import { Client } from "../src/Client.ts";

const client = new Client("")

async function exec()
{
	let a = (await client.guilds.Get("714930431065325609"))!;
	console.log(a.premium_tier);
	// a.premium_tier = 3;
	// TODO: Make more fields readonly
	console.log(a.premium_tier);
}

exec();