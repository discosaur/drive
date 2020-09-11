import { Snowflake } from "../../../disc/mod.ts";
import { IGuildMember } from "../../deps.ts";

export class GuildMember
{
	private item: IGuildMember;

	constructor(item: IGuildMember)
	{
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

	private ApplyChanges()
	{
		console.log("Not implemented");
	}

	//#region roles
	public get roles(): Snowflake[]
	{
		return this.item.roles;
	}

	public set roles(v: Snowflake[])
	{
		this.item.roles = v;
		this.ApplyChanges();
	}

	public assignRole(v: Snowflake)
	{
		if (!this.item.roles.includes("v"))
		{
			this.item.roles.push(v);
			this.ApplyChanges();
		}
	}
	
	public unassignRole(v: Snowflake)
	{
		this.item.roles = this.item.roles.filter(i => i != v)
		this.ApplyChanges();
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
		this.ApplyChanges();
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
		this.ApplyChanges();
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
		this.ApplyChanges();
	}
	//#endregion
}
