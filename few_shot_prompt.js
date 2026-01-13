function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[\s_-]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}

// Test cases
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber