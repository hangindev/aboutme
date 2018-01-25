$(document).ready(function () {
   ko.applyBindings(new ViewModel());
});

function ViewModel() {
    var self = this;

    this.modal =  ko.observable();

    this.projects = ko.observableArray([
      {
        title: 'Interactive learning dashboards built with Vue.js ',
        imgsrc: 'http://i65.tinypic.com/102rvaf.png',
        gif: null,
        details: 'Create single-page learning dashboards for learners and supervisors.',
        moredetails: 'Create single-page learning dashboards for learners and supervisors. Build reusable components. Manage the state properly to ensure reactivity. Use props and custom event dispatchers for data flow between components.',
        projectlink: null,
        github: null,
        courselink: null,
        skills: ['Vue.js'],
        lastupdated: ''
      },
      {
        title: 'Data Visualization using D3.js',
        imgsrc: 'http://i63.tinypic.com/5xu9w2.png',
        gif: null,
        details: 'Create intuitive and sometimes interactive charts',
        moredetails: 'Apart from static bar chart, line chart, donut chart, etc., I also do animation using D3.js Transition API. By exploring the powerful APIs offered by D3.js, I design creative easy-to-read charts, e.g., a scatter plot using D3.js Force Layout to show the distribution of the processing times of the systems of my company.',
        projectlink: null,
        github: null,
        courselink: null,
        skills: ['D3.js'],
        lastupdated: ''
      },
      {
        title: 'Dang that\'s Delicious',
        imgsrc: 'http://i65.tinypic.com/2yoddvo.png',
        gif: null,
        details: 'A full stack restaurant application which users can search, geolocate and review their favorite restaurants',
        moredetails: 'A coursework of "Learn Node" by Wes Bos, which build a full stack restaurant application which users can search, geolocate, review and curate their favourite restaurants. Designed to hit upon many of today\s application needs such as user authentication, database storage, Ajax REST API, file upload and image resizing.',
        projectlink: 'https://dang-thats-delicious-orqlhqsobc.now.sh',
        github: null,
        courselink: 'https://learnnode.com/',
        skills: ['Node.js', 'Express', 'MongoDB'],
        lastupdated: '4 months ago'
      },
      {
        title: 'Catch of the Day',
        imgsrc: 'http://i68.tinypic.com/2cctgg0.jpg',
        gif: null,
        details: 'A real-time app for a trendy seafood market where price and quantity available are variable and can change at a moment\'s notice.',
        moredetails: 'A coursework of "React for Beginners" by Wes Bos, which used React, React Router 4, ES6, Firebase to build real-time app for a trendy seafood market where price and quantity available are variable and can change at a moment\'s notice. ',
        projectlink: 'https://cotd-ffingnnbdj.now.sh/',
        github: null,
        courselink: 'https://reactforbeginners.com/',
        skills: ['React', 'React Router 4', 'ES6', 'Firebase'],
        lastupdated: '5 months ago'
      },
      {
        title: 'Startup Landing Page Template',
        imgsrc: 'https://s28.postimg.org/y6qtb7uv1/screenshot.jpg',
        gif: null,
        details: 'A simple and clear homepage showing features of a startup.',
        moredetails: 'A simple and clear homepage showing features of a startup. Consisted of a sign up section, images, Youtube video, etc.',
        projectlink: 'https://nrator.github.io/10-10/day2_Homepage/homepage.html',
        github: 'https://github.com/nrator/10-10/tree/master/day2_Homepage',
        courselink: null,
        skills: ['HTML','CSS','Bootstrap4'],
        lastupdated: 'a year ago'
      },
      {
        title: 'Products/Services Page Template',
        imgsrc: 'https://s29.postimg.org/of4s0qyef/screenshot.jpg',
        gif: null,
        details: 'Displays your products/services you have created in the page.',
        moredetails: 'Displays your products/services you have created in the page. This template may also display additional details about the products/services, like the price, instructors & testimonials.',
        projectlink: 'https://nrator.github.io/10-10/day7_Parallax/Parallax.html',
        github: 'https://github.com/nrator/10-10/tree/master/day7_Parallax',
        courselink: null,
        skills: ['HTML','CSS','Bootstrap4'],
        lastupdated: 'a year ago'
      },
      {
        title: 'Bouldering Guides in Hong Kong',
        imgsrc: 'img/boulderingguide.png',
        gif: 'img/boulderingguide.gif',
        details: 'A single-page web application that displays a Google Map of climbing places in Hong Kong.',
        moredetails: 'With the hope in promoting climbing in Hong Kong, I built a single-page web application using the Knockout framework that displays a Google Map showing great climbing places. Users can apply filters to search for new climbing spots. When markers are selected, related images will be fetched through the Flickr API.',
        projectlink: 'https://nrator.github.io/fend-bouldering-guides-in-hong-kong/',
        github: 'https://github.com/nrator/fend-bouldering-guides-in-hong-kong',
        courselink: null,
        skills: ['HTML','CSS','JavaScript','KnockoutJS','AJAX'],
        lastupdated: 'a year ago'
      },
      {
        title: 'Pure CSS Browser Mockups',
        imgsrc: 'https://s23.postimg.org/q7ik1qmqj/mockup.jpg',
        gif: null,
        details: 'Made 3 reusable CSS browser mockups for showing web designs.',
        moredetails: 'Made 3 reusable pure CSS browser mockups (laptop, tablet, phone) for showing web designs. Please refer to the GitHub link for the usage.',
        projectlink: null,
        github: 'https://github.com/nrator/10-10/tree/master/day5_BrowserMockup',
        skills: ['CSS'],
        lastupdated: 'a year ago'
      },
      {
        title: 'Vertical Timeline',
        imgsrc: 'https://nrator.github.io/10-10/day1_Timeline/screenshot.jpg',
        gif: null,
        details: 'A responsive timeline layout for recording events.',
        moredetails: 'The page is responsive. Timeline elements are hidden and would appear when they enters the viewport.',
        projectlink: 'https://nrator.github.io/10-10/day1_Timeline/timeline.html',
        github: 'https://github.com/nrator/10-10/tree/master/day1_Timeline',
        skills: ['HTML','CSS','JavaScript'],
        lastupdated: 'a year ago'
      },
      {
        title: 'HTML5 Music Player',
        imgsrc: 'https://nrator.github.io/10-10/day4_MusicPlayer/screenshot.jpg',
        gif: null,
        details: 'A music player built with HTML5 audio, jQuery.',
        moredetails: 'A music player built with HTML5 audio, jQuery and Bootstrap4. Functions included: play, pause, step backward, step forward.',
        projectlink: 'https://nrator.github.io/10-10/day4_MusicPlayer/MusicPlayer.html',
        github: 'https://github.com/nrator/10-10/tree/master/day4_MusicPlayer',
        skills: ['HTML5','CSS','JavaScript'],
        lastupdated: 'a year ago'
      }
    ]);

    this.updateModal = function() { self.modal(this) };
}
