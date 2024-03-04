// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area = (a, b) => a * b;
// console.log(area(10, 20))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r)=>Math.PI * r*r;
// console.log(circle (10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cillin = (h, r)=>Math.PI * (r*r * h);
// console.log(cillin (10, 10))
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5,6,7,8,9];
// let someArray = (array)=>{
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// someArray(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let someText = (p)=>{
//     document.write(`
//     <p>${p}</p>
//     `)
// }
// someText(`blablabla`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let someList = (text)=>{
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)
// }
// someList(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let someList = (text, count)=>{
//     for (let i = 0; i < count; i++) {
//         document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)
//     }
// }
// someList(`hello`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,2,3,4,5,6,7,8,9];
// let primitivArr = (arr)=>{
//     for (let arrElement of arr) {
//         document.write(`
//         <ul>
//             <li>${arrElement}</li>
//         </ul>
//         `);
//     }
// }
// primitivArr(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: false},
//     {name: 'petya', age: 30, id: true},
//     {name: 'kolya', age: 29, id: true},
//     {name: 'olya', age: 28, id: false},
//     {name: 'max', age: 30, id: true},
//     {name: 'anya', age: 31, id: false},
//     {name: 'oleg', age: 28, id: false},
//     {name: 'andrey', age: 29, id: true},
//     {name: 'masha', age: 30, id: true},
//     {name: 'olya', age: 31, id: false},
//     {name: 'max', age: 31, id: true}
// ];
// let asd = (arr)=>{
//     for (let arrElement of arr) {
//         document.write(`
//         <div>
//         id: ${arrElement.id};
//         name: ${arrElement.name};
//         age: ${arrElement.age}
//         </div>`)
//     }
// }
// asd(users)

// - створити функцію яка повертає найменьше число з масиву

// let arrNum = [452,300,3,4,15,0,1000,5,2,-5,6,7];
// let minNum = (arr)=>{
//     let min = arr[0];
//     for (let item of arr) {
//         if (item < min){
//            min = item;
//         }
//     }
//     return console.log(min);
// }
// minNum(arrNum)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
//
// let mas = [1,2,5,10]
//
// let sum = (mas)=>{
//     let result = 0;
//     for (let ma of mas) {
//         let a = result += ma;
//     }
//     console.log(result);
// }
// sum(mas)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//             ==========це завдання я зробити не зміг=========
// let mass = [11,22,33,44];
// function swap(arr, index1, index2) {
//     let in1 = index1;
//     let in2 = index2;
//     for (let item of arr) {
//         if (in1 === 0){
//             arr[0] = arr[1];
//         }else if (in2 === 1){
//             arr[1] = arr[0]
//         }
//     }
//     console.log(mass);
// }
// swap(mass,0,1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let cash = [{currency:'USD',value:40},{currency:'EUR',value:42}];
// let exchange = (sumUAH,currencyValues,currencyValue) =>{
//     for (let item of cash) {
//         if (item.currency === currencyValue){
//             let res = sumUAH / item.value;
//             console.log(res);
//         }
//     }
// }
// exchange(3000,cash,`EUR`)