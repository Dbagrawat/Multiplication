# Find-multiplication-of-number
Web application - to help a child understand multiplication.

### Dependencies
`$ npm install`

### Run!
`$ npm start`

http://localhost:8080/

### Test
`$ npm test`
 
 --------------------------------------------------
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
--highlight-boxes.js
--index.js
--style.css
-test
--app.test.js
--find_multiples.test.js
 
#Functions.
 
1. Webapp is displaying 144 large clickable boxes according to the numbers provided in the description.
2. Number is centered in each box.
3. When clicking on the box all the numbers which are multiple of that number get highlighted.
4. When clicking on the second number it will remove the previous highlighted boxed and highlight the newly selected boxes.
 
#Responsive design
 
1. On mobile devices it is showing 1 box per row.
2. On tables it is showing 2 boxes per row.
3. On the desktop showing 3 boxes per row with equal margin on left and right.
4. If you resize the browser window it will resize the layout.
 
#Testing
 
1. Unit test for data file.
2. Unit testing for multiple numbers.
 
#sass-loader would have been better to follow the BEM approach for the styling.
#I have not used any css lib for the, its plain css for the responsive desing. Would have been good to use any css library to support the older browser.
