import { Client } from "../src/Client.ts";

const client = new Client("NzA3NjY5NzU5MzczNzM3OTg1.XrMK0g._aBVjNoPrntQucfr_ny5cF45Tpw")

async function exec()
{
	let a = (await client.guilds.Get("714930431065325609"))!;
	console.log(a.afk_channel_id);
	// a.premium_tier = 3;
	// TODO: Make more fields readonly
	console.log(a.premium_tier);
}

exec();