/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var incrmsum = require( '@stdlib/stats-incr-msum' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving residual sum of squares.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmrss( 3 );
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 50.0
*
* r = accumulator( 3.0, 2.0 );
* // returns 51.0
*
* r = accumulator( 5.0, -2.0 );
* // returns 99.0
*
* r = accumulator();
* // returns 99.0
*/
function incrmrss( W ) {
	var sum;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	sum = incrmsum( W );
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated residual sum of squares. If not provided input values, the accumulator function returns the current residual sum of squares.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} residual sum of squares or null
	*/
	function accumulator( x, y ) {
		var r;
		if ( arguments.length === 0 ) {
			return sum();
		}
		r = y - x;
		return sum( r*r );
	}
}


// EXPORTS //

module.exports = incrmrss;
