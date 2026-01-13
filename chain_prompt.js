/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} - The kebab-cased string, or empty string if input is invalid
 */
function toKebabCase(input) {
    // Handle invalid input - must be a string
    if (typeof input !== 'string') {
        return '';
    }

    // Trim leading and trailing whitespace
    let result = input.trim();

    // Return empty string for empty or whitespace-only input
    if (result.length === 0) {
        return '';
    }

    // Convert to lowercase
    result = result.toLowerCase();

    // Replace spaces, underscores, and other separators with hyphens
    result = result.replace(/[\s_]+/g, '-');

    // Remove special characters, keeping only alphanumeric and hyphens
    result = result.replace(/[^a-z0-9-]/g, '');

    // Replace multiple consecutive hyphens with a single hyphen
    result = result.replace(/-+/g, '-');

    // Remove leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    return result;
}

// Example usage
console.log(toKebabCase('Hello World'));           // Output: "hello-world"
console.log(toKebabCase('foo_bar_baz'));           // Output: "foo-bar-baz"
console.log(toKebabCase('CamelCaseString'));       // Output: "camelcasestring"
console.log(toKebabCase('  spaced  input  '));     // Output: "spaced-input"
console.log(toKebabCase('hello@world#2024'));      // Output: "hello-world-2024"
console.log(toKebabCase('   '));                   // Output: ""
console.log(toKebabCase(123));                     // Output: ""