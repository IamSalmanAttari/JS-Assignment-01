// ||__________________________Salman Attari_____________________________||


// __________________________ Assignment 1 ________________________________




// _____________________________Alert___________________________________


// alert("salman" + "\n" + "memon");

// _________________________VARIABLES FOR STRINGS_________________________

// Q1
// var username =

// Q2
// var myName = "Salman memon";

// Q3;
// var message = "hello world";
// alert(message);

// Q4
// var name = "Salman memon"
// var age = "28"
// var school = "saylani"
// var course = "web and app"

// alert(name)
// alert(age)
// alert(school)
// alert(course)

// Q5
// var abc = "PIZZA"
// alert(abc + "\n" + "PIZZ"+ "\n" + "PIZ"+ "\n" + "PI"+ "\n" + "P");

// Q6
// var name = "Ali";
// var kidd = "6";
// var area = "UAE";
// var part = "Fatima";

// alert("Hello " + name + ", You will be married to " + part + " with " + kidd + " kids in " + area + ".");

// Q7
// var mail = "salmansikanderattari@gmail.com";

// alert("Your Email Address is " + mail);

// Q8
// var book = "“A smarter way to learn JavaScript”"
// alert("I am trying to learn from the book " + book)

// Q9 and Q10 (variables from Q4)
// document.write("My name is " + name + ". I study at " + school + ". I am " + age + " years old. I take " + course +"." )

// _________________________VARIABLES FOR NUMBERS_________________________

// Q1
// var age = 28;
// alert("I am " + age + " years old.")

// Q2
// var site = 15;
// alert("You have visited this site " + site + " times.");

// Q3
// var birthYear = 1995;
// document.write( "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof birthYear);

// Q4
// var visitor = "<b>John Doe</b>";
// var quantity = " <b>5</b>";
// var product = "<b> T-Shirt(s)</b>";

// document.write( visitor + " ordered " + quantity + product + " on XYZ Clothing Store." );

// _________________________VARIABLE NAMES: LEGAL & ILLEGAL_________________________

// Q1
// var a = "12" , x = "13" , y ="14"

// Q2
// var $sa = "salman"  legal
// var _sal = "salman" legal
// var sal = "salman" legal
// var sal123 = "salmna"
// var sal123sal = "salman"

// var 123sal = "salman" illegal
// var #sal = "salman" illegal
//  % ^ & * = "salman" illegal
//  var name name= "salman" illegal
//  var name1-name1= "salman" illegal

// Q3
// a)
// document.write("<h1> “Rules for naming JS variables” </h1>");

// b)
// letters numbers alphabets and special character

// c)
// $ _ and Alphabets

// d)
// Variable names are case  ( sensitive )

// e)
// Variable name should not be JS ( keyword )

// _________________________MATH EXPRESSIONS_________________________

// Q1
// var a = 2;
// var b = 3;

// add = a + b;

// alert("sum of " + a + " and " + b + " is " + add);

// Q2

// var a = 5;
// var b = 3;
// sub = a - b;
// alert("Result of subtracting " + a + " from " + b + " is " + sub);

// var a = 5;
// var b = 3;
// mul = a * b;
// alert("Result of multiplying " + a + " and " + b + " is " + mul);

// var a = 10;
// var b = 2;
// div = a / b;
// alert("Result of dividing " + a + " by " + b + " is " + div);

// Q3

// var a = document.write("Value after variable declaration is: " + a);

// var a = 3;

// document.write(" <br> Initial value: " + a);

// a += 1;

// document.write(" <br> Value after increment is: " + a);

// a += 7;

// document.write(" <br> Value after addition is: " + a);

// a -= 1;

// document.write(" <br> Value after addition is: " + a);

// Q4
// var ticket = 600;
// total = ticket * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + total + "PKR");

// Q7
// var item1 = 500;
// var item2 = 600;
// var q1 = 4;
// var q2 = 3;
// var ship = 150;

// total = (item1 * q1) + (item2 * q2) + ship

// document.write("Price of item 1 is " + item1 + "<br> Price of item 2 is " + item2 + "<br> Ordered quantity of item 1 is " + q1 + " <br> Ordered Quantity of item 2 is " + q2 + "<br> <br>  Shipping charges is " + ship + "<br> <br> Total cost of your order is " + total)

// Q8;
// var total = 800;
// var obt = 650;
// percentage = (obt * 100) / total;

// document.write(
//   "<h1> Mark Sheet </h1>" +
//     "Total marks : " +
//     total +
//     "<br> Marks Obtained : " +
//     obt +
//     "<br> Percentage : " +
//     percentage +
//     "%"
// );

// Q10
// var a = 5;
// sum = (((a + 5) * 10) / 2)

// alert(sum);

// Q11
// var currentYear = 2024;
// var birthYear = 1995;
// total = currentYear - birthYear;
// total2 = currentYear - birthYear - 1;

// document.write(
//   "<h1> Age calculator </h1>" +
//     "Current year : " + currentYear +
//     "<br> Birth year : " + birthYear +
//     "<br> <br> They are either " + total2 + " or " + total + " years old.");

// Q13;
// var a = 10;

// document.write(
//   "The value of a is : " +
//     a +
//     "<br> --------------------------- <br>" +
//     "<br> The value of ++a is : " +
//     ++a +
//     "<br> Now the value of a is : " +
//     a +
//     "<br> <br>The value of a++ is : " +
//     a++ +
//     "<br> Now the value of a is : " +
//     a +
//     "<br> <br>The value of --a is : " +
//     --a +
//     "<br> Now the value of a is : " +
//     a +
//     "<br> <br> The value of a-- is : " +
//     a-- +
//     "<br> Now the value of a is : " +
//     a);

// Q14
// var a = 2,
//   b = 1;

// document.write("a is : 2" + "<br> b is : " + b);

// var result = --a - --b + ++b + b--

// document.write("<br> <br> result is : " + result);

// Q15
// var fSnack = "Oreo Biscuits";
// var cAge = 28;
// var exp = 80;
// var pDay = 5;

// document.write(
//   "Favourite snacks : " +
//     fSnack +
//     "<br> Current age : " +
//     cAge +
//     "<br> Estimated Maximum age : " +
//     exp +
//     "<br> Amount of snacks per day :  " +
//     pDay +
//     " <br> <br> You will need " +
//     (exp - cAge) * pDay +
//     " " +
//     fSnack +
//     " to last you until the ripe old age of " +
//     exp
// );
