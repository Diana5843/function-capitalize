// Написать функцию capitalize, которая будет для каждого слова в строке делать первую букву большой.


// Методы, которые могут понадобиться
//   String.prototype.split = разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//   Array.prototype.map
//   String.prototype.toUpperCase = возвращает значение строки, преобразованное в верхний регистр. Метод toUpperCase() не изменяет значение самой строки.
//   String.prototype.slice = извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
//   Array.prototype.join

// let str = 'hjhklkjhgfdfghjklkjhgfd';

// function capitalize(firstLatter) {
//     if (!firstLatter) return firstLatter;
  
//     return firstLatter[0].toUpperCase() + firstLatter.slice(1);
//   }

function capitalize(firstLatter) {
    if (!firstLatter) return firstLatter;
     
    let firstLetterSplit = firstLatter.split(' ');
        firstLetterSplit = firstLetterSplit.map((word)=> 
            word[0].toUpperCase() + word.slice(1, word.lengh));
    

    return firstLetterSplit.join(' ');
    
}
const a = capitalize('ghjklk ghjkl fghjklkjh');
console.log(a);