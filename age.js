module.exports.calAge = age => {
	var result

	if (age < 15) {
		result = 'Child'
	} else if (age > 15 && age < 26) {
		result = 'Teen'
	} else if (age > 26 && age < 60) {
		result = 'Adult'
	} else {
		result = 'Old'
	}

	return result
}
