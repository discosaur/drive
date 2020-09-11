import { IGuildMember, RestGuild, Snowflake } from "../../deps.ts";
import { BaseCache } from "../BaseCache.ts";
import { GuildMember } from "../classes/GuildMemberClass.ts";

export class GuildMemberManager extends BaseCache<GuildMember>
{
	private rest: RestGuild;

	constructor(rest: RestGuild)
	{
		super();
		this.rest = rest;
	}

	public async GetFetch(id: Snowflake): Promise<GuildMember | undefined>
	{
		const ms = new GuildMember(await this.rest.getMember(id));
		this.cache.set(ms.id, ms);
		return ms;
	}

	public GetCached = (id: Snowflake): GuildMember | undefined =>
		this.cache.get(id);

	public Get = async (id: Snowflake): Promise<GuildMember | undefined> =>
		this.GetCached(id) ?? this.GetFetch(id);

	public async GetAllFetch(): Promise<GuildMember[] | undefined>
	{
		let gms: GuildMember[] = [];

		(await this.rest.getMembers("max"))
			.forEach(i => gms.push(new GuildMember(i)));

		return gms;
	}

	public GetAllCached = (): GuildMember[] | undefined =>
		Array.from(this.cache.values());

	public GetAll = async (): Promise<GuildMember[] | undefined> =>
		this.GetAllCached()?.length == 0
			? this.GetAllFetch()
			: this.GetAllCached();
}
