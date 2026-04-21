const { isValidES3Identifier } = require("@babel/types");
const test = require("node:test");


function greet(name){
    return name || "Guest";
}

test('returns Guest when name is empty', () => {
    //Arrange
    const name = "Akirachix";
    //Act
    const result = greet(name);
    //Assert
    expect(result).toBe("Akirachix");
});

function toogle (value) {
    return !value;
}

test('toogles boolean value', () =>{
    //Arrange
    const input= 12;
    //Act
    const result = toogle(value);
    //Assert
    expect(result).toBe(false);
});

function addItem(arr, item) {
    arr.push(item);
    return arr;
}

test('adds item to array', () => {
    //Arrange
    const arr = [1,2,3,4];
    //Act
    const result= addItem(arr, 5);
    //Assert
    expect(result).toEqual([1,2,3,4,5]);
});

function removeItem(arr, item){
    return arr.filter(i => i !== item);
}

test('removes item from array', () => {
    //Arrange
    const arr =[1,2,3,4] ;
    //Act
    const result = removeItem(arr, 4);
    //Assert
    expect(result).toEqual([1,2,3]);
});

function isValidPassword(password){
    return password.length >= 6;
}

test('returns true for valid password length', () => {
    //Arrange
    const password = "jdoe";
    //Act
    const result= isValidPassword(password);
    //Assert
    expect(result).toBe(false);
});

//stage3
function isValidPassword(password){
    return password.boundary >= 6 || password.boundary <= 15;
}

test('returns true for valid password boundary', () => {
    //Arrange
    const password= 1234;
    //Act
    const result = isValidPassword(password);
    //Assert
    expect(result).toBe(false);
});

function isValidPassword(password){
    return password.boundary >=4 || password.boundary <=8;
}

test('returns false for an invalid password boundary', () => {
    //Arrange
    const password = Jayson-Wrathson;
    //Act
    const result = isValidPassword(password);
    //Assert
    expect(result).toBe(false);
});

function passwordContainsCaps(password){
    return password.includes(caps);
}
test('ckecks if password contains upper case', () => {
    //Arrange
    const password = Quilfer;
    //Act
    const result = passwordContainsCaps(password);
    //Assert
    expect(result).toBe(true);
});

function passwordContainsCaps(password){
    return password.includes(caps);
}
test('ckecks if password contains lower case', () => {
    //Arrange
    const password = QUILFER;
    //Act
    const result = passwordContainsCaps(password);
    //Assert
    expect(result).toBe(false);
});

function isValidPassword(password){
    return password.length >= 6;
}

test('returns false for valid password length', () => {
    //Arrange
    const password = "jdoe";
    //Act
    const result= isValidPassword(password);
    //Assert
    expect(result).toBe(true);
});


function containsWord(sentence, word) {
    return sentence.includes(word);
}
test('returns true if sentence contains a word', () => {
    //Arrange
    const sentence = "I am a girl ";
    //Act
    const result = containsWord(sentence, "girl");
    //Assert
    expect(result).toBe(true);
});

function containsWord(sentence, word) {
    return sentence.includes(word);
}
test('returns false if sentence contains a word', () => {
    //Arrange
    const sentence = "I am a girl ";
    //Act
    const result = containsWord(sentence, "boy");
    //Assert
    expect(result).toBe(false);
});

function containsWord(sentence, word) {
    return sentence.includes(word);
}
test('checks if sentence contains an empty space', () => {
    //Arrange
    const sentence = " ";
    //Act
    const result = containsWord(sentence, "boy");
    //Assert
    expect(result).toBe(true);
});

function containsWord(sentence, word) {
    return sentence.includes(word);
}
test('checks if sentence is case sensitive', () => {
    //Arrange
    const sentence = "I am a girl";
    //Act
    const result = containsWord(sentence, "Girl");
    //Assert
    expect(result).toBe(true);
});

function containsWord(sentence, word) {
    return sentence.includes(word);
}
test('checks if word is the entire sentence', () => {
    //Arrange
    const sentence = "I am a girl";
    //Act
    const result = containsWord(sentence, "girl");
    //Assert
    expect(result).toBe(false);
});


function addItem(arr, item) {
    arr.push(item);
    return arr;
}
test('checks if item can be added to the array', () => {
    //Arrange
    const arr = [1,2];
    //Act
    const result = addItem(arr, 3);
    //Assert
    expect(result).toBe([1,2,3]);
});

function addItem(arr, item) {
    arr.push(item);
    return arr;
}
test('checks if different item can be added to the array', () => {
    //Arrange
    const arr = [1,2];
    //Act
    const result = addItem(arr, "15");
    //Assert
    expect(result).toBe("error");
});

function addItem(arr, item) {
    arr.push(item);
    return arr;
}
test('checks if item can be added to an empty array', () => {
    //Arrange
    const arr = [];
    //Act
    const result = addItem(arr, 3);
    //Assert
    expect(result).toBe([3]);
});

function addItem(arr, item) {
    arr.push(item);
    return arr;
}
test('checks if the array is ordered', () => {
    //Arrange
    const arr = [1,3];
    //Act
    const result = addItem(arr, 2);
    //Assert
    expect(result).toBe([1,2,3]);
});

function addItem(arr, item) {
    arr.push(item);
    return arr;
}
test('checks if multiple items can be aded to the array', () => {
    //Arrange
    const arr = [1,2,3];
    //Act
    const result = addItem(arr, [3,4,5]);
    //Assert
    expect(result).toBe([1,2,5,4,5]);
});