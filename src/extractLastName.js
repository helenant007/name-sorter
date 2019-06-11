function validateName(names) {
    if (names.length < 2 || names.length > 4) return false;

    return true;
}

function extractLastName(fullName) {
    const names = fullName.split(" ");
    const isValid = validateName(names);

    if (!isValid) {
        throw new Error(`This name is not valid: ${fullName}`);
    }

    const lastName = names[names.length - 1];

    return lastName;
}

module.exports = extractLastName;
