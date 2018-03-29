
# Udacity Front-End Web Developer Nanodegree
## Project: Feed Reader Testing

### Overview
Student needs to review Web based Feed Reader application files and implement various testing scenarios using Jasmine BDD framework to create and test out various features/specs listed in spec/feedreader.js file.


### Installation
Install/download website resources using one of following methods and open index.html:
* Clone from GitHub - https://github.com/DeemiTx/FEND_Proj_FeedReaderTesting.git
* Download as Zip file - https://github.com/DeemiTx/FEND_Proj_FeedReaderTesting/archive/master.zip

Access website resources (index.html) using following URL:
* https://deemitx.github.io/FEND_Proj_FeedReaderTesting/index.html

### How to Run
* Open index.html in browser either directly or once downloaded
* Scroll to the bottom of page and click on ' Jasmine__TopLevel__Suite' link
* Click on ' Ran 0 of 7 specs - run all' link at the bottom on page to run all spces/tests
* ' 7 specs, 0 failures' message with green background should appear at the bottom of page indicating successful completion of test specs/tests.

### Specs Tested

* RSS Feeds are defined
* URL property for each feed is defined and URL is not empty
* name property for each feed is defined and name is not empty
* menu is hidden (default) when page is loaded
* menu display is toggled when menu button <a class=.menu-icon-link> is clicked
* post loadFeed call there is atleast one .entry within the .feed container
* feed content should change when a new feed is loaded

Please see comments in spec/feedreader.js file for more details related to specs testing.


### License
MIT License

Copyright (c) [2018] [Deemi TX]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
