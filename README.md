# TypeScript Bug: Unexpected Array Concatenation

This repository demonstrates a subtle bug in TypeScript related to type handling and array concatenation.

## Bug Description
The `greeter` function is designed to accept a string and return a greeting. However, when an array is passed as an argument, the function unexpectedly concatenates the array elements as strings.

## Reproduction
1. Clone this repository.
2. Compile and run the `bug.ts` file using a TypeScript compiler.
3. Observe the unexpected output.

## Solution
The `bugSolution.ts` file provides a solution that addresses the type mismatch, ensuring that the function correctly handles string arguments and provides appropriate error handling or type checking for arrays.