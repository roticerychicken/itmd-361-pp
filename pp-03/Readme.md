ITMD 361, Production Problem 3: Relative Units in CSS

For this production problem, you will be doing some math using the formula we talked about in class on September 21. Specifically,

target ÷ context = result
Remember that, by default, most browsers set 1em = 16px.

You’ll then use that to compute the values for the CSS styles below.



Convert the base font-size listed here from pixels to ems:
    html { 
        font-size: 1.1875em;
    }

Convert the base font-size listed here to ems, and set the line-height in ems accordingly:

    html {
        font-size: 1.0625em;
        line-height: 1.413em;
    }


Set the padding for this page to 12px on top and bottom, and 6px on left and right. Express in ems:
    html {

        font-size: 1.125em;
        padding: 0.667em,
        0.333em,
        0.667em,
        0.333em;
    }

Consider the following CSS. Assuming a browser with its base size at 1em = 16px, how big is h2, in pixels?
    html { 
        font-size: 1.125em; 
    } figure {
        font-size: 0.888em;
    } figure h2 {
        font-size: 1.4375em;
    }