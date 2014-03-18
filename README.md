Programming in HTML5 with JavaScript and CSS3
======

# Links
* [Microsoft Seite zur Zertifizierung](http://www.microsoft.com/learning/en-us/exam-70-480.aspx)
* [Training Guide: Programming in HTML5 with JavaScript and CSS3](http://shop.oreilly.com/product/0790145371133.do)
* [HTML5 and CSS3 (2nd edition)](http://pragprog.com/book/bhh52e/html5-and-css3)
* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)
* [Measure Up 70-480 Traing](http://www.measureup.com/70-480-Programming-in-HTML5-with-JavaScript-and-CSS3-P4900.aspx)
* [Study Notes from @adnanmasood](http://blog.adnanmasood.com/2012/12/15/study-notes-for-70-480-programming-html5-and-css-3-microsoft-exam/comment-page-1/)

# Skills measured

## Implement and manipulate document structures and objects (24%)

### Create the document structure
* [Structure the UI by using semantic markup, including for search engines and screen readers (Section, Article, Nav, Header, Footer, and Aside)](./HTML5/ui_structure_with_aria.html)
* [create a layout container in HTML](./HTML5/ui_structure_with_aria.html)


### Write code that interacts with UI controls
* [Programmatically add and modify HTML elements](./JavaScript/add_html_elements.html)
* [implement media controls](./HTML5/media_controls.html)
* [implement HTML5 canvas](./HTML5/canvas.html) 
* [implement SVG graphics](./HTML5/svg.html)


### Apply styling to HTML elements programmatically
* [Change the location of an element](./CSS/transform_elements.html)
* [apply a transform](./CSS/transform_elements.html)
* [show and hide elements](./CSS/transform_elements.html)


### Implement HTML5 APIs
* [Implement storage APIs ](./HTML5/storage.html)
* [AppCache API and ](http://www.html5rocks.com/de/tutorials/appcache/beginner/)
* [Geolocation API](./HTML5/geolocation.html)


### Establish the scope of objects and variables
* [Define the lifetime of variables](http://stackoverflow.com/questions/762011/javascript-let-keyword-vs-var-keyword)
* [keep objects out of the global namespace](http://www.jimmycuadra.com/posts/organizing-javascript-with-namespaces-and-function-prototypes)
* [use the “this” keyword to reference an object that fired an event](https://learn.jquery.com/javascript-101/this-keyword/)
* [scope variables locally and globally](http://stackoverflow.com/questions/762011/javascript-let-keyword-vs-var-keyword)


### Create and implement objects and methods
* [Implement native objects](http://msdn.microsoft.com/en-us/library/zbbaddzd(v=vs.94).aspx)
* [create custom objects and custom properties for native objects using prototypes and functions](http://msdn.microsoft.com/en-us/library/hh924508(v=vs.94).aspx)
* [inherit from an object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [implement native methods and create custom methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)



## Implement  program flow (25%)

### Implement program flow
* [Iterate across collections](http://msdn.microsoft.com/en-us/library/dn479050(v=vs.94).aspx) and [array items](http://msdn.microsoft.com/en-us/library/5kh4af6c(v=vs.94).aspx)
* [manage program decisions by using switch statements](http://msdn.microsoft.com/de-de/library/hzc6t81t(v=vs.94).aspx), [if/then](http://www.tutorialspoint.com/javascript/javascript_ifelse.htm)
* [evaluate expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)


### Raise and handle an event
* [Handle common events exposed by DOM (OnBlur, OnFocus, OnClick)](./JavaScript/common_events.html)
* [declare and handle bubbled events](http://javascript.info/tutorial/bubbling-and-capturing)
* [handle an event by using an anonymous function](./JavaScript/common_events.html)


### Implement exception handling
* [Set and respond to error codes](http://www.tutorialspoint.com/javascript/javascript_error_handling.htm)
* [throw an exception](http://msdn.microsoft.com/de-de/library/85fscz6h(v=vs.94).aspx)
* [request for null checks](http://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined)
* [implement try-catch-finally blocks](http://msdn.microsoft.com/de-de/library/4yahc5d8(v=vs.94).aspx)


### Implement a callback
* [Receive messages from the HTML5 WebSocket API](http://www.tutorialspoint.com/html5/html5_websocket.htm) [2nd example](http://www.html5rocks.com/de/tutorials/websockets/basics/)
* [use jQuery to make an AJAX call](./JavaScript/ajax.html)
* [wire up an event](./JavaScript/ajax.html)
* [implement a callback by using anonymous functions](./JavaScript/ajax.html)
* [handle the “this” pointer](./HTML5/storage.html)


### Create a web worker process
* [Start and stop a web worker](http://www.html5rocks.com/de/tutorials/workers/basics/)
* [pass data to a web worker](http://www.html5rocks.com/de/tutorials/workers/basics/)
* [configure timeouts and intervals on the web worker](http://www.html5rocks.com/de/tutorials/workers/basics/)
* [register an event listener for the web worker](http://www.html5rocks.com/de/tutorials/workers/basics/)
* [limitations of a web worker](http://www.html5rocks.com/de/tutorials/workers/basics/)




## Access and secure data (26%)

### Validate user input by using HTML5 elements
* [Choose the appropriate controls based on requirements](./HTML5/form.html)
* [implement HTML input types and content attributes (for example, required) to collect user input](./HTML5/form.html)


### Validate user input by using JavaScript
* [Evaluate a regular expression to validate the input format](http://msdn.microsoft.com/en-us/library/h6e2eb7w(v=vs.94).aspx)
* [validate that you are getting the right kind of data type by using built-in functions](http://msdn.microsoft.com/en-us/library/259s7zc1(v=VS.94).aspx)
* [prevent code injection](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet) ([and more](http://blog.stackoverflow.com/2008/06/safe-html-and-xss/))


### Consume data
* [Consume JSON and XML data](./JavaScript/ajax.html)
* [retrieve data by using web services](./JavaScript/ajax.html)
* [load data or get data from other sources by using XMLHTTPRequest](http://msdn.microsoft.com/en-us/library/ie/ms535874(v=vs.85).aspx)


### Serialize, deserialize, and transmit data
* [Binary data](http://msdn.microsoft.com/en-us/library/ie/hh673569(v=vs.85).aspx#Binary_Object_upload_and_download)
* [text data (JSON, XML)](http://msdn.microsoft.com/en-us/library/ie/hh872882(v=vs.85).aspx)
* [implement the jQuery serialize method](http://api.jquery.com/serialize/)
* [Form.Submit](http://msdn.microsoft.com/en-us/library/ie/ms536771%28v=vs.85%29.aspx)
* [parse data ](http://msdn.microsoft.com/en-us/library/cc836466(v=vs.94).aspx)
* [send data by using XMLHTTPRequest](http://msdn.microsoft.com/en-us/library/ie/ms535874(v=vs.85).aspx)
* [sanitize input by using URI/form encoding](http://msdn.microsoft.com/en-us/library/aeh9cef7%28v=vs.94%29.aspx)


## Use CSS3 in applications (25%)

### Style HTML text properties
* [Apply styles to text appearance (color, bold, italics)](./CSS/textmodifications.html)
* [apply styles to text font (WOFF and @font-face, size)](./CSS/woff.html)
* [apply styles to text alignment, spacing, and indentation](./CSS/textmodifications.html)
* [apply styles to text hyphenation](./CSS/textmodifications.html)
* [apply styles for a text drop shadow](./CSS/shadow.html)


### Style HTML box properties
* [Apply styles to alter appearance attributes (size, border and rounding border corners, outline, padding, margin)](./CSS/boxes.html)
* [apply styles to alter graphic effects (transparency, opacity, background image, gradients, shadow, clipping)](./CSS/shadow.html)
* [apply styles to establish and change an element’s position (static, relative, absolute, fixed)](./CSS/boxes.html)


### Create a flexible content layout
* [Implement a layout using a flexible box model](http://coding.smashingmagazine.com/2011/09/19/css3-flexible-box-layout-explained/) [and here](http://coding.smashingmagazine.com/2013/05/22/centering-elements-with-flexbox/)
* [implement a layout using multi-column](http://www.inserthtml.com/2012/01/css3-multi-column-layout-implementation-change-website-design/)
* [implement a layout using position floating and exclusions](http://msdn.microsoft.com/en-us/library/ie/hh673558(v=vs.85).aspx)
* [implement a layout using grid alignment](http://msdn.microsoft.com/en-us/library/ie/hh673533(v=vs.85).aspx)
* [implement a layout using regions, grouping, and nesting](http://msdn.microsoft.com/en-us/library/ie/hh673537(v=vs.85).aspx)


### Create an animated and adaptive UI
* [Animate objects by applying CSS transitions](./CSS/transform_elements.html)
* [apply 3-D and 2-D transformations](http://desandro.github.io/3dtransforms/)
* [adjust UI based on media queries (device adaptations for output formats, displays, and representations)](./HTML5/media_query.html)
* [hide or disable controls](./CSS/transform_elements.html)


### Find elements by using CSS selectors and jQuery
* [Choose the correct selector to reference an element](./CSS/CSS_selectors_in_jQuery.md)
* [define element, style, and attribute selectors](./CSS/CSS_selectors_in_jQuery.md)
* [find elements by using pseudo-elements and pseudo-classes (for example, :before, :first-line, :first-letter, :target, :lang, :checked, :first-child)](./CSS/tablelayout.html)


### Structure a CSS file by using CSS selectors
* [Reference elements correctly](http://www.htmlhelp.com/reference/css/structure.html)
* [implement inheritance](./CSS/inherit.html)
* [override inheritance by using !important](./CSS/inherit.html)
* [style an element based on pseudo-elements and pseudo-classes (for example, :before, :first-line, :first-letter, :target, :lang, :checked, :first-child)](./CSS/tablelayout.html)

