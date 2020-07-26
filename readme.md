Web application - to help a child understand multiplication.

#Project Layout.
-src
--api
--assets
--common
--data
---data.json
--scss
---index.scss
--app.js
--crete-box.js
--find-multiples.js
--higlight-boxes.js
--index.js
--style.css
-test
--app.test.js
--find_multiples.test.js

#Functions.

1. Webapp is displaying 144 large clickable boxes according to the numbers provided in the description.
2. Number is centered in each box.
3. When click on the box all the numbers which are multiple of that number get higlighted.
4. When click on the second number it will remove the previous higlighted boxed and higlight the newly seleced boxes.

#Responsive design

1. On mobile deveice it is showing 1 box per row.
2. On tables it is showoing 2 boxes per row.
3. on desktop showing 3 boxes per row with equal margin on left and right.
4. If resize the browser window it will resize the layout.

#Testing

1. Unit test for data file.
2. Unit testing for multiple numbers.

#sass-loader would have been better to follow the BEM approcah for the styling.
