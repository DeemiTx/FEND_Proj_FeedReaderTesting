/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('URL property for each feed is defined and URL is not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         */
        it('name property for each feed is defined and name is not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* "The menu" test suite*/
    describe('The menu', function() {
        /* This test ensures the menu element is hidden by default.
         * <body> element defaults to menu-hidden class which esures
         * that menu is moved past left boundry of the screen.
         */
        it('menu is hidden (default) when page is loaded', function(){
            expect(document.body.classList).toContain('menu-hidden');
        });

        /* This test ensures that menu changes visibility when the menu
         * icon (<a> element with menu-icon-link class) is clicked by toggling
         * menu-hidden class to body element. Initially menu is hidden and moved
         * past left edge of screen because tarnsform:translate3D is set to -12em.
         * When menu is clicked it overrides tarnsform:translate3D value to 0, thereby displaying
         * menu along left edge of screen. This test ensures that menu display is toggled between
         * hidden and display menu button is clicked.
         */
        it('menu display is toggled when menu button <a class=.menu-icon-link> is clicked', function(){

            $('.menu-icon-link').trigger('click');
            expect(document.body.classList).not.toContain('menu-hidden');

            $('.menu-icon-link').trigger('click');
            expect(document.body.classList).toContain('menu-hidden');
        });
    });

    /* "Initial Entries" test suite*/

    /* This test ensures that when loadFeed function
     * is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Since loadFeed() is asynchronous we utilize beforeEach() and done() functions.
     */
    describe('Initial Entries', function(){
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });

        });

        it('post loadFeed call there is atleast one .entry within the .feed container', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* "New Feed Selection" test suite*/

    /* This test ensures that the content actually changes when a new feed is loaded
     * by the loadFeed asynchronous function. Since loadFeed() is
     * asynchronous we utilize beforeEach() and done() functions.
     */

    describe('New Feed Selection', function () {
        var firstFeed, secondFeed;

        beforeEach(function (done) {
            // First feed
            loadFeed(0, function () {
                firstFeed = $('.feed').text();

                // Second feed
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it('feed content should change when a new feed is loaded', function (done) {
            secondFeed = $('.feed').text();
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });

}());
