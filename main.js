var mul = require('./mul')
var grade = require('./avg.js')
var area = require('./area.js')
var baht = require('./baht.js')
var age = require('./age.js')
var i = 1,
	width,
	heigh

let stdin = process.openStdin()
console.log('Enter Number For Multiply : ')

stdin.addListener('data', temp => {
	if (i == 1) {
		mul.table(temp)

		console.log('\n******************************************\n')

		console.log('Enter Your Score : ')
	} else if (i == 2) {
		console.log('Your Grade is ' + grade.avg(temp))
		console.log('')
		console.log('\n******************************************\n')

		console.log('Enter 2 Value for Square Area !')
		console.log('Enter your value width : ')
	} else if (i == 3) {
		width = temp

		console.log('Enter your value height : ')
	} else if (i == 4) {
		heigh = temp
		console.log('Square Area is ' + area.calArea(width, heigh) + ' cm2')
		console.log('\n******************************************\n')
		console.log('Enter your MoneyDollar : ')
	} else if (i == 5) {
		console.log('Your Dollar :' + baht.exchange(temp), ' Baht')
		console.log('\n******************************************\n')
		console.log('Enter your Age : ')
	} else if (i == 6) {
		console.log('Your are ' + age.calAge(temp))

		stdin.destroy()
	}
	i++
})
