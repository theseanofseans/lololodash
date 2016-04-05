
/*
 9: Start templating
 Exercise 9 of 9


# Start templating

Do you remember the Utilities Functions I told you about a few
exercises before? Now it's time for them:
Let's do a little bit of templating!

-------------------------------------------------------------------------------

## Lead the Way

For this mission, let me show you the template function.
_.template() gives you access to simple and powerful micro-templating
with Lo-Dash.

    _.template(text)(data)

template uses your text-var as a template and returns interpolated
text with your data.
In your template you can use <%= VARNAME %> to print a variable.

#### Example

    _.template('<b><%= value %></b>')({ value: 'attention' });
    
    // '<b>attention</b>'

-------------------------------------------------------------------------------

## Your Mission

To get started, use the template() function to interpolate
a simple var for us:

    { name: "Foo",
      login: [ 1407574431, 140753421 ]
    }

We want a simple string greeting the user by name and showing the
number of times the user has logged in (every timestamp represents
one login). Your function should return a String like this:

    Hello Foo (logins: 2)

#### Template

All of your solutions should follow this template:

    // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function( arguments ) {
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
	var text= "Hello <%= name %> (logins: <%= num_logins %>)";
	var data= {
		name: obj.name ,
		num_logins: _.size( obj.login )
	};
	return _.template(text)(data);
};

module.exports = worker;

