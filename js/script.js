"use strict";


//Задача №2
let num1 = 1;
while (num1 < 6){
console.log(num1);
num1++;
}


let num2 = 5;
while (num2){
console.log(num2);
num2--;
}


let num3 = 5;
while (num3) console.log(num3--);




//Задача №3
let num5 = 0;
while (num5 < 3){
	console.log(`Число: ${num5}`);
	num5++;
}

//Задача №4
firstFor: for(let num4 = 0; num4 < 2; num4++){

 for(let size = 0; size < 3; size++){
		if(size == 1){
			break firstFor;
		}
		console.log(size);
	}
}


//Задача №1 Получить верное значение округления
let sourceNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourceNum * 100) / 100;
console.log(numOne);


//Задача №2 Получить число 135.58 из строки
let value = parseFloat("135.58px");
console.log(value);
console.log(typeof value);


//задача №3 ПОСТРОИТЬ ВЕРНОЕ УСЛОВНОЕ ВЕТВЛЕНИЕ
//NaN уникальное значение, NaN !== NaN

if(58 + "Фрилансер" !== NaN){
	console.log("Результат выражения NaN");
}


//Задача №4 найти максимальное число 10, 58, 39, -150, 0 
console.log(Math.max(10, 58, 39, -150, 0));


//Задача №5 Округлить число 58.858 до числа 58
let numbs = Math.floor(58.858);
console.log(numbs);





// Получить символ н строки
let text3 = 'Фрилансер';
let nSymbol = text3[5];
console.log(nSymbol);
let nSymbolLast = text3[text3.length - 4];
console.log(nSymbolLast);




// Верно? Ожидаем получить 579
let text4 = 123 ;
let text9 = "456";
console.log(text4 + +text9);



//Получить строку в верхнем регистре
let text5 = 'фрилансер';
console.log(text5.toUpperCase());


// true или false ??
let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));
