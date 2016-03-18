
/*
 2: Sort Me
 Exercise 2 of 9


# Sort Me

Sorting a Array or JSON data is sometimes very painful in Javascript.
Lo-Dash helps you with that.

-------------------------------------------------------------------------------

## The Fixer

Let me introduce to you the sortBy function:

    _.sortBy(collection, [callback=identity])

The sortBy function sorts the collection object (an Array of Objects, of primitive
types, or a mix of both) using the callback (as an Array, function, Object or String)
each iteration.

#### Example

    _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
    
    // → [3, 1, 2]

If callback is a function, it will be called as callback(value, index|key, collection).
Like most of the Lo-Dash functions, sortBy can also used with the
".pluck" callback shorthand ([http://lodash.com/docs#pluck](http://lodash.com/docs#pluck)).

    var characters = [
      { 'name': 'barney',  'age': 36 },
      { 'name': 'fred',    'age': 40 },
      { 'name': 'barney',  'age': 26 },
      { 'name': 'fred',    'age': 30 }
    ];
    
    _.sortBy(characters, 'age');
    
*/
    /*
    [
        { name: 'barney', age: 26 },
        { name: 'fred',   age: 30 },
        { name: 'barney', age: 36 },
        { name: 'fred',   age: 40 }
    ]
    */
/*

Attention: sortBy will always sort ascendingly, from smallest to largest!

-------------------------------------------------------------------------------

## Your Mission

We have an Array of items sold yesterday like this:

    [{ article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }]

Please write a function that will sort these items by quantity from largest to smallest.

  > 
  > #### Hint
  > 
  > Because `sortBy` only sorts from smallest to largest you may need to use the callback function.

#### Template

All of your solutions should follow this template:

    // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(args) {
        // do work; return stuff
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;

lololodash will call your function and test it with different arguments.


 » To print these instructions again, run: lololodash print
 » To execute your program in a test environment, run: lololodash run program.js
 » To verify your program, run: lololodash verify program.js
 » For help run: lololodash help
*/

var _ = require("lodash");
    
var worker = function(sold) {
	return _.sortBy(sold, function(item) { return -1 * item.quantity; });
};

module.exports = worker;

