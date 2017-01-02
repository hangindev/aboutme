$(document).ready(function () {
   ko.applyBindings(new ViewModel());
});

function ViewModel() {
    var self = this;

    this.modal =  ko.observable();

    this.projects = ko.observableArray([
      {
        title: 'Startup Landing Page Template',
        imgsrc: 'https://nrator.github.io/30-30/day2_Homepage/screenshot.png',
        gif: null,
        details: 'A simple and clear homepage showing features of a startup.',
        moredetails: 'A simple and clear homepage showing features of a startup. Consisted of a sign up section, images, Youtube video, etc.',
        projectlink: 'https://nrator.github.io/30-30/day2_Homepage/homepage.html',
        github: 'https://github.com/nrator/30-30/tree/master/day2_Homepage',
        skills: ['HTML','CSS','Bootstrap4'],
        lastupdated: '5 days ago'
      },
      {
        title: 'Products/Services Page Template',
        imgsrc: 'https://s29.postimg.org/of4s0qyef/screenshot.jpg',
        gif: null,
        details: 'Displays your products/services you have created in the page.',
        moredetails: 'Displays your products/services you have created in the page. This template may also display additional details about the products/services, like the price, instructors & testimonials.',
        projectlink: 'https://nrator.github.io/30-30/day7_Parallax/Parallax.html',
        github: 'https://github.com/nrator/30-30/tree/master/day7_Parallax',
        skills: ['HTML','CSS','Bootstrap4'],
        lastupdated: '3 days ago'
      },
      {
        title: 'Bouldering Guides in Hong Kong',
        imgsrc: 'img/boulderingguide.png',
        gif: 'img/boulderingguide.gif',
        details: 'A single-page web application that displays a Google Map of climbing places in Hong Kong.',
        moredetails: 'With the hope in promoting climbing in Hong Kong, I built a single-page web application using the Knockout framework that displays a Google Map showing great climbing places. Users can apply filters to search for new climbing spots. When markers are selected, related images will be fetched through the Flickr API.',
        projectlink: 'https://nrator.github.io/fend-bouldering-guides-in-hong-kong/',
        github: 'https://github.com/nrator/fend-bouldering-guides-in-hong-kong',
        skills: ['HTML','CSS','JavaScript','KnockoutJS','AJAX'],
        lastupdated: '1 month ago'
      },
      {
        title: 'Pure CSS Browser Mockups',
        imgsrc: 'https://s23.postimg.org/q7ik1qmqj/mockup.jpg',
        gif: null,
        details: 'Made 3 reusable CSS browser mockups for showing web designs.',
        moredetails: 'Made 3 reusable pure CSS browser mockups (laptop, tablet, phone) for showing web designs. Please refer to the GitHub link for the usage.',
        projectlink: null,
        github: 'https://github.com/nrator/30-30/tree/master/day5_BrowserMockup',
        skills: ['CSS'],
        lastupdated: '4 days ago'
      },
      {
        title: 'Estimated Arrival Times - KMB',
        imgsrc: 'img/kmbeta.png',
        gif: null,
        details: 'An unofficial web app of estimated time of KMB bus arrival.',
        moredetails: 'Turned an official web app of estimated time of bus arrival into a simplified mobile version web app. Used Python to scrape bus data, load data to database handled by MySQL and set up the web server. Gained some back-end knowlegde.',
        projectlink: 'http://nrator.pythonanywhere.com/',
        github: 'https://github.com/nrator/Estimated-Arrival-Times-KMB',
        skills: ['JavaScript','jQuery Mobile','Python', 'SQL'],
        lastupdated: '2 month ago'
      },
      {
        title: 'Vertical Timeline',
        imgsrc: 'https://nrator.github.io/30-30/day1_Timeline/screenshot.jpg',
        gif: null,
        details: 'A responsive timeline layout for recording events.',
        moredetails: 'The page is responsive. Timeline elements are hidden and would appear when they enters the viewport.',
        projectlink: 'https://nrator.github.io/30-30/day1_Timeline/timeline.html',
        github: 'https://github.com/nrator/30-30/tree/master/day1_Timeline',
        skills: ['HTML','CSS','JavaScript'],
        lastupdated: '2 week ago'
      },
      {
        title: 'Feed Reader Testing',
        imgsrc: 'img/feedreader.png',
        gif: null,
        details: 'Wrote tests, using Jasmine, for an RSS Feed Reader.',
        moredetails: 'Wrote tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google\'s RSS API',
        projectlink: null,
        github: 'https://github.com/nrator/fend-feedreader',
        skills: ['JavaScript','Jasmine'],
        lastupdated: '1 month ago'
      },
      {
        title: 'HTML5 Music Player',
        imgsrc: 'https://nrator.github.io/30-30/day4_MusicPlayer/screenshot.jpg',
        gif: null,
        details: 'A music player built with HTML5 audio, jQuery.',
        moredetails: 'A music player built with HTML5 audio, jQuery and Bootstrap4. Functions included: play, pause, step backward, step forward.',
        projectlink: 'https://nrator.github.io/30-30/day4_MusicPlayer/MusicPlayer.html',
        github: 'https://github.com/nrator/30-30/tree/master/day4_MusicPlayer',
        skills: ['HTML5','CSS','JavaScript'],
        lastupdated: '6 days ago'
      },
      {
        title: 'Frogger Game',
        imgsrc: 'img/froggergame.png',
        gif: null,
        details: 'An HTML5 Canvas powered video game, developed using Object Oriented JavaScript.',
        moredetails: 'Provided with visual assets and a game loop engine; the classic arcade game Frogger was recreated by adding game algorithms and a number of entities to the game including the player characters and enemies.',
        projectlink: null,
        github: 'https://github.com/nrator/fend-classic-arcade-game-clone',
        skills: ['JavaScript','Object-Oriented Programming', 'HTML5 Canvas'],
        lastupdated: '1 month ago'
      }
    ]);

    this.updateModal = function() { self.modal(this) };
}
