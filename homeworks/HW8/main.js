// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(11, 'vasya', 'pupkin', 'v-pupkin@gmail.com', 380501234567),
//     new User(22, 'petya', 'poroh', 'p-poroh@gmail.com', 380507894512),
//     new User(33, 'yulia', 'tumoshonka', 'y-tumoshonka@ukr.net', 380504561230),
//     new User(44, 'senya', 'yayceniuk', 'kuiya-v-lob@ukr.net', 380506549872),
//     new User(55, 'oleg', 'liashka', 'ja-ne-gey@mail.ua', 380505234976),
//     new User(66, 'jon', 'conor', 'covid@gmail.usa', 380502586541),
//     new User(77, 'albert', 'enshtein', 'badabum@tanu.nah', 380509517535),
//     new User(88, 'ali', 'baba', 'ali40@mail.ch', 380501594823),
//     new User(99, 'ivan', 'mazepa', 'i-maz@ukr.net', 380509713546),
//     new User(100, 'taras', 'shevchenko', 'zapovit@ukr.net', 380507534212)
// ];

// =================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let usersFilter = users.filter(u => u.id % 2 === 0);
// console.log(usersFilter);

// =========================================================================
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let userSort = users.sort((a, b) => a.id - b.id);
// console.log(userSort);

// ====================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, 
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// //
// let clients = [
//     new Client(11, 'vasya', 'pupkin', 'v-pupkin@gmail.com', 380501234567, ['aaa','bbb']),
//     new Client(22, 'petya', 'poroh', 'p-poroh@gmail.com', 380507894512, ['aaa', 'bbb', 'ccc', 'xxx']),
//     new Client(33, 'yulia', 'tumoshonka', 'y-tumoshonka@ukr.net', 380504561230, ['aaa', 'bbb', 'ccc', 'xxx','uuu']),
//     new Client(44, 'senya', 'yayceniuk', 'kuiya-v-lob@ukr.net', 380506549872, ['aaa', 'bbb']),
//     new Client(55, 'oleg', 'liashka', 'ja-ne-gey@mail.ua', 380505234976, ['aaa', 'bbb', 'ccc', 'xxx']),
//     new Client(66, 'jon', 'conor', 'covid@gmail.usa', 380502586541, ['aaa']),
//     new Client(77, 'albert', 'enshtein', 'badabum@tanu.nah', 380509517535, ['aaa', 'bbb', 'ccc']),
//     new Client(88, 'ali', 'baba', 'ali40@mail.ch', 380501594823, ['aaa', 'bbb', 'ccc', 'xxx','yyy']),
//     new Client(99, 'ivan', 'mazepa', 'i-maz@ukr.net', 380509713546, ['aaa', 'bbb', 'ccc', 'xxx']),
//     new Client(100, 'taras', 'shevchenko', 'zapovit@ukr.net', 380507534212, ['aaa', 'bbb'])
// ];
// console.log(clients);
// ==============================================================================
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let clients1 = clients.sort((a, b)=> a.order.length-b.order.length);
// console.log(clients1);


// ====================================================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacture, year, maxSpeed, volume) {
//     this.model = model;
//     this.manufacture = manufacture;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.driver = [];
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
//     };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] === "function") continue;
//             console.log(key, ':', this[key])
//         }
//     };
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver.push(driver)
//     };
// }

//
// let car1 = new Car('x5', 'BMW', 2020, 220, 3);
//
// car1.drive();
//
// car1.info();
//
// car1.increaseMaxSpeed(20);
//
// car1.changeYear(1998);
// console.log(car1);

// car1.addDriver('vasia')
// car1.addDriver(31)
// car1.info();

//======================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacture, year, maxSpeed, volume) {
//         this.model = model;
//         this.manufacture = manufacture;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.driver = [];
//     };
//
//     // // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     };
//
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info() {
//         for (const key in this) {
//             if (typeof this[key] === "function") continue;
//             console.log(key, ':', this[key])
//         }
//     };
//
//     // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     // // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver) {
//         this.driver.push(driver)
//     };
// }
//
// let car1 = new Car('x5', 'BMW', 2020, 220, 3);
//
// car1.drive()
//
// car1.info()
//
// car1.increaseMaxSpeed(50)
//
// car1.changeYear(2023)
//
// car1.addDriver('petya')
// car1.addDriver(35)
// car1.info()
//=================================================================================
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Sindi(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize
//
//
// }
//
// let sindis = [
//     new Sindi('anna', 22, 38),
//     new Sindi('gretta', 25, 36),
//     new Sindi('cinderella', 20, 35),
//     new Sindi('olga', 21, 34),
//     new Sindi('ira', 30, 37),
//     new Sindi('pamela', 29, 38),
//     new Sindi('galina', 19, 40),
//     new Sindi('natali', 20, 30),
//     new Sindi('diana', 31, 41),
//     new Sindi('svitlana', 28, 42),
// ];
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe
//     };
// }
//
// let prince = new Prince('vasia', 40, 35);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let sindi of sindis) {
//     if (sindi.footSize === prince.shoe) {
//         console.log(sindi.name + ' твоя доля');
//     }
// }
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let vona = sindis.find(sindi => sindi.footSize === prince.shoe);
//
// console.log(vona);