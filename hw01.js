import colors from 'colors'

const [firstNum, lastNum] = process.argv.slice(2).map((item) => parseInt(item))

if (isNaN(firstNum) || isNaN(lastNum)) {
  console.error(
    colors.bgRed('аргумент, переданный при запуске, не считается числом')
  )
  process.exit(0)
}

const { bgGreen, bgYellow, bgBlue } = colors
const collection = [bgGreen, bgYellow, bgBlue]
let ind = 0
const colorPrint = (num) => {
  console.log(collection[ind](num))
  if (ind === collection.length - 1) {
    ind = 0
  } else {
    ind++
  }
}

const simpleNumbers = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i * 2 <= i; i++) {
    if (num % i === 0) return false
  }
  return true
}
// console.log(simpleNumbers(firstNum))

// let flag = false
// let i = lastNum
// while (i <= firstNum) {
//   if (simpleNumbers) {
//     colorPrint(i)
//     flag = true
//   }
// }

// if (!flag) {
//   console.log('простых чисел в диапазоне нет')
// }
