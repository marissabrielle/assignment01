// 1. Convert the following highlighted identifiers to Camel Case notation:
// let some_month
// function the Month()
// let current-month
// let summer_month
// let MyLibrary-function

// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

// 2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// numeric literal expression
// 7.6

// string literal expression
// 'Hello World!'

// boolean literal expression
// false

// null literal expression
// null

// 3. Give me two examples of complex / variable expressions.
// let firstExpression = 2 + (8 / 3) - 2;
// let secondExpression = (5 + 8) + 3;

// 4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// let strFirstName
// let strLastName
// let strAddress
// let strCity
// let strState
// let intZipCode
// let intYourAge
// let strReferralSource
// let blnMayWeContactYou

// 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let strFirstName = 'Marissa';
// let strAddress = '123 Street Ave';
// let intYourAge = 30;

// let strFirstName
// let strAddress
// let intYourAge

// strFirstName = 'Marissa';
// strAddress = '123 Street Ave';
// intYourAge = 33;

// 6. Create a variable.
// let myName = 'Marissa';

// 7. Add a number and a string and display the coerced result in the browser’s console window.
// let myAge = 32;
// console.log(myName + ' is ' + myAge);

// 8. Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.

// 9. Is the following string literal valid? If not, how would you fix it?

// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)

// let someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."
// console.log(someString)

// 10.Create a variable that produces a null value in the console window.
//Then, create a variable that produces an undefined value in the console window.
// let aVariable =  null
// console.log(aVariable)

// let anotherVariable = 
// console.log(anotherVariable)

// 11. Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// typeof 'Hello World' 
// typeof 2 
// typeof false
// typeof {x:1, y:2} 
// typeof x

// 12. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// alert('Hello Zak Ruvalcaba, welcome to the JavaScript class!')

//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// alert('Hello ' + 'Marissa' + ', welcome to the JavaScript class!')

// 13. Declare a variable called name and set it equal to your name.
// let myName = 'Marissa'
// alert('Hello ' + myName + ', welcome to the JavaScript class!')

// Substitute your name in the previous alert string with the variable instead.

// 14. Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let course = 'Javascript'

// alert('Hello ' + myName + ', welcome to the ' + course + ' class!')

// 15. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
// alert('Hello ' + myName + ',\nwelcome to the ' + course + ' class!')


// 16. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// let course = 'Javascript'
// let myName = prompt('Enter your name')
// alert('Hello ' + myName + ',\nwelcome to the ' + course + ' class!')

// 17. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let course = prompt('Enter the course name')
// let myName = prompt('Enter your name')
// alert('Hello ' + myName + ',\nwelcome to the ' + course + ' class!')

// 18. Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.
// let x = 10
// let y = 20
// console.log(x + y)

// 19. Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
// let x = 20
// console.log(x+20)

// 20. Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
// let x = 20
// console.log(x*=5)

// 21. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.
// let x = (20 % 3)
// console.log(x /= 1)

// 22. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let x = (20 - 10)
// let y = 10
// console.log(x == 10 && y == 10)

// 23. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let x = (5 * 2)
// let y = 3
// console.log(x == 8 || y == 5)