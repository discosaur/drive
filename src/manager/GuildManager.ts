import { Snowflake, RestGuilds } from "../../deps.ts";
import { Guild } from "../classes/GuildClass.ts";
import { BaseCache } from "../BaseCache.ts";

export class GuildManager extends BaseCache<Guild>
{
	private rest: RestGuilds;

	public constructor(r: RestGuilds)
	{
		super();

		this.rest = r;
	}

	public async GetFetch(id: Snowflake): Promise<Guild | undefined>
	{
		const rg = this.rest.Get(id);
		const item = new Guild(await rg.Get(), rg)
		// const item = await this.rest.Get(id).Get() as Guild;
		this.cache.set(id, item);
		return item;
	}

	public GetCached = (id: Snowflake): Guild | undefined =>
		this.cache.get(id);

	public Get = async (id: Snowflake): Promise<Guild | undefined> =>
		this.GetCached(id) ?? this.GetFetch(id);

	public Create(v: Partial<Guild>)
	{
		this.rest.Create(v);
	}
}
