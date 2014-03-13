# CSS Selectors in jQuery
## Often used Selectors

|Selector | What is selected |
|("*") | All elements |
|(".class")| All elements with class="class"|
|("#id")| All elements with id="id"|
|("element")| All elements with the given tag name|

[More selectors in jQuery](http://api.jquery.com/category/selectors/)


## Using Selectors

```
/* class="myclass" gets a red border */
$( ".myClass" ).css( "border", "3px solid red" );

/* id="target" gets a onClick function */
$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});


/* .html() and .text() */ 
<pre>&lt;p&gt;This is a test.&lt;/p&gt;</pre>

$("pre").text()
"<p>This is a test.</p>"

$("pre").html()
"&lt;p&gt;This is a test.&lt;/p&gt;"


/* Retrive and set attribute of element */
<input id="check1" type="checkbox" checked="checked">
$("#check1").attr('checked', true)
$("#check1").attr('checked')
=> undefined

$("#check1").attr('checked', true)
$("#check1").attr('checked')
=>"checked"
```
