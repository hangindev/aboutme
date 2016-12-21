$(document).ready(function () {
   ko.applyBindings(new ViewModel());
});

function ViewModel() {
    var self = this;

    this.projects = ko.observableArray([
      {
        title: 'Bouldering Guides in Hong Kong',
        imgsrc: 'img/boulderingguide.png',
        details: 'A single-page web application that displays a Google Map of climbing places in Hong Kong.',
        lastupdated: '4 days ago'
      },
      {
        title: 'Feed Reader Testing',
        imgsrc: 'img/feedreader.png',
        details: 'Wrote tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google\'s RSS API',
        lastupdated: '1 week ago'
      },
      {
        title: 'Estimated Arrival Times - KMB',
        imgsrc: 'img/kmbeta.png',
        details: 'An unofficial web app of estimated time of KMB bus arrival. Simplified for mobile users.',
        lastupdated: '6 days ago'
      }
    ]);

}
