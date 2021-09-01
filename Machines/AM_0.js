class AM_0 extends Machine
{
	constructor(m=1,stack=new FIFO_stack(),heap=new Heap(),input=new Input(),output=new Output())
	{
		super();
		this.orderCounter = m;
		this.stack = stack;
		this.heap = heap;
		this.input = input;
		this.output = output;
	}
	static C(OPERATION,AM_0) //semantics of orders on the AM_0
	{
		let d1,d2,e,b;
		OPERATION = OPERATION.split(" ");
		let command = OPERATION[0];
		if (OPERATION.length == 1)
		{
			switch (command) {
				case("ADD"):
					d1 = AM_0.stack.pop();
					d2 = AM_0.stack.pop();
					AM_0.stack.push(d2 + d1);
					break;
				case("SUB"):
					d1 = AM_0.stack.pop();
					d2 = AM_0.stack.pop();
					AM_0.stack.push(d2 - d1);
					break;
				case("LT"):
					d1 = AM_0.stack.pop();
					d2 = AM_0.stack.pop();
					AM_0.stack.push((d2<d1)*1);
					break;
			}
		} else if (OPERATION.length == 2) {
			let param = OPERATION[1];
			switch (command) {
				case("LOAD"):
					e = AM_0.heap.get(param);
					AM_0.stack.push(e);
					break;
				case("LIT"):
					AM_0.stack.push(param);
					break;
				case("STORE"):
					e = AM_0.stack.pop();
					AM_0.heap.set(param,e);
					break;
				case("READ"):
					e = AM_0.input.get_first();
					AM_0.heap.push(e);
					break;
				case("WRITE"):
					e = AM_0.heap.get(param);
					AM_0.output.set(e);
					break;
				case("JMP"):
					AM_0.orderCounter = param;
					break;
				case("JMC"):
					b = AM_0.stack.pop();
					if (b==0) { AM_0.orderCounter = param; }
					break;
			}
		}
	}
}