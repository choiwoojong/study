function addNumbers() {
  let kuku = "koko"
  return 'kirin ' + kuku 
}

let myadd = addNumbers()
console.log(myadd)

function addTo(){
  let sentence = "Hello! "
  let name = "woojong Choi!"
  return sentence + name
}

console.log(addTo())

function saySay(name){
  return 'Hello ' + name + '!'
}

console.log(saySay('wecoco'))

function sayHello1 (name){
  console.log('Hello ' + name)
  console.log('Nice to meet you ' + name + '!')
}

sayHello1('kiki')
sayHello1('keke')


function sayHello2(name) { //parameter
  return 'Hello ' + name
}

sayHello2('Developers')
sayHello2('Code Kim')
sayHello2('Wecode')

let firstFunction = sayHello2('Developers')
let secondFunction = sayHello2('Code Kim')
let thirdFunction = sayHello2('Wecode') 

console.log(firstFunction)
console.log(secondFunction)
console.log(thirdFunction)

function addNumbers2(num1, num2) {
  let result = num1 + num2
  return 'How Can I Cal ' + result + '?'
}

let coCoBall = addNumbers2(20, 50)

console.log(coCoBall)


function divideNumbers(number1, number2) {
  let result = number1 / number2
  return result
}

let conCon = divideNumbers(100, 20000)
console.log(conCon)


console.log(1 + 1 === 2)
console.log(1 + 1 === 3)

console.log('code kim' === 'CODE KIM')
console.log('code kim' === 'code kim' )

console.log(1 + 1 !== 3)

if (1 + 1 ===2) {
  console.log("1 더하기 1은 2입니다.")
}

let name2 = 'wecode Lee'

if (name2 === 'Code Kim') {
  console.log('Hi, My Friend')
} else if (name2 === 'wecode Lee'){
  console.log('Who are you?')
} else {
  console.log('I don\'t Know Who you are')
}

function isOkayToDrive (who) {
  if (who === "son") {
    return "Nope!"
  } else if (who === "dad") {
    return "Good!"
  } else if (who === "grand father") {
    return "Be careful"
  } else {
    return "who are you?"
  }
}

console.log(isOkayToDrive("dad"))

console.log(1 + 1 === 2 && 1 + 1 === 3)

let a = 0 // falsy
let b = 100 //truthy

if (a) {
  console.log('i am falsy')
} else if (b) {
  console.log('i am truthy')
}

let myArray = [19, 44, 'good', false]

let first = myArray[1] 
console.log(first)

myArray[0] = 500;
console.log(myArray)

myArray[3] = true
console.log(myArray)

console.log(myArray.length)
myArray.push("kiwi")
console.log(myArray)
myArray.shift()
console.log(myArray)

let myArray2 = [19, 44, 'good', [100, 200, 500], false]
let myArray3 = [900, 800, 700, 600]
let myArray4 = [7, 77, 777, 7777, 77777, 77777]

console.log('myArray2: ', myArray2[4])
console.log('myArray3: ', myArray3[3])
console.log('myArray4: ', myArray4[5])

console.log(myArray2[5-1])
console.log(myArray2[myArray2.length-1])

for (let step = 0; step < 11; step++){
  console.log('Hello wecode')
  console.log(step)
}

for (let i = 1; i < 11; i++){
  console.log('cocococo')
  console.log(i)
}

for (let its = 0; its < 10; its++) {
  console.log(its + 1)
}

//빈 배열 myArray
//myArray [100, 101]
//myArray [100, 101...., 110]

let arr = []
for (let toto =  100; toto < 111; toto++) {
  arr.push(toto)

}
console.log(arr)

let colors = ['red', 'blue', 'orange', 'black']

for (let ccc = 0; ccc < 4; ccc++){
  console.log(colors[ccc])
}

let myNumberSs = [10, 20, 30, 40, 50, 60, 80, 100, 1000] 
//numbers 에 Array를 순회하며 1씩 더하여 콘솔에 출력하기

for (let index = 0; index < myNumberSs.length; index++) {
  console.log(myNumberSs[index] + 1)
}

function makeBurger() {
  let Array2 = ['빵_위', '치즈', '피클', '양파', '흰소스', '접시', '빵_아래', '케첩', '스테이크', '토마토']
  
}
  let firstAR = makeBurger()
console.log(firstAR)


let mySelf = {
  name : 'Code Kim',
  Location : {
    country : 'South korea', 
    city : 'Seoul'
  },
  age : 30,
  cats : ['냥순', '냥돌']
}
let myCats = mySelf['cats']

let myKey = 'cats'
console.log(mySelf['cats'])
console.log(mySelf[myKey])
// console.log(mySelf.myKey) 
 // 변수+ 변수 =  닷 노테이션으로는 표시가 안 될 수 있음
