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