# Selected CSS 3 text-* Properties

For all the CSS 3 properties that are not so clear to me ...


## text-decoration (Textdekoration)

**Syntax:** `text-decoration: none|underline|overline|line-through|initial|inherit;`


| Value        | Description                                    |
|--------------|------------------------------------------------|
| none         | (default) normal text (on links: no underline) |
| underline    | line below the text                            |
| overline     | line above the text                            |
| line-through | line through the text                          |
| blink        | text is blinking |
| inherit      | inherits this property from its parent element |



## text-indent (Texteinrückung)

**Syntax:** `text-indent: length|initial|inherit;`

| Value        | Description                                    |
|--------------|------------------------------------------------|
| length [abs] | fixed indentation in px, pt, cm, em, etc. (default: 9) |
| lenght [%]   | indentation in % of parent element width |
| initial      | sets this property to its default value        |
| inherit      | inherits this property from its parent element |



## text-shadow (Textschatten)

**Syntax:** `text-shadow: hori-shadow ver-shadow blur color|none|initial|inherit;`

| Value        | Description                                    |
|--------------|------------------------------------------------|
| hori-shadow | **Required** position of horizontal shadow (Negative values allowed) | 
| ver-shadow | **Required**. position of vertical shadow (Negative values allowed) | 
| blur | (Optional) blur distance |
| color | (Optional) shadow color | 
| none | (default) No shadow |
| initial      | sets this property to its default value        |
| inherit      | inherits this property from its parent element |

**Examples**
```
#myH1
{
text-shadow:-10px -10px red;
}
#myH1
{
text-shadow:5px 5px 10px #00FF00;
}
```



## text-transform (Gross/Kleinschreibung)

**Syntax:** `text-transform: none|capitalize|uppercase|lowercase|initial|inherit;`

| Value        | Description                                    |
|--------------|------------------------------------------------|
| none | (default) No change |
| capitalize | First Character Of Each Word To Uppercase | 
| uppercase | All characters to uppercase | 
| lowercase | All characters to lowercase |
| initial      | sets this property to its default value        |
| inherit      | inherits this property from its parent element |



## text-overflow ()

**Syntax:** `text-overflow: clip|ellipsis|string|initial|inherit;`

| Value        | Description                                    |
|--------------|------------------------------------------------|
| clip | (default) Clips the text at "box" end |
| ellipsis | Render an ellipsis ("...") to represent clipped text |
| string | Render the given string to represent clipped text |
| initial      | sets this property to its default value        |
| inherit      | inherits this property from its parent element |

