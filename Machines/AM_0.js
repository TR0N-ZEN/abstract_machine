class AM_0 extends Machine
{
	constructor(m=1,stack=new FIFO_stack(),heap=new Heap(),input=new Input(),output=new Output())
	{
		this.orderCounter = m;
		this.stack = stack;
		this.heap = heap;
		this.input = input;
		this.output = output;
	}
	static C(OPERATION,AM_0,param=undefined) //semantics of orders on the AM_0
	{
		switch (OPERATION)
		{
			case("ADD"):
				let d1 = AM_0.stack.pop();
				let d2 = AM_0.stack.pop();
				AM_0.stack.push(d2 + d1);
				break;
			case("SUB"):
				let d1 = AM_0.stack.pop();
				let d2 = AM_0.stack.pop();
				AM_0.stack.push(d2 - d1);
				break;
			case("LT"):
				let d1 = AM_0.stack.pop();
				let d2 = AM_0.stack.pop();
				AM_0.stack.push((d2<d1)*1);
				break;
			case("LOAD"):
				let e = AM_0.heap.get(param);
				AM_0.stack.push(e);
				break;
			case("LIT"):
				AM_0.stack.push(param);
				break;
			case("STORE"):
				let e = AM_0.stack.pop();
				AM_0.heap.set(param,e);
				break;
			case("READ"):
				let e = AM_0.input.get_first();
				AM_0.heap.push(e);
				break;
			case("WRITE"):
				let e = AM_0.heap.get(param);
				AM_0.output.set(e);
				break;
			case("JMP"):
				AM_0.orderCounter = param;
				break;
			case("JMC"):
				let b = AM_0.stack.pop();
				if (b==0) { AM_0.orderCounter = param; }
				break;
		}
	}
}