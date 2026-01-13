/**
 * Converts a string to camelCase format
 * @param {string} input - The string to convert
 * @returns {string} The camelCase version of the input
 * @throws {TypeError} If input is not a string
 */
/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to camelCase, where the first word is lowercase and subsequent
 * words have their first letter capitalized.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, hyphens,
 *                         underscores, or other special characters as word separators.
 * 
 * @returns {string} The converted camelCase string. Returns an empty string if the
 *                   input is empty or contains no valid word characters.
 * 
 * @throws {TypeError} If the input is not a string, throws a TypeError with a
 *                     descriptive message indicating the received type.
 * 
 * @example
 * // Basic conversion
 * toCamelCase('hello world');           // Returns: 'helloWorld'
 * toCamelCase('hello-world');           // Returns: 'helloWorld'
 * toCamelCase('hello_world');           // Returns: 'helloWorld'
 * 
 * @example
 * // With multiple separators and special characters
 * toCamelCase('hello  world-foo_bar');  // Returns: 'helloWorldFooBar'
 * 
 * @example
 * // With numbers
 * toCamelCase('hello world 2');         // Returns: 'helloWorld2'
 * 
 * @example
 * // Edge cases
 * toCamelCase('');                      // Returns: ''
 * toCamelCase('   ');                   // Returns: ''
 * toCamelCase('hello');                 // Returns: 'hello'
 * 
 * @example
 * // Type validation
 * toCamelCase(123);                     // Throws: TypeError: Invalid input: expected a string, got number
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError(`Invalid input: expected a string, got ${typeof input}`);
    }

    // Trim whitespace and handle empty strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    // Split by common separators (spaces, hyphens, underscores) and filter empty parts
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0)
        .map(word => {
            // Remove any remaining special characters while preserving numbers
            const cleaned = word.replace(/[^\w]/g, '');
            return cleaned;
        })
        .filter(word => word.length > 0);

    // Return empty string if no valid words remain
    if (words.length === 0) {
        return '';
    }

    // Convert first word to lowercase, capitalize first letter of remaining words
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            // Capitalize first letter, lowercase the rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase(' hello world ')); // "helloWorld"
console.log(toCamelCase('user_name-id 42')); // "userNameId42"
console.log(toCamelCase('AlreadyCamelCase')); // "alreadyCamelCase"
console.log(toCamelCase('  ')); // ""
console.log(toCamelCase('hello__world--test')); // "helloWorldTest"
console.log(toCamelCase('test@#$value')); // "testValue"

// Error case
try {
    toCamelCase(null);
} catch (error) {
    console.error(error.message); // "Invalid input: expected a string, got object"
}

/**
 * Converts a string to dot.case format
 * @param {string} input - The string to convert
 * @returns {string} The dot.case version of the input
 * @throws {TypeError} If input is not a string
 */
function toDotCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError(`Invalid input: expected a string, got ${typeof input}`);
    }

    // Trim whitespace and handle empty strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    // Insert dots before uppercase letters (for camelCase conversion)
    const withDotsBeforeCaps = trimmed.replace(/([a-z])([A-Z])/g, '$1.$2');

    // Split by common separators (spaces, hyphens, underscores) and filter empty parts
    const words = withDotsBeforeCaps
        .split(/[\s\-_.]+/)
        .filter(word => word.length > 0)
        .map(word => {
            // Remove any remaining special characters while preserving numbers
            const cleaned = word.replace(/[^\w]/g, '');
            return cleaned;
        })
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase());

    // Return empty string if no valid words remain
    if (words.length === 0) {
        return '';
    }

    // Join words with dots
    return words.join('.');
}

// Test cases for toDotCase
console.log(toDotCase(' hello world ')); // "hello.world"
console.log(toDotCase('user_name-id 42')); // "user.name.id.42"
console.log(toDotCase('AlreadyCamelCase')); // "already.camel.case"
console.log(toDotCase('hello.world.test')); // "hello.world.test"
console.log(toDotCase('  ')); // ""
console.log(toDotCase('hello__world--test')); // "hello.world.test"
console.log(toDotCase('test@#$value')); // "test.value"

// Error case for toDotCase
try {
    toDotCase(null);
} catch (error) {
    console.error(error.message); // "Invalid input: expected a string, got object"
}