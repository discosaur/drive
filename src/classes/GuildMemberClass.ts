import { RestGuild, Snowflake, IGuildMember } from "../../deps.ts";

export class GuildMember
{
	private item: IGuildMember;
	private rest?: RestGuild;

	constructor(rest: RestGuild, item: IGuildMember)
	{
		this.rest = rest;
		this.item = item;

		this.id = this.item.user.id;
		this.username = this.item.user.username;
		this.avatar = this.item.user.avatar;
		this.discriminator = this.item.user.discriminator;
	}

	public readonly id: Snowflake;
	public readonly username: string;
	public readonly avatar: string;
	public readonly discriminator: string;

	// private ApplyChanges()
	// {
	// 	if (!this.rest)
	// 		console.log("Not implemented");
	// 	else
	// 		this.rest.modifyMember(this.item.user.id, {...this.item, user: undefined, premium_since: undefined, joined_at: undefined})
	// }

	//#region roles
	public get roles(): Snowflake[]
	{
		return this.item.roles;
	}

	public set roles(v: Snowflake[])
	{
		this.item.roles = v;
		this.rest?.modifyMember(this.item.user.id, { roles: v });
	}

	public assignRole(v: Snowflake)
	{
		if (!this.item.roles.includes("v"))
		{
			this.item.roles.push(v);
			this.rest?.modifyMember(this.item.user.id, { roles: this.item.roles });
		}
	}
	
	public unassignRole(v: Snowflake)
	{
		this.item.roles = this.item.roles.filter(i => i != v)
		this.rest?.modifyMember(this.item.user.id, { roles: this.item.roles });
	}
	//#endregion

	//#region nick
	public get nick(): string | null
	{
		return this.item.nick;
	}

	public set nick(v: string | null)
	{
		this.item.nick = v;
		this.rest?.modifyMember(this.item.user.id, { nick: this.item.nick });
	}
	//#endregion

	//#region premium_since
	public get premium_since()
	{
		return this.item.premium_since;
	}
	//#endregion

	//#region joined_at
	public get joined_at()
	{
		return this.item.joined_at;
	}
	//#endregion

	//#region mute
	public get mute(): boolean
	{
		return this.item.mute;
	}

	public set mute(v: boolean)
	{
		this.item.mute = v;
		this.rest?.modifyMember(this.item.user.id, { mute: v });
	}
	//#endregion
	
	//#region deaf
	public get deaf(): boolean
	{
		return this.item.deaf;
	}

	public set deaf(v: boolean)
	{
		this.item.deaf = v;
		this.rest?.modifyMember(this.item.user.id, { deaf: v });
	}
	//#endregion
}
