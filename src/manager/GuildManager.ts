import { RestUser, Snowflake, GuildRes, RestGuild, RestGuilds } from "../../../disc/mod.ts";
import { BaseCache } from "./BaseCache.ts";

export class GuildManager extends BaseCache<GuildRes, GuildRes>
{
	private rest: RestGuilds;

	public constructor(r: RestGuilds)
	{
		super();

		this.rest = r;
	}

	public UpdateCacheItem = (item: GuildRes) =>
		this.cache.set(item.id, item);

	public PurgeCache = () =>
		this.cache = new Map();

	public GetFetch = async (id: Snowflake): Promise<GuildRes | undefined> =>
	{
		const item = await this.rest.Get(id).Get();
		this.cache.set(id, item);
		return item as GuildRes;
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
