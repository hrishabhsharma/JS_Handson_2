// Output for Question No 1

var Qno1 = document.getElementById("Q1")
Qno1.innerText += ` ${prepbytes()}`

function prepbytes(){
    return "This is Prepbytes Platform"
}
console.log(prepbytes())

// Output for Question No 2

var Qno2 = document.getElementById("Q2")

let first_number = 6
let second_number = 8

function sum(a,b){
    return a+b;
}

let ans_2 = sum(first_number,second_number)

Qno2.innerText += ` Sum of ${first_number} and ${second_number} is ${ans_2}`

console.log(ans_2)

// Output for Question No 3

var Qno3 = document.getElementById("Q3")

msg = () => {return "Hello Prepbytes"}

Qno3.innerText += msg()

console.log(msg())

// Output for Question No 4

var Qno4 = document.getElementById("Q4")

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
let ans_4 = girl()

Qno4.innerHTML += `The output of above question is (${ans_4}). \n It is because x declared in function scope and called before declaration. \nTherfore x does not go out from function scope to gobal scope in search of value of x.`

// Output for Question No 5

var Qno5 = document.getElementById("Q5")

var x2 = 21;
let ans_5 = girl2 ();
console.log(x2)
function girl2() {
    console.log(x2);
    var x2 = 20;
};

Qno5.innerText += `The output of above question is (${ans_5}) and (${x2}). \n First output is because girl function has x variable and call before declaration within the function scope and second one is because x variable declared in global scope so it took global value before calling x. `

// Output for Question No 6

var Qno6 = document.getElementById("Q6")

var x3 = 21;
let ans_6a = a();
let ans_6b = b();
function a() {
    x3 = 20;
    console.log(x3);
    return x3;
};
function b() {
    x3 = 40;
    console.log(x3);
    return x3;
};

Qno6.innerText += `The output of above question is (${ans_6a}) and (${ans_6b}).\n First output is because (a) function has variable x and call after declaration within the function scope and second one has same reason.`

// Output for Question No 7

var Qno7 = document.getElementById("Q7")

function factorial(n){
    let ans = 1
    for(let i=2 ; i<=n ; i++){
        ans *= i;
    }
    console.log(ans)
    return ans;
}

let ans_7 = factorial(5)

Qno7.innerText += `\n The factorial of number 5 is (${ans_7})`

// Output for Question No 1 For Day 2

var Qno8 = document.getElementById("Q8")

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    return (`i am from ${data} and My batch is EA${batch}`)
}

let ans_8 = DisplayData("PrepBytes", FindSum(10, 9))

Qno8.innerText += `First create a function of addition two number and create another function which print the whole lines with the value of two parameter. Now We call the second function having two parameter in which first one is a string and second one is a calling first function for addition two number.\n Then The resulting output is ("${ans_8}"). \n This is an example of callback() function.`

// Output for Question No 2 For Day 2

var Qno9 = document.getElementById("Q9")


// let ans_9 = Abc()
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

Qno9.innerText += `The output of above question is (Error). This is because Abc() function is called before declaration which is illegal for const variable.`

// Output for Question No 3

var Qno10 = document.getElementById("Q10")

var a = 10;
let ans_10 = (function (){
    console.log(a);
    var a = 20;
})();

Qno10.innerText += `The output of above question is (${ans_10}). \n It is because (a) variable declared in function scope and called before declaration. \n Therfore (a) variable does not go out from function scope to gobal scope in search of value of (a) variable`

// Output for Question No 4

var Qno11 = document.getElementById("Q11")


const greet =  function(name){
    return function(m){
        
        return (`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('EA19');
let ans_11 = greet_message("Welcome To PrepBytes")
console.log(ans_11)

Qno11.innerText += `Firstly we create an function having one parameter (name) and named as (greet) const variable. In (name) function , We create another function having one paramter (m) and return it and inside there is a string having value of (name) paramter and (m) parameter and going to be return.\n After creating function, There is a const variable (greet_message) storing greet function having (EA19) parameter. Then call the greet_message as function having (Welcome To PrepBytes) parameter.   ${ans_11}`