import { RestClient, SocketClient, GenericFunction, WrappedFunction, SocketEvent } from "../deps.ts";
import { RestGuild, RestMeUser, RestChannel, RestGuilds } from "../../disc/mod.ts";
// import { UserManager } from "./manager/";
import { GuildManager, Guild } from "./manager/GuildManager.ts";

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

		this.ws?.on("GUILD_UPDATE", () => {});
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
}
