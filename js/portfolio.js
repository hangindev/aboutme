$(document).ready(function () {
   ko.applyBindings(new ViewModel());
});

function ViewModel() {
    var self = this;

    this.modal =  ko.observable();

    this.projects = ko.observableArray([
      {
        title: 'Bouldering Guides in Hong Kong',
        imgsrc: 'img/boulderingguide.png',
        gif: 'img/boulderingguide.gif',
        details: 'A single-page web application that displays a Google Map of climbing places in Hong Kong. Photos are fetched through the Flickr API.',
        moredetails: 'With the hope in promoting climbing in Hong Kong, I built a single-page web application using the Knockout framework that displays a Google Map showing great climbing places. Users can apply filters to search for new climbing spots. When markers are selected, related images will be fetched through the Flickr API.',
        projectlink: 'https://nrator.github.io/fend-bouldering-guides-in-hong-kong/',
        github: 'https://github.com/nrator/fend-bouldering-guides-in-hong-kong',
        skills: ['HTML','CSS','JavaScript','KnockoutJS','AJAX'],
        lastupdated: '4 days ago'
      },
      {
        title: 'Feed Reader Testing',
        imgsrc: 'img/feedreader.png',
        gif: null,
        details: 'Wrote tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google\'s RSS API',
        moredetails: null,
        projectlink: null,
        github: 'https://github.com/nrator/fend-feedreader',
        skills: ['JavaScript','Jasmine'],
        lastupdated: '1 week ago'
      },
      {
        title: 'Estimated Arrival Times - KMB',
        imgsrc: 'img/kmbeta.png',
        gif: null,
        details: 'An unofficial web app of estimated time of KMB bus arrival. Simplified for mobile users.',
        moredetails: 'Turned an official web app of estimated time of bus arrival into a simplified mobile version web app. Used Python to scrape bus data, load data to database handled by MySQL and set up the web server. Gained some back-end knowlegde.',
        projectlink: 'http://nrator.pythonanywhere.com/',
        github: 'https://github.com/nrator/Estimated-Arrival-Times-KMB',
        skills: ['JavaScript','jQuery Mobile','Python', 'SQL'],
        lastupdated: '6 days ago'
      },
      {
        title: 'Frogger Game',
        imgsrc: 'img/froggergame.png',
        gif: null,
        details: 'An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.',
        moredetails: 'Provided with visual assets and a game loop engine; the classic arcade game Frogger was recreated by adding game algorithms and a number of entities to the game including the player characters and enemies.',
        projectlink: null,
        github: 'https://github.com/nrator/fend-classic-arcade-game-clone',
        skills: ['JavaScript','Object-Oriented Programming', 'HTML5 Canvas'],
        lastupdated: '1 month ago'
      }
    ]);

    this.updateModal = function() { self.modal(this) };
}
