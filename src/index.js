module.exports = function toReadable(number) {
    if (number === 0) return 'zero'
    const digits = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const lessThenTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']
    const tenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    if (number < 10) return digits[number];
    if (number < 20) return lessThenTwenty[number - 10];
    if (number < 100) return `${tenths[Math.floor(number / 10)]} ${digits[number % 10]}`.trim();
    if (number < 1000) {
        const readable = `${digits[Math.floor(number / 100)]} hundred`;
        if (number % 100 === 0) {
            return readable
        } else return `${digits[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`.trim()
    }
}
