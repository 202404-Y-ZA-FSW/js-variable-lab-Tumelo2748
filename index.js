// 1. Create a variable called `myFirstName` that contains your first name.
const myFirstName = "Selepe";
// 2. Create a variable called `myLastName` that contains your last name.
const myLastName = "Thinane";
// 3. Create a variable called `myFullName` that contains both first and last name. Use the previously created variables to do this.
const myFullName = myFirstName + " " + myLastName;
// 4. Create a variable called `myHobbies` that contains a **list** of your hobbies. `example: eat, fight, get on the ship`
let myHobbies = "Gaming, Music, Coding";
// 5. Create a variable called `currentStudent` that is a boolean (true or false) that says if you are a student or not. `example: false`
const currentStudent = true;
// 6. Create a variable called `myDream` that contains description about your dream.
let myDream = "To become Chief Information Technology ";
// 7. Create a variable called `bestFriend` that contains the name of your closest friend.
let bestFriend = "Katleho";
// 8. Create a variable called `phoneNumber` that contains a phone number.
let phoneNumber = +27631120386;
// 9. Create a variable called `favoriteMeal` that contains the name of your favorite meal, I already know it's Chakalaka though😋.
let favoriteMeal = "pizza";
// 10. Create a variable called `myBirthYear` that contains the year you were born.
const myBirthYear = 2000;
// 11. Create a variable called `currentYear` that contains the current year.
let curcurrentYear = new Date().getFullYear();
// 12. Create a variable called `myAge` that will show your age. Use the previously created variables to calculate this.
let myAge = curcurrentYear - myBirthYear;

// 1. Print all variables in the console with meaningful description.
console.log(`Hi my name is ${myFirstName}, my surname is ${myLastName}\n  
    My full name is ${myFullName}
    I love ${myHobbies}
    ${
        currentStudent
           ? "I am a student"
            : "I am not a student"
    }
    My dream is ${myDream}
    My best friend is ${bestFriend}
    My phone number is ${phoneNumber}
    My favorite meal is ${favoriteMeal}
    I was born in ${myBirthYear}
    I am ${myAge} years old
`);
