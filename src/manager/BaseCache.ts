import { RestUser, Snowflake, GuildRes, RestGuild, RestGuilds, SomeObject } from "../../../disc/mod.ts";

export class BaseCache<T extends SomeObject, O extends SomeObject>
{
	protected cache: Map<Snowflake, Partial<T>> = new Map();

	public PurgeCache = () =>
		this.cache = new Map();
	
	public UpdateCacheItem(item: Partial<T>, dontPatch?: boolean)
	{
		if (item.id == undefined)
			throw new Error("No id");

		const cItem = this.cache.get(item.id!);
		
		if (dontPatch || !cItem)
			this.cache.set(item.id, item);
		else
			this.cache.set(item.id, { ...cItem, ...item });
	}

	public UpdateCacheOverride = (item: T) =>
		this.cache.set(item.id, item);

	public declare GetFetch: (id: Snowflake) => Promise<O | undefined>;

	public async GetCached(id: Snowflake): Promise<Partial<T> | undefined>
	{
		return this.cache.get(id);
	}

	public async Get(id: Snowflake): Promise<Partial<T> | undefined>
	{
		return this.GetCached(id) ?? this.GetFetch(id);
	}
}
