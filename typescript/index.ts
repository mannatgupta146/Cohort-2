// 1. Basic console output
// Strings must be wrapped in quotes (e.g., "hello this is ts") to log them correctly.
console.log("hello this is ts");

// 2. The 'any' type
// 'any' disables type checking entirely, allowing the variable to change types freely.
let a: any = 10;
a = "raju"; // Reassigned from number to string without errors
console.log(a);

// 3. The 'unknown' type
// 'unknown' is a type-safe counterpart to 'any'. You cannot perform operations on it
// without first verifying its type, which is checked here using a ternary operator.
let b: unknown = 10;
b = "raju"; 
console.log(typeof b === "string" ? "b is a string" : "b is not a string");
console.log(b);

// 4. Union types (|)
// Union types allow a variable to hold one of several specified types (here: number, string, or null).
let c: number | string | null = 10;
c = null; 
console.log(c);

// 5. Arrays
// The type annotation 'number[]' dictates this array can only contain numbers.
let arr: number[] = [90, 89, 88, 87, 86];
console.log(arr);

// 6. Tuples
// Tuples allow you to create an array with a fixed number of elements and specific, known types.
let tuple: [number, string] = [90, "89"]; // Adjusted second element to a string to match the type definition
console.log(tuple);

// 7. Enums
// Enums give developers a way to use descriptive, friendly names for sets of numeric values.
// By default, User = 0 and Admin = 1.
enum role { User, Admin }
let user = role.User;
console.log(user);
