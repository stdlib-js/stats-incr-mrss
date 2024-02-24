<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmrss

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [residual sum of squares][residual-sum-of-squares] (RSS) incrementally.

<section class="intro">

For a window of size `W`, the [residual sum of squares][residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="\operatorname{RSS} = \sum_{i=0}^{W-1} (y_i - x_i)^2" alt="Equation for the residual sum of squares."> -->

```math
\mathop{\mathrm{RSS}} = \sum_{i=0}^{W-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{RSS} = \sum_{i=0}^{W-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@df44d1456cc422c38a368a47b586b7eaffb19cc8/lib/node_modules/@stdlib/stats/incr/mrss/docs/img/equation_residual_sum_of_squares.svg" alt="Equation for the residual sum of squares.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmrss from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrss@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-mrss/tags). For example,

```javascript
import incrmrss from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrss@v0.2.1-esm/index.mjs';
```

#### incrmrss( window )

Returns an accumulator `function` which incrementally computes a moving [residual sum of squares][residual-sum-of-squares]. The `window` parameter defines the number of values over which to compute the moving [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrmrss( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [residual sum of squares][residual-sum-of-squares]. If not provided input values `x` and `y`, the accumulator function returns the current [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrmrss( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

r = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns 26.0

r = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns 62.0

// Window begins sliding...
r = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns 161.0

r = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns 140.0

r = accumulator();
// returns 140.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import incrmrss from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrss@esm/index.mjs';

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmrss( 5 );

// For each simulated datum, update the moving residual sum of squares...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/rss`][@stdlib/stats/incr/rss]</span><span class="delimiter">: </span><span class="description">compute the residual sum of squares (RSS) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmse`][@stdlib/stats/incr/mmse]</span><span class="delimiter">: </span><span class="description">compute a moving mean squared error (MSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mrmse`][@stdlib/stats/incr/mrmse]</span><span class="delimiter">: </span><span class="description">compute a moving root mean squared error (RMSE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mrss.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mrss

[test-image]: https://github.com/stdlib-js/stats-incr-mrss/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-incr-mrss/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mrss/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mrss?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mrss.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mrss/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mrss/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mrss/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mrss/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mrss/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mrss/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mrss/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mrss/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mrss/main/LICENSE

[residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

<!-- <related-links> -->

[@stdlib/stats/incr/rss]: https://github.com/stdlib-js/stats-incr-rss/tree/esm

[@stdlib/stats/incr/mmse]: https://github.com/stdlib-js/stats-incr-mmse/tree/esm

[@stdlib/stats/incr/mrmse]: https://github.com/stdlib-js/stats-incr-mrmse/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
