
/*
 6: Count the Comments
 Exercise 6 of 9


# Count the Comments

All functions of Lo-Dash are very helpful, but now let me show you one
of my favorites: the groupBy function.

-------------------------------------------------------------------------------

## Come In For a Huddle

    _.groupBy(collection, [callback=identity])

Creates an object composed of keys generated from the results of running
each element of a collection Object through callback. The corresponding
value of each key is an array of the elements for which the key was generated.

#### Example

    _.groupBy(
        [4.2, 6.1, 6.4],
        function(num)
        {
            return Math.floor(num);
        }
    );
    
    // { '4': [4.2], '6': [6.1, 6.4] }
    
    // using the ".pluck" callback shorthand...
    _.groupBy(
        [
            {name: 'mike', age: 23},
            {name: 'mike', age: 41},
            {name: 'tom',  age: 19}
        ],
        'name'
    );
    
    
//    {
//        'mike': [
//            {name: 'mike', age: 23},
//            {name: 'mike', age: 41}
//        ],
//        'tom': [
//            {name: 'tom', age: 19}
//        ]
//    }
    

Another helper function I use often is size.

     _.size(collection)

size gets the size of collection by returning array.length for Arrays
and Array-like Objects or the number of owned enumerable properties for Objects.

#### Example

    _.size([1, 2]);
    // 2
    
    _.size({ 'one': 1, 'two': 2, 'three': 3 });
    // 3
    
    _.size('pebbles');
    // 7

-------------------------------------------------------------------------------

## Your Mission

We have an array of comments from the website:

    [
        { username: "tim", comment: "you are doing a great job!" },
        { username: "tim", comment: "when you have new workshoppers?" },
        { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
        { username: "max", comment: "where have you been on friday? we missed you!" },
        { username: "max", comment: "You don't answer anymore - why?" },
        { username: "cat_lover", comment: "MORE cats!!!" },
        { username: "max", comment: "i really love your site" }
    ]

I want to know how to post the most comments without repeating the same user,
so please write a function that:

  * Counts the comments by `username`.
  * Sorts the return array by the total comment count of each user.  

    [ { username: "foo",    comment_count: 9 },
      { username: "foobar", comment_count: 2 } ]

#### Template

All of your solutions should follow this template:

    // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(obj) {
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
    
var worker = function(obj) {
	return _.chain(obj).groupBy( 'username' )
	.map( function(value,key) {
		return { username: key , comment_count: _.size(value) };
	})
	.sortBy(function(item) { return -1 * item.comment_count; })
	.value();
};
    
module.exports = worker;

