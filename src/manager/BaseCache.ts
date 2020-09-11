import { RestUser, Snowflake, GuildRes, RestGuild, RestGuilds, SomeObject } from "../../../disc/mod.ts";
import { yellow } from "../../../disc/deps.ts";

export class BaseCache<T extends {id: string}>
{
	protected cache: Map<Snowflake, T> = new Map();

	// constructor()
	// {
	// }

	public PurgeCache = () =>
		this.cache = new Map();
	
	public UpdateCacheItem(item: Partial<T>, dontPatch?: boolean)
	{
		if (item.id || item.id == null)
			throw new Error("No id");

		const cItem = this.cache.get(item.id!);
		
		if (dontPatch || !cItem)
			this.cache.set(item.id, item as T);
		else
			this.cache.set(item.id, { ...cItem, ...item });
	}

	// public GetFetch: (id: Snowflake) => Promise<T | undefined>;

	// public GetCached = (id: Snowflake): Partial<T> | undefined =>
	// 	this.cache.get(id);

	// public Get = async (id: Snowflake): Promise<Partial<T> | undefined> =>
	// 	this.GetCached(id) ?? this.GetFetch(id);
}
