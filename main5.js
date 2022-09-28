let bool1 = 1>3;
console.log(bool1);

let bool2 = 7>3;
console.log(bool2);

let arr1 = [10];
console.log(arr1);

let arr2 = [10, 20];
console.log(arr2[1]);

let arr3 = [10, "abc", true, null, undefined, function(){}, {}];
console.log(arr3);

let student1 = {
  KoreanScore:90,
  EnglishScore:70,
  MatheScore:80,
  ScienceScore:60
};

console.log(student1["KoreanScore"]);

console.log(student1.EnglishScore);

const gugudan = function(){
  console.log("3*1=3");
  console.log("3*3=9");
  console.log("3*4=12");
  console.log("3*5=15");
  console.log("3*6=18");
  console.log("3*7=21");
  console.log("3*8=24");
  console.log("3*9=27");
};

gugudan();

function printBanana(){
  console.log("banana");
}
printBanana();

function printApple(){
  console.log("Apple");
}
printApple();

function printFruit(name){
  console.log(name);
}

printFruit('banana');

function printFruit(name, price){
  console.log(name+"는 "+ price +"원 입니다.");
}

printFruit('banana', 2000);

function printFruitArr(arr){
  console.log(arr[0]+"는 "+ arr[1] +"원 입니다.");
}
printFruitArr(['banana', 2000]);

function printFruitObj(obj){
  console.log(obj.name +"은 "+ obj.price +"원 입니다.");
}
printFruitObj({name:'apple', price:3000});

function rockPaperScissors(player1, player2) {
  if ( (player1 === "가위" && player2 === "보") || (player1 === "가위" && player2 === "가위") ) {
    return "player1";
  }
} 

function checkYear() {
  let year = 2022
  return year;
}

console.log(checkYear)

function addTen(num) {
  return num + 10;

}

function addTen(num) {
  return num + 10; 
}

function isBiggerThanHundred(myNumber) {
  if (myNumber > 100); {
    return "크다" {
  } else if (myNumber <= 100) {
    return "작다!"
  }
}


let cities = ["서울", "대전", "대구", "부산", "광주", "제주도"];

//만약 home 이 "서울"이면, "아, 여기 사시는군요" 라고 alert를 띄우고 싶다.

let home = "서울";

if (cities[0] === home) {
  alert("아, 여기 사시는군요");
} else if (cities[1] === home) {
  alert("아, 여기 사시는군요"); {}
}

let cities = [];

cities[0] = "서울";
cities[1] = "대전";
cities[2] = "대구";

console.log(cities)

const id = prompt("아이디를 입력해 주세요.");
  if(id === "tong232") {
  const pw2 = prompt("비밀번호를 입력해 주세요.");
    if(pw2 === "tttttt") {
        alert("환영합니다.");
    } else {
      alert("비밀번호를 확인해 주세요.");
    }
  }