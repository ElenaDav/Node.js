/*Напишите программу для вывода в консоль простых чисел, чтобы они попадали в указанный
диапазон включительно. При этом числа должны окрашиваться в цвета по принципу светофора:
● первое число выводится зелёным цветом;
● второе — жёлтым;
● третье — красным.
Диапазон, куда попадут числа, указывается при запуске программы.
1. Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале
красным цветом.
2. Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и
завершите программу.
*/
import colors from 'colors'

const [firstNum, lastNum] = process.argv.slice(2).map((item) => parseInt(item))

if (isNaN(firstNum) || isNaN(lastNum)) {
  console.error(
    colors.red('аргумент, переданный при запуске, не считается числом')
  )
  process.exit(0)
}

const simpleNumbers = (num) => {
  if (num < 2) {
    return console.log('простых чисел в диапазоне нет')
  }

  for (let i = 2; i * i <= i; i++) {
    if (num % i === 0) {
      return true
    }
  }
}
/*
function simpleNumbers(start, end) {
  const numb = process.argv.slice(2)
  for (let i = start, flag = false; i <= end; i++, flag = 0) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        flag = true
        break
      }
    }
    if (!flag) numb[numb.length] = i
    return numb
  }
  console.log(`simple numb is ${numb.join(', ')}`)
}


function simpleNumbers(start, end) {
  let res = []

  //промежуток от start до end включительно
  for (let i = start, flag = false; i <= end; i++, flag = 0) {
    if (i < 2) {
      return console.log('простых чисел в диапазоне нет')
    }

    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        flag = true
        break
      }
    }
    if (!flag) res[res.length] = i
  }
  return res
}
console.log(`this is simple number ${simpleNumbers(30, 60).join(', ')}`)
*/
