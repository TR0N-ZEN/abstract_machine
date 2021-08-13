class Heap extends Memory
{
	set(position, value) { this.values[position] = value; }
	push(value) {this.values.push(value); }
	get(position) { return this.values[position]; }
}