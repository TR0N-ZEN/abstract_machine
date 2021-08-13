class Machine
{
	constructor(orderCounter, memories=undefined)
	{
		this = new Object();
		this["orderCounter"] = 1;
		if (memories!=undefined)
		{
			for (key in Object.keys(memories)) { this[key] = memories[key]; }
		}
	}
}