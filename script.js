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

function getDateInAllFormats(date) {

    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeForAllFormats(date) {
    var listOfDateFormat = getDateInAllFormats(date);
    var palindromeList = [];
    for (var i = 0; i < listOfDateFormat.length; i++) {
        var result = isPalindrome(listOfDateFormat[i])
        palindromeList.push(result);
    }
    return palindromeList;
}

function leapYear(year) {
    if (year % 400 === 0)
        return true;

    if (year % 100 === 0)
        return false;

    if (year % 4 === 0)
        return true;

    return false;
}