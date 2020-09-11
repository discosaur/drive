import { RestClient, SocketClient } from "../deps.ts";
import { RestClientUser, RestChannel, RestGuilds, Snowflake } from "../../disc/mod.ts";
import { GuildManager } from "./manager/GuildManager.ts";
import { Guild } from "./classes/GuildClass.ts";

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

	public async login()
	{
		this.ws = new SocketClient(this.rest);
		this.registerEvents();
	}

	public registerEvents()
	{
		this.ws?.on("GUILD_UPDATE", (g: Partial<Guild>) =>
			this.guilds.UpdateCacheItem(g));
			
		this.ws?.on("GUILD_CREATE", (g: Partial<Guild>) =>
			this.guilds.UpdateCacheItem(g, true));

		this.ws?.on("GUILD_DELETE", (g: {id: Snowflake}) =>
			this.guilds.RemoveFromCache(g.id));
	}
}
