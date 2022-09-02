function sayHello4(name){
  return 'Hello, ' + name
}

function sayHello5(name){
  console.log('Hello, ' + name)
  console.log('Nice to meet you, ' + name + '!')
}

sayHello5('wecode')
sayHello5('code Kim')
sayHello5('Mac book')


function sayHello4(name){
  return 'Hello, ' + name
}

let greeting = sayHello4('wecode')
console.log(greeting)

function sayHello6(name){
  return 'Hello, ' + name + '!'
}

let firstExample = sayHello6('wecode')
let secondExample = sayHello6('code Kim')
let thirdExample = sayHello6('Developers')

function addNumbers(num1, num2){
  let result = num1 + num2
  return result
}
let addedNumbers = addNumbers(3,5)
console.log(addedNumbers)

function divideNumber(number1, number2){
  let result = number1/number2
  
  return result
}

let smallNumber = divideNumber(10,100)
console.log(smallNumber)

console.log(true)
console.log(false)

console.log('true')
console.log('false')

console.log('code Kim' ==='CODE KIM')
console.log('code Kim' ==='code Kim')

console.log(1 + 1 === 2)
console.log(1 + 1 === 3)

console.log(1 + 1 !== 3)
console.log(1 + 1 !== 2)

console.log(100 >= 100)

if ( 1 + 1 === 2){
  console.log( '1더하기 1은 2입니다.')
}

let name1 = 'Console Kim'
if (name1 === 'code Kim'){
  console.log('저는 김코드입니다.')
}else if (name1 = 'Hello Lee'){
  console.log('저는 김코드가 아닙니다. 저는 이헬로입니다.')
}else {
  console.log('저는 김코드도 아니고, 이헬로도 아닙니다.')
}

function isOkayToDrive(who){
  //함수의 인자가 SON -> NOPE
  //함수의 인자가 DAD -> GOOD
  //함수의 인자가 GRAND FATHER -> BE CAREFUL
  //나머지의 경우 WHO ARE YOU?
  if(who === "son"){
    return "Nope!"
  }else if(who === "dad"){
    return "Good!"
  }else if(who === "grand father"){
    return "Be careful!"
  }else {
    return "Who are you?"
  }
    
}

console.log(isOkayToDrive("son"))

console.log(1 + 1 === 4 || 1 + 1 ===3 )
console.log(1 + 1 === 2 && 1 + 1 ===3 )
console.log(1 + 1 === 2 && 1 + 1 ===2 )

let a = 0
let b = 100
if (a) {
  console.log('i am falsy')
} else if (b){
  console.log('i am truthy')
}