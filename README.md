# gulp-hieroglyphy

[![Greenkeeper badge](https://badges.greenkeeper.io/kex3/gulp-hieroglyphy.svg)](https://greenkeeper.io/)

* Ever wanted to turn your code into a sequence of `[]`, `{}`, `!` and `+`?
* Ever wanted it integrated into your gulp chain?

Now you can has!

```JavaScript
import hieroglyphy from 'gulp-hieroglyphy';

//[... gulp goes here...]
	.pipe(hieroglyphy()) // <-- that's it!
//[... more gulp goes here...]
```