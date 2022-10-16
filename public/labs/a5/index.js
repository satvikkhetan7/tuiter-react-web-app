// alert('Hello World!');
/* eslint-env jquery */
console.log('Hello World!');

console.log('Variables and Constants');
global = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global
    + functionScoped
    - blockScoped;
console.log(global)
console.log(functionScoped)
console.log(blockScoped)
console.log(constant1)

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue = '1' === 1

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

console.log('If else');
if(true1){
    console.log(true);
}
if(!false1){
    console.log('!false1');
}
else{
    console.log('false1');
}

console.log('Ternary conditional operator');
const LoggedIn = true;
const greeting = LoggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

console.log('Legacy ES5 function')
function add(a,b){
    return a+b;
}
const twoPlusFour = add(2,4);
console.log(twoPlusFour);

console.log('New ES6 functions')
const subtract = (a,b)=>{
    return a-b;
}
const threeMinusOne = subtract(3,1);
console.log(threeMinusOne);

console.log('Implied return')
const multiply = (a,b)=>a*b;
const fourTimesFive = multiply(4,5);
console.log(fourTimesFive);

console.log('Parenthesis and parameters');
const square = a => a*a;
const plusOne = a => a+1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log('Arrays');
let numberArray = [1,2,3,4,5];
let stringArray = ['string1', 'string2'];
let variableArray = [functionScoped, blockScoped, constant1, numberArray, stringArray];
console.log(numberArray);
console.log(stringArray);
console.log(variableArray);

console.log('Array index and length');
const length1 = numberArray.length;
const index1 = numberArray.indexOf(3);
console.log(length1);
console.log(index1);

console.log('Add and remove data to arrays');
numberArray.push(6);
stringArray.push('string3');
numberArray.splice(2,1);
stringArray.splice(1,1);
console.log(numberArray);
console.log(stringArray);

console.log('For loops');
for(let i=0;i<stringArray.length;i++){
    const string1 = stringArray[i];
    console.log(string1);
}

console.log('Map function');
const squares = numberArray.map(square);
const cubes = numberArray.map(a => a*a*a);
console.log(squares);
console.log(cubes);

console.log('Find function');
const four = numberArray.find(a => a === 4);
const string3 = stringArray.find(a => a === 'string3');
console.log(four);
console.log(string3);

console.log('Find index');
const fourIndex = numberArray.findIndex(a => a === 4);
const string3Index = stringArray.findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

console.log('Filter function');
const numbersGreaterThan2 = numberArray.filter(a => a > 2);
const evenNumbers = numberArray.filter(a => a % 2 === 0);
const oddNumbers = numberArray.filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

console.log('Template strings');
const five = 2+3;
const result1 = "2 + 3 = " + five;
console.log(result1);
const result2 = `2 + 3 = ${2+3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
let isLogged = false;
const greeting2 = `Logged  in: ${isLogged ? "Yes" : "No"}`;
console.log(greeting2);

const init = () => {
    console.log('Hello world from jQuery');
    console.log('Binding to the DOM');
    const bindById = $('#bind-by-id')
    const bindByClass = $('.bind-by-class')
    console.log(bindById);
    console.log(bindByClass);
    const changeStyle = $('#change-style');
    const changeStyle1 = $('.change-style');
    changeStyle.css('color','red');
    changeStyle1.css('color','blue');

    console.log('Get and set attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class','class-0');

    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    const hideMe = $("#hide-me");
    hideMe.hide();

    const showMe = $("#show-me");
    showMe.show();

    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    const removeLi = $("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html('<li>Line item A</li>');
    changeThisHtml.html('<li>Line item B</li>');
    changeThisHtml.html('<li>Line item C</li>');

    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css('background-color','red').css('color','white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color','blue');

    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color','blue').css('color','white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $("#hide");
    showBtn = $("#show");
    hideShowHeader = $("#hide-show");

    const hideHandler = () => {
        hideShowHeader.hide();
    }

    const showHandler = () => {
        hideShowHeader.show();
    }

    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}
$(init);