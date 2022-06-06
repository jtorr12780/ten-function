"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input){
    return input === true;
}

function isFalse(value){
    return value === false;
}

function not(input){
    return !input;
}

function addOne(input){
    if (input == Infinity)
        { return Infinity} else {
             input= parseInt(input) + 1;
             return input;
    }

}

function isEven(number){
    if (false)
    {return false;}
   else if(number % 2 === 0)
    {return true;} else
    {return false;}
}

function isIdentical(a, b){
    if (a === b)
        return true;
        return false;
}

function isEqual(a, b){
    if (a == b) {
        return true;
    }
    else {   return false;
    }
}

function or(a, b){
    return a || b;
}

function and(a, b){
    return a && b;
}

function concat(a, b){ return a.toString()+ b.toString()}

