class FIFO_stack extends Memory
{
	constructor() { super(); }
	push(z) { this.values.push(z); }
	pop() { return this.values.pop(); }
}