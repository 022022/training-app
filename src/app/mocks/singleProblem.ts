import assert from "assert";

export interface Problem {
  id: string,
	title: string,
	problemStatement: string,
	examples: {
			id: number,
			inputText: string,
			outputText: string,
			explanation?: string,
		}[],
	constraints: string,
	handlerFunction: string;
	starterCode: string,
}


const handler = (fn: (a: number, b:number) => number) => {
	try {
		const a = [
			1,
			2,
			3,
		];
		const b = [
			2,
			4,
			8,
		];

		const answers = [
			3,
			6,
			11,
		];

		for (let i = 0; i < a.length; i++) {
			const result = fn(a[i], b[i]);
			assert.deepStrictEqual(result, answers[i]);
		}

		return true;

	} catch (error: any) {
		throw new Error(error);
	}
};

export const mockProblem: Problem = {
	id: "MockProblem id",
	title: "MockProblem",
	problemStatement: `<p>
      Mock problem statement: a + b
    </p>`,
	examples: [
		{
			id: 1,
			inputText: "a = 1, b = 2",
			outputText: "3",
			explanation: "Because 1 + 3 = 3, we return 3.",
		}
	],
	constraints: `-1000 ≤ a ≤ 1000`,
	handlerFunction: String(handler),
	starterCode: `function sum(a, b){
    // Write your code here
  };`,
};

export const mockDB: {[key: string] : Problem} = {
  '1': mockProblem,
  '2': mockProblem,
}