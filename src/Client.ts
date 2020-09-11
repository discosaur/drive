import { RestClient, SocketClient, GenericFunction, WrappedFunction, SocketEvent } from "../deps.ts";
import { RestGuild, RestMeUser, RestChannel, RestGuilds, GuildRes } from "../../disc/mod.ts";
import { GuildManager } from "./manager/GuildManager.ts";

class BaseClient
{
	public rest: RestClient;
	public ws?: SocketClient;
	private token: string;

	public constructor(token: string)
	{
		this.token = token;
		this.rest = new RestClient(token);
	}

	public async login()
	{
		const gateway = await this.rest.get("gateway/bot");
		this.ws = new SocketClient(this.token, (gateway as any).url + "?v=6&encoding=json");
	}
}

export class Client extends BaseClient
{
	public constructor(token: string)
	{
		super(token);
	}

	public guilds = new GuildManager(new RestGuilds(this.rest));

	public me = new RestMeUser(this.rest);

	public getGuildById = async (id: string) =>
		this.guilds.Get(id);
		// new RestGuild(this.rest, id) as Guild;

	// public getUserById = (id: string) =>
	// 	new UserManager(this.rest, id);

	public getChannelById = (id: string) =>
		new RestChannel(this.rest, id);

	public sl()
	{
		this.ws?.on("GUILD_UPDATE", (g: any) => {
			this.guilds.UpdateCacheItem(g);
			// (this as any).guilds.UpdateCacheItem(g);
		});
	}
}
