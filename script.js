function reverseString(str) {
    var listOfChars = str.split('');
    var listOFReverseChar = listOfChars.reverse();
    var reversedString = listOFReverseChar.join('');
    return reversedString;
}

function isPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
}


function getDateAsString(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString()
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString()
    }

    dateStr.year = date.year.toString();

    return dateStr
}