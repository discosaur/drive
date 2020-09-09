import { RestClient, TypedEmitter, SomeObject, SocketClient, Guilds, MeUser, User, Guild } from "../deps.ts";

class BaseClient extends TypedEmitter<___, SomeObject>
{
	public rest: RestClient;
	public ws?: SocketClient;
	private token: string;

	constructor(token: string)
	{
		super();
		this.token = token;
		this.rest = new RestClient(token);
	}

	public async login()
	{
		const url = await this.rest.get("gateway/bot");
		this.ws = new SocketClient(this.token, url);
		this.ws.on("READY", () => this.emit("ready"));
	}
}

class Client extends BaseClient
{	
	constructor(token: string)
	{
		super(token);
	}

	public guilds = new Guilds(this.rest);

	public me = new MeUser(this.rest);

	public getGuildById = (id: string) =>
		new Guild(this.rest, id);

	public getUserById = (id: string) =>
		new User(this.rest, id);

	public getChannelById = (id: string) =>
		new RestChannel(this.rest, id);
}

export { Client };
