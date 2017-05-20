/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Object of Bio
var bio = {
    "name": "Madhur Taneja",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+91 9811044961",
        "email": "tanejamadhur@yahoo.com",
        "github": "https://github.com/madhur-taneja",
        "twitter": "N.A.",
        "linkedin": "https://www.linkedin.com/in/madhur-taneja/",
        "location": "Chandigarh"
    },
    "welcomeMessage": "Never Back Down",
    "skills": ["C", "Html", "Css", "Javascript", "Bootstrap", "jQuery", "Networking"],
    "biopic": "images/biopic.jpg"
    // display : function taking no parameters
};

// Function to Display Bio

bio.display = function() {
    // Prepending name as it is to be displayed first.
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

// Object of Education

var education = {
    "schools": [{
            "name": "Chitkara Institute of Engineering and Technology",
            "location": "Chandigarh",
            "degree": "B.E.",
            "majors": ["Computer Science"],
            "dates": "2015 - 2019",
            "url": "http://www.chitkara.edu.in/"
        },
        {
            "name": "Paramount International School",
            "location": "Sector 23, Dwarka, New Delhi",
            "degree": "Sr. Secondary School",
            "majors": ["PCM"],
            "dates": "2012 - 2014",
            "url": "http://paramountschool.in/)"
        },
        {
            "name": "Venkateshwar International School",
            "location": "Sector 10, Dwarka, New Delhi",
            "degree": "Primary, Middle, Secondary School",
            "majors": ["General Studies"],
            "dates": "2002 - 2012",
            "url": "http://www.vis10dwarka.com/"
        },
        {
            "name": "Convent of Rani Jhansi School",
            "location": "R.K. Puram, New Delhi",
            "degree": "Pre-Primary School",
            "majors": ["General Studies"],
            "dates": "1999 - 2002",
            "url": " http://www.conventofranijhansi.com/"
        }
    ],
    "onlineCourses": [{
        "title": "Intro to HTML and Css",
        "school": "Udacity",
        "dates": "2016",
        "url": "https:www.udacity.com/course/intro-to-html-and-css--ud304"
    }]
    // display: function taking no parameters
};

// Function to Display Education

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("Click-Here", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree) + HTMLschoolName.replace("#", education.schools[i].url));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

// Object of Work

var work = {
    "jobs": [{
        "employer": "Chitkara University",
        "title": "Student",
        "location": "Rajpura",
        "dates": "2015 - 2019",
        "description": "I am studying Bachelors of Engineering(B.E.)"
    }]
    // display: function taking no parameters
};

// Function to Display Work

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

// Object of Project

var projects = {
    "projects": [{
            "title": "Animal Trading Card",
            "dates": "25/01/2017-27/01/2017",
            "description": "A simple web page using HTML and CSS",
            "images": ["images/Animal-card.png"]
        },
        {
            "title": "FC Barcelona's Portfolio",
            "dates": "25/02/2017-25/02/2017",
            "description": "A responsive web page using HTML,CSS and Bootstrap(Twitter's framework for HTML & CSS)",
            "images": ["images/Portfolio.png"]
        }
    ]
    // display: function taking no parameters
};

// Function to Display Work

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		projects.projects[i].images.forEach(function(image){
			// format and display 'image'
			$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
		});
    }
};

//Adding Google Maps

$("#mapDiv").append(googleMap);

// Function Calls

bio.display();
education.display();
work.display();
projects.display();