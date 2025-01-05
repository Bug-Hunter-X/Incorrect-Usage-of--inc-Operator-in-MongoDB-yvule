# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is intended to increment a numerical value by a specified amount, but using it to decrement to a negative number can cause problems.

## Bug
The `bug.js` file contains code that attempts to decrement the `sequence` value in a counter document. This is problematic because `$inc` is designed to increment values, leading to unexpected results if the sequence is not initially positive.  If the sequence value is zero or negative, the results are unpredictable and can cause issues in applications dependent on that counter.

## Solution
The `bugSolution.js` file shows a corrected approach. Instead of using `$inc` for decrementing the value it uses the more robust `$set` operator setting the value explicitly. It also adds a conditional statement to prevent it from going under 0. This ensures the counter behaves as expected, even with edge cases.