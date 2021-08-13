// returns an integer which refers to the memory cell which is referred to by the identifier

class Table
{
	constructor(obj=undefined)
	{
		this.table = new Object();
		if (obj!=undefined)
		{
			for (key in Object.keys(obj))
			{
				this.table[key] = obj[key];
			}
		}
	}
	get(identifier)
	{
		let v = this.table[identifier];
		if (v!=undefined) { return v; }
		else {	throw new Error("Identifier not found in table."); }
	}
}