# Unhandled Exception in TypeScript Function

This repository demonstrates a common error in TypeScript: forgetting to handle potential errors.  The `divide` function throws an error if the divisor is zero, but the calling code doesn't handle this exception.  This can lead to unexpected crashes.

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file shows how to fix the issue by using a try-catch block.

## How to Reproduce

1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler.
3. Observe the unhandled exception when the `divide` function is called with a zero divisor.
4. Run `bugSolution.ts` to see how exception handling prevents the crash.

## Solution

The solution involves wrapping the call to the `divide` function in a try-catch block.  This allows the program to handle the error gracefully without crashing.