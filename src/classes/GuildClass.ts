import { GuildModifyReq, GuildRes, RestGuild, Snowflake } from "../../deps.ts";
import { GuildMemberManager } from "../manager/GuildMemberManager.ts";

export class Guild implements GuildRes
{
	private item: GuildRes;
	public rest: RestGuild;

	public constructor(item: GuildRes, rest: RestGuild)
	{
		this.item = item;
		this.rest = rest;
		this.members = new GuildMemberManager(this.rest)
	}

	public members: GuildMemberManager;
	
	private async ApplyChanges()
	{
		const ans = await this.rest.Modify(this.item as GuildModifyReq);
		this.item = { ...this.item, ...ans };
	}
	
	public get id(): Readonly<Snowflake>
	{
		return this.item.id;
	}

	//#region name
	public get name(): string
	{
		return this.item.name;
	}

	public set name(v: string)
	{
		this.item.name = v;
		this.ApplyChanges();
	}
	//#endregion

	//#region icon
	public get icon(): string | undefined
	{
		return this.item.icon;
	}

	public set icon(v: string | undefined)
	{
		this.item.icon = v;
		this.ApplyChanges();
	}
	//#endregion

	//#region description
	public get description(): string
	{
		return this.item.description;
	}

	// public set description(v: string)
	// {
	// 	this.item.description = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region splash
	public get splash(): unknown
	{
		return this.item.splash;
	}

	public set splash(v: unknown)
	{
		this.item.splash = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region discovery_splash
	public get discovery_splash(): unknown
	{
		return this.item.splash;
	}

	// public set discovery_splash(v: unknown)
	// {
	// 	this.item.discovery_splash = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region features
	public get features(): string[]
	{
		return this.item.features;
	}

	// public set features(v: string[])
	// {
	// 	this.item.features = v;
	// 	this.CommitChanges();
	// }
	//#endregion

	//#region emojis
	public get emojis(): any[]
	{
		// TODO
		return this.item.features;
	}

	public set emojis(v: any[])
	{
		this.item.features = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region banner
	public get banner(): string | null
	{
		return this.item.banner;
	}

	public set banner(v: string | null)
	{
		this.item.banner = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region owner_id
	public get owner_id(): string
	{
		return this.item.owner_id;
	}

	public set owner_id(v: string)
	{
		this.item.owner_id = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region application_id
	public get application_id(): string | null
	{
		return this.item.application_id;
	}

	// public set application_id(v: string | null)
	// {
	// 	this.item.application_id = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region region
	public get region(): string
	{
		return this.item.region;
	}

	public set region(v: string)
	{
		this.item.region = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region afk_channel_id
	public get afk_channel_id(): string | null
	{
		return this.item.afk_channel_id;
	}

	public set afk_channel_id(v: string | null)
	{
		this.item.afk_channel_id = v;
		this.ApplyChanges();
	}
	//#endregion

	//#region afk_timeout
	public get afk_timeout(): number
	{
		return this.item.afk_timeout;
	}

	public set afk_timeout(v: number)
	{
		this.item.afk_timeout = v;
		this.ApplyChanges();
	}
	//#endregion

	//#region system_channel_id
	public get system_channel_id(): string
	{
		return this.item.system_channel_id;
	}

	public set system_channel_id(v: string)
	{
		this.item.system_channel_id = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region widget_enabled
	public get widget_enabled(): boolean
	{
		return this.item.widget_enabled;
	}

	// public set widget_enabled(v: boolean)
	// {
	// 	this.item.widget_enabled = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region widg	et_channel_id
	public get widget_channel_id(): string
	{
		return this.item.widget_channel_id;
	}

	public set widget_channel_id(v: string)
	{
		this.item.widget_channel_id = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region verification_level
	public get verification_level(): number
	{
		return this.item.verification_level;
	}

	public set verification_level(v: number)
	{
		this.item.verification_level = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region roles
	public get roles(): any[]
	{
		//TODO
		return this.item.roles;
	}

	public set roles(v: any[])
	{
		this.item.roles = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region default_message_notifications
	public get default_message_notifications(): number
	{
		return this.item.default_message_notifications;
	}

	public set default_message_notifications(v: number)
	{
		this.item.default_message_notifications = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region mfa_level
	public get mfa_level(): number
	{
		return this.item.mfa_level;
	}

	// public set mfa_level(v: number)
	// {
	// 	this.item.mfa_level = v;
	// 	this.CommitChanges();
	// }
	//#endregion

	//#region explicit_content_filter
	public get explicit_content_filter(): number
	{
		return this.item.explicit_content_filter;
	}

	public set explicit_content_filter(v: number)
	{
		this.item.explicit_content_filter = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region max_presences
	public get max_presences(): unknown | null
	{
		return this.item.max_presences;
	}

	// public set max_presences(v: unknown | null)
	// {
	// 	this.item.max_presences = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region max_members
	public get max_members(): number
	{
		return this.item.max_members;
	}

	// public set max_members(v: number)
	// {
	// 	this.item.max_members = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region max_video_channel_users
	public get max_video_channel_users(): number
	{
		return this.item.max_video_channel_users;
	}

	// public set max_video_channel_users(v: number)
	// {
	// 	this.item.max_video_channel_users = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region vanity_url_code
	public get vanity_url_code(): unknown | null
	{
		return this.item.vanity_url_code;
	}

	// public set vanity_url_code(v: unknown | null)
	// {
	// 	this.item.vanity_url_code = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region premium_tier
	public get premium_tier(): number
	{
		return this.item.premium_tier;
	}

	// public set premium_tier(v: number)
	// {
	// 	this.item.premium_tier = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region premium_subscription_count
	public get premium_subscription_count(): number
	{
		return this.item.premium_subscription_count;
	}

	// public set premium_subscription_count(v: number)
	// {
	// 	this.item.premium_subscription_count = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region system_channel_flags
	public get system_channel_flags(): number
	{
		return this.item.system_channel_flags;
	}

	// public set system_channel_flags(v: number)
	// {
	// 	this.item.system_channel_flags = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region preferred_locale
	public get preferred_locale(): string
	{
		return this.item.preferred_locale;
	}

	public set preferred_locale(v: string)
	{
		this.item.preferred_locale = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region rules_channel_id
	public get rules_channel_id(): string
	{
		return this.item.rules_channel_id;
	}

	public set rules_channel_id(v: string)
	{
		this.item.rules_channel_id = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region public_updates_channel_id
	public get public_updates_channel_id(): string
	{
		return this.item.public_updates_channel_id;
	}

	public set public_updates_channel_id(v: string)
	{
		this.item.public_updates_channel_id = v;
		this.ApplyChanges();
	}
	//#endregion
	
	//#region embed_enabled
	public get embed_enabled(): boolean
	{
		return this.item.embed_enabled;
	}

	// public set embed_enabled(v: boolean)
	// {
	// 	this.item.embed_enabled = v;
	// 	this.CommitChanges();
	// }
	//#endregion
	
	//#region embed_channel_id
	public get embed_channel_id(): string
	{
		return this.item.embed_channel_id;
	}

	// public set embed_channel_id(v: string)
	// {
	// 	this.item.embed_channel_id = v;
	// 	this.CommitChanges();
	// }
	//#endregion
}
