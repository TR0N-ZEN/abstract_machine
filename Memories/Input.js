class Input extends Memory
{
	constructor() { super(); }
	get_first()
	{
		let first = this.values[0];
		for (let i=0;i<(this.values.length - 1);i++)
		{
			this.values[i] = this.values[i+1];
		}
		return first;
	}
}