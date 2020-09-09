import { RestUser, Snowflake, GuildRes, RestGuild, RestGuilds } from "../../../disc/mod.ts";

export class GuildManager
{
	private cache: Map<Snowflake, Partial<RestGuild>> = new Map();
	private rest: RestGuilds;

	public constructor(r: RestGuilds)
	{
		this.rest = r;
	}

	public UpdateCacheItem = (item: GuildRes) =>
		this.cache.set(item.id, item);

	public PurgeCache = () =>
		this.cache = new Map();

	public async GetFetch(id: Snowflake): Promise<RestGuild>
	{
		const item = this.rest.Get(id);
		this.cache.set(id, item);
		return item;
	}

	public async GetCached(id: Snowflake): Promise<Partial<RestGuild> | undefined>
	{
		return this.cache.get(id);
	}

	public async Get(id: Snowflake): Promise<Partial<RestGuild> | undefined>
	{
		return this.GetCached(id) ?? this.GetFetch(id);
	}

	// public Create(v: Partial<RestUser>)
	// {
	// 	this.rest.Create(v);
	// }
}
class Guild implements GuildRes
{
	public item: GuildRes;

	public constructor(item: GuildRes)
	{
		this.item = item;
	}

	
	public get id(): Readonly<Snowflake>
	{
		return this.item.id;
	}

	public get name(): string
	{
		return this.item.name;
	}

	public set name(v: string)
	{
		this.item.name = v;
	}

	public get description(): string
	{
		return this.item.description;
	}

	public set description(v: string)
	{
		this.item.description = v;
	}
	
	public get description(): string
	{
		return this.item.description;
	}

	public set description(v: string)
	{
		this.item.description = v;
	}
}
