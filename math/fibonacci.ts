export class Fibonacci {
    public static calculate(i : number) : number{
		return (i <= 2) ? 1 : Fibonacci.calculate(i -1 ) + Fibonacci.calculate(i -2);		
	}
}