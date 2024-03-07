// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length)
//
// let str1 = 'lorem ipsum';
// console.log(str1.length)
//
// let str2 = 'javascript is cool';
// console.log(str2.length)
// -------------------------------------------------------------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase())
//
// let str1 = 'lorem ipsum';
// console.log(str1.toUpperCase())
//
// let str2 = 'javascript is cool';
// console.log(str2.toUpperCase())
// -------------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase())
//
// let str1 = 'LOREM IPSUM';
// console.log(str1.toLowerCase())
//
// let str2 = 'JAVASCRIPT IS COOLl';
// console.log(str2.toLowerCase())
// -----------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.substring(str.indexOf(' '), str.lastIndexOf(' ')));
// -----------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = (str.split(' '));
// console.log(arr)
// --------------------------------------------------------------------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

    // let arr = [10,8,-7,55,987,-1011,0,1050,0];
    // let map = arr.map((arr)=>{
    // let a = arr.toString();
    // return a;
    // });
    // console.log(map)
// --------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
//  sortNums(nums,'ascending') // [3,11,21]
//  sortNums(nums,'descending') // [21,11,3]

       //  let nums = [11,21,3];
       // function sortNums(arr, kay){
       //     switch (kay) {
       //         case 'ascending':
       //             return arr.sort((a,b)=>a-b);
       //         case 'descending':
       //             return arr.sort((a,b)=>b-a);
       //         default:
       //             console.log('error')
       //     }
       // }
       // console.log(sortNums(nums, 'ascending'));
       // console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// ========================-- відсортувати його за спаданням за monthDuration=======================
// function sorted(arr, kay){
//     switch (kay) {
//         case 'descending':
//             return arr.sort((a,b)=>b.monthDuration-a.monthDuration);
//         default:
//             console.log('error')
//     }
// }
// console.log(sorted(coursesAndDurationArray, 'descending'));

// =================-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців================

        // let courses = coursesAndDurationArray.filter(cours => cours.monthDuration > 5);
        // console.log(courses)

// ===========-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}===========

    // let map = coursesAndDurationArray.map((item,index)=>{
    //     let a = {
    //         id:index,
    //         title:item.title,
    //         monthDuration:item.monthDuration
    //     }
    //     return a;
    // });
    // console.log(map)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// описати колоду карт (від 6 до туза без джокерів)
// let deckOfCards = [
//     {cardSuit:'spade',value:'6',color:'black'},
//     {cardSuit:'spade',value:'7',color:'black'},
//     {cardSuit:'spade',value:'8',color:'black'},
//     {cardSuit:'spade',value:'9',color:'black'},
//     {cardSuit:'spade',value:'10',color:'black'},
//     {cardSuit:'spade',value:'jack',color:'black'},
//     {cardSuit:'spade',value:'queen',color:'black'},
//     {cardSuit:'spade',value:'king',color:'black'},
//     {cardSuit:'spade',value:'ace',color:'black'},
//     {cardSuit:'clubs',value:'6',color:'black'},
//     {cardSuit:'clubs',value:'7',color:'black'},
//     {cardSuit:'clubs',value:'8',color:'black'},
//     {cardSuit:'clubs',value:'9',color:'black'},
//     {cardSuit:'clubs',value:'10',color:'black'},
//     {cardSuit:'clubs',value:'jack',color:'black'},
//     {cardSuit:'clubs',value:'queen',color:'black'},
//     {cardSuit:'clubs',value:'king',color:'black'},
//     {cardSuit:'clubs',value:'ace',color:'black'},
//     {cardSuit:'diamond',value:'6',color:'red'},
//     {cardSuit:'diamond',value:'7',color:'red'},
//     {cardSuit:'diamond',value:'8',color:'red'},
//     {cardSuit:'diamond',value:'9',color:'red'},
//     {cardSuit:'diamond',value:'10',color:'red'},
//     {cardSuit:'diamond',value:'jack',color:'red'},
//     {cardSuit:'diamond',value:'queen',color:'red'},
//     {cardSuit:'diamond',value:'king',color:'red'},
//     {cardSuit:'diamond',value:'ace',color:'red'},
//     {cardSuit:'heart',value:'6',color:'red'},
//     {cardSuit:'heart',value:'7',color:'red'},
//     {cardSuit:'heart',value:'8',color:'red'},
//     {cardSuit:'heart',value:'9',color:'red'},
//     {cardSuit:'heart',value:'10',color:'red'},
//     {cardSuit:'heart',value:'jack',color:'red'},
//     {cardSuit:'heart',value:'queen',color:'red'},
//     {cardSuit:'heart',value:'king',color:'red'},
//     {cardSuit:'heart',value:'ace',color:'red'},
// ];
// ===============- знайти піковий туз===========
// let deck = (arr)=>{
//     for (let deckElement of deckOfCards) {
//         if (deckElement.value === 'ace' && deckElement.cardSuit === 'spade'){
//             console.log(deckElement)
//         }
//     }
// }
// deck(deckOfCards)

// ==================- всі шістки=================

// let col = deckOfCards.filter(card => card.value === '6');
// console.log(col)

// ===========- всі червоні карти=========

// let col = deckOfCards.filter(card => card.color === 'red');
// console.log(col)

// ========================- всі буби==============

// let col = deckOfCards.filter(card => card.cardSuit === 'diamond');
// console.log(col)

// =================- всі трефи від 9 та більше==============

// let col = deckOfCards.filter(card => card.cardSuit === 'clubs' && card.value >='9');
// console.log(col)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// ______________________ВАРІАНТ 1_(НЕ ЗОВСІМ ВИЙШЛО ЗАПАКУВАТИ В ОБ'ЄКТ)________________________

// let reduce = deckOfCards.reduce((arr, card) => {
//     if(card.cardSuit === 'spade'){
//         arr[0].push(card)
//     }else if(card.cardSuit === 'clubs'){
//         arr[1].push(card)
//     }else if(card.cardSuit === 'diamond'){
//         arr[2].push(card)
//     }else {
//         arr[3].push(card)
//     }
//     return arr;
// }, [spades=[],clubs=[],diamonds=[],hearts=[]]
// );
//
// console.log(reduce)

// ________________________ВАРІАНТ 2__________________________

//     let masOfCard = {
//         spades:[],
//         diamonds:[],
//         hearts:[],
//         clubs:[]
//     }
//
// for (let masOfCardElement of deckOfCards) {
//     if (masOfCardElement.cardSuit === 'spade'){
//         masOfCard.spades.push(masOfCardElement)
//     }else if(masOfCardElement.cardSuit === 'clubs'){
//         masOfCard.clubs.push(masOfCardElement)
//     }else  if(masOfCardElement.cardSuit === 'diamond'){
//         masOfCard.diamonds.push(masOfCardElement)
//     }else {
//         masOfCard.hearts.push(masOfCardElement)
//     }
// }
// console.log(masOfCard)


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// ==============--написати пошук всіх об'єктів, в який в modules є docker==============

// let filter = coursesArray.filter((course)=>course.modules.find(item=> item === 'docker'));
// console.log(filter)

// ================--написати пошук всіх об'єктів, в який в modules є sass======================

// let filter = coursesArray.filter((course)=>course.modules.includes('sass'));
// console.log(filter)