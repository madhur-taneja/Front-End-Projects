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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("Url is present and isn't null", function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                // Command below checks if url is empty or not.
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("Name is present and isn't null", function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                // Command below checks if url is empty or not.
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Is menu element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu changes visibility when menu icon is clicked', function() {
            $(".menu-icon-link").click();
            //Menu should be opened when menu icon is clicked.
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            //Menu should be closed when clicked again on menu icon.
            expect($('body').hasClass("menu-hidden")).not.toBe(false);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            // Before testing the specs, loading the feed is required
            loadFeed(0, function() {
                done();
            });
        });
        it('Feed has atleast some entry', function(done) {
            //Command to check if feed length is greater than zero.
            expect($('.feed .entry').length > 0).not.toBe(false);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialFeed;
        var updatedFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                //Storing feed in initialFeed on load.
                initialFeed = $('.feed').html();
                //To make asynchronous, nested loops are used.
                loadFeed(1, function() {
                    //Storing feed in updatedFeed on reload.
                    updatedFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('UpdatedFeed and initialFeed are unequal', function() {
            //Checking if UpdatedFeed and initialFeed are unequal.
            expect(updatedFeed).not.toEqual(initialFeed);
        });
    });
}());