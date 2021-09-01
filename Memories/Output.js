//const Memory = require('../Memory');

class Output extends Memory
{
	constructor() { super(); };
	set_last(z) { this.values.push(z); };
} //module.exports.Output = Output;