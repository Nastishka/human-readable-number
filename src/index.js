const ZERO = 'zero';
const FIRST_NINETEEN_NUMBERS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const DOZENS = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const LARGE_NUMBERS = ['hundred'];

/*Parse numbers from 1 to 999*/
function parseNumber(number, level) {
    let result = '';
    switch (level) {
    case 0:
        result = FIRST_NINETEEN_NUMBERS[number];
        break;
    case 1: 
        result = DOZENS[number - 1];
        break;
    case 2:
        let firstNumber = FIRST_NINETEEN_NUMBERS[number];
        let secondNumber = LARGE_NUMBERS[level - 2];
        result = `${firstNumber} ${secondNumber}`;
        break;
    } 
    return result;
}

module.exports = function toReadable(number) {
    if (Number.isInteger(number)) {
        if (number == 0) {
            return ZERO;
        }

        let numbers = number.toString().split('').reverse();
        // combine two last digits into one number in the interval from 10 to 19
        if (numbers.length > 1 && numbers[1] == 1) {
            numbers[0] = numbers[1] + numbers[0];
            numbers[1] = "0";
        }
        let words = numbers.map((currentValue, index) => parseNumber(currentValue, index));
        return words.filter(Boolean).reverse().join(' ');
    }
    return 'Not an integer';
}
