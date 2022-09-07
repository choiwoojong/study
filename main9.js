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