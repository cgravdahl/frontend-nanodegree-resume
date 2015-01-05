var bio = {
	"name" : "Cody Gravdahl",
	"role" : "Web Developer",
	"skills" : ["Javascript" , "Ruby" , "JQuery", "HTML"],
	"contactInfo" : {
		"email" : "codygravdahl@gmail.com",
		"mobile" : "952-270-5524",
		"github" : "cgravdahl",
		"location" : "Pequot Lakes, MN"
	},
	"welcomeMessage" : "Welcome to my online resume",
	"bioPic" : "images/me.jpg"
};

var education = {
	"schools": [
		{
			"name": "Full Sail University",
			"city": "Winter Park, FL, US",
			"dates": "September 2008 - October 2010",
			"degree" : "BS",
			"major" : "Web Design & Development",
			"url" : "http://www.fullsail.edu/degrees/campus/web-design-development-bachelors"
		}
	],
	"onlineCourses":[
		{
			"title": "Front-End Web Develper Nanodegree",
			"school": "Udacity",
			"dates": "November 2014 -",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Bernicks",
			"title": "Intercompany Driver",
			"location": "Brainerd, MN",
			"dates": "June 2014 -",
			"description": "Making bulk devliveries of 7up and Miller Products."
		},
		{
			"employer": "American Road Lines",
			"title": "Haz-mat Driver",
			"location": "Williston, ND",
			"dates": "April 2013 - May 2014",
			"description": "Delivery of bulk chemicals to locations."
		},
		{
			"employer": "TransStaff",
			"title": "Driver/Fleet Manager",
			"location": "Williston, ND",
			"dates": "June 2011 - March 2013",
			"description": "Delivery of water to locations and managment of drivers and trucks."
		},
		{
			"employer": "Grand Forks AFB",
			"title": "Graphic Designer/Web Developer",
			"location": "Grand Forks, ND",
			"dates": "November 2010 - April 2011",
			"description": "Design Posters and build drop pages."
		}
	] 
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "Right Now",
			"description": "This is a sample project",
			"images": [
			"images/sample.jpg",
			"images/sample2.jpg"
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "Yesterday",
			"description": "This is a sample project",
			"images": [
			"images/sample.jpg",
			"images/sample2.jpg"
			]
		}
		// ,{
		// 	"title": "",
		// 	"dates": "",
		// 	"description": "",
		// 	"images": [
		// 	"",
		// 	""
		// 	]
		// }
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo["email"]);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo["mobile"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo["github"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo["location"]);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	};

	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedGithub);
	$("#topContacts, #footerContacts").append(formattedLocation);
};


work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);	
		var formattedEmployerTitle = formattedEmployer + formattedTitle;


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length >0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for(school in education.schools){

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry").append(formattedName);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry-schoolLink").attr("href", education.schools[school].url);

		
	};
	$(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses){

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedUrl);
		$(".education-entry-link").attr("href", education.onlineCourses[course].url);	

	};
};
//Call Functions for Page
bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(name){
	var name = bio.name;
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
};