const prime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime( isPalindrome = (num) => {
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
}));
console.log(isPalindrome((48899)));