import { RestClient, SocketClient } from "../deps.ts";
import { RestClientUser, RestChannel, RestGuilds } from "../../disc/mod.ts";
import { GuildManager } from "./manager/GuildManager.ts";

class BaseClient
{
	public rest: RestClient;
	public ws?: SocketClient;

	public constructor(token: string)
	{
		this.rest = new RestClient(token);
	}

	public async login()
	{
		this.ws = new SocketClient(this.rest);
	}
}

export class Client extends BaseClient
{
	public constructor(token: string)
	{
		super(token);
	}

	public me = new RestClientUser(this.rest);
	
	public guilds = new GuildManager(new RestGuilds(this.rest));

	// public getUserById = (id: string) =>
	// 	new UserManager(this.rest, id);

	public getChannelById = (id: string) =>
		new RestChannel(this.rest, id);

	public registerEvents()
	{
		this.ws?.on("GUILD_UPDATE", (g: any) => {
			this.guilds.UpdateCacheItem(g);
			// (this as any).guilds.UpdateCacheItem(g);
		});
	}
}
