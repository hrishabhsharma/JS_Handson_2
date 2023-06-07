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

Qno4.innerHTML += `${ans_4}`;

// Output for Question No 5

var Qno5 = document.getElementById("Q5")

var x2 = 21;
let ans_5 = girl2 ();
console.log(x2)
function girl2() {
    console.log(x2);
    var x2 = 20;
};

Qno5.innerText += ` ${ans_5} \n .  . . . . . . ${x2}`

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

Qno6.innerText += ` ${ans_6a} ${ans_6b}`

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

Qno7.innerText += `\n The factorial of number 5 is ${ans_7}`

// Output for Question No 8

var Qno8 = document.getElementById("Q8")

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    return (`i am from ${data} and My batch is EA${batch}`)
}

let ans_8 = DisplayData("PrepBytes", FindSum(10, 9))

Qno8.innerText += ` ${ans_8}`

// Output for Question No 9

var Qno9 = document.getElementById("Q9")


// let ans_9 = Abc()
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

Qno9.innerText += ` Error`

// Output for Question No 10

var Qno10 = document.getElementById("Q10")


const greet =  function(name){
    return function(m){
        
        return (`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('EA19');
let ans_10 = greet_message("Welcome To PrepBytes")

Qno10.innerText += ` ${ans_10}`