console.log("Error Handling");

try {
  console.log("Inside try block...");
  console.log(x);
} catch (error) {
  throw new Error("Buds, first declare the variable then use!!!");
} finally {
  console.log("inside finally block");
}

let errorCode = 100;
if (errorCode == 100) {
  throw new Error("Invalid Jason 100 error code...");
}
