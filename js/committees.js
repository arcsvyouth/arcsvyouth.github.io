var committees = [
	{
		"name": "Blood Services",
		"image": "images/blood-committee.jpg",
		"description": "The Blood Services Committee supports the American Red Cross by encouraging communities to donate blood in order to combat the large overarching issue of blood shortage, as well as collaborating with the biomedical unit to achieve goals. We reach out through health fairs and mobile blood donation centers, and offer volunteering, donating, and educational experiences for all members.",
		"times": "1st and 3rd Sunday 11am-12pm",
		"presentation": "https://docs.google.com/presentation/d/1w2r5fOr-QamnUBaOVp7F97MphNYnfpwg7m5d4oFUIzg/edit",
		"app": ""
	},
	{
		"name": "Disaster",
		"image": "images/disaster-committee.jpg",
		"description": "The Disaster Committee’s mission is to raise awareness of disasters and educate the community on how to properly respond to those disasters. Together, we will take on projects including our annual Disaster Simulation, amateur radio training, and work together to design and distribute an illustrated handout on disasters we may face in California. This year, we also hope grow our Sound the Alarm campaign, where we involve local youth in installing fire alarms in at-risk communities.",
		"times": "2nd and 4th Saturday 10-11am",
		"presentation": "https://drive.google.com/file/d/0BxiYu0fe2TAvNlJyYl9TMl91c1BidHRTREh4RWNuV3ZuSVZB/view",
		"app": "https://tinyurl.com/arcsvdisaster1819"
	},
	{
		"name": "Health and Safety (H&S)",
		"image": "images/h&s-committee.jpg",
		"description": "The Health and Safety Committee’s mission is the bring basic aid training and CPR to the community. We strive to promote practical safety techniques and health awareness within the community. We reach out to our community by instructing others in topics such as CPR and First-Aid as well as through volunteering, educating, and donating. We as a committee are able to teach basic aid classes at the chapter later in the semester, so look forward to that!",
		"times": "2nd and 4th Sunday 10-11am",
		"presentation": "https://docs.google.com/presentation/d/1QfNxnYNf3flHiTB2PM90kpjTs0420B-OYUE-Dk9p8ig/edit#slide=id.p",
		"app": ""
	},
	{
		"name": "International/SAF",
		"image": "images/saf-committee.jpg",
		"description": "The International/Service to the Armed Forces Committee is dedicated to raising the public awareness of International Humanitarian Law and the plight of refugees in the U.S. and around the world. Furthermore, this joint committee aids and supports veterans and military families through outreach events held throughout the year. We implement our mission through events such as Raid Cross and the Refugee Simulation. We also participate in the Veterans’ Day Parade and regularly organize Fisher House Dinners for military families. Come join us and help serve your neighborhood and the global community!",
		"times": "1st and 3rd Sundays 12-1pm",
		"presentation": "https://docs.google.com/presentation/d/1CfSy2nLjR5XZJbMLlNRyY9USPva_97LYrRljRfFLUyU/edit#slide=id.g35f391192_00",
		"app": "http://tiny.cc/internationalsaf"
	},
	{
		"name": "Preparedness",
		"image": "images/safekids-committee.jpg",
		"description": "The Preparedness Committee is committed to informing and educating the community on how to best prepare and respond to natural disasters such as fires, earthquakes, hurricanes, and floods through trainings and presentations. We achieve our mission through providing Community Disaster Education (CDE) Presentations for the general community, Pillowcase Trainings for younger children, and CPR Trainings. We incorporate youth volunteers in contacting community centers, libraries, elementary schools, and school clubs to spread awareness through trainings.",
		"times": "1st and 3rd Sundays 11am-12pm",
		"presentation": "https://docs.google.com/presentation/d/1j6gzUKLSIo_HUsbAaELdfAo5zqBCMBaFkzeAXvYReU8/edit",
		"app": "https://tinyurl.com/preparednessapp1819"
	},
	{
		"name": "Spirit",
		"image": "images/spirit-committee.jpg",
		"description": "The Spirit Committee aims to create a fun filled year by organizing several volunteer socials and community events for all Red Cross volunteers. Some events Spirit organizers are the Youth Awards night, Ice Cream Movie Night, and many more!",
		"times": "2nd and 4th Sundays 11am-12pm",
		"presentation": "https://docs.google.com/presentation/d/1mH4Y4WL67SsIckU8m2dyPG9Jk_VykGaH-eSNyh0Rkhs/edit",
		"app": "https://docs.google.com/forms/d/e/1FAIpQLSc3sq-j9ADsMJMhGmXE3PI3-JWFuowsNi4km65F_PAPR66oUw/viewform"
	}
]

var col, committee, committeeName, thumbnail, committeeImage, committeeDesc, committeeTimes, buttons, committeePres, committeeApp;


var row = document.querySelector("#committees > .row");

for (var i = 0; i < committees.length; i++) {
	col = document.createElement("div");
	col.setAttribute("class", "col-lg-6 col-md-6 col-xs-12");

	committee = document.createElement("div");
	committee.setAttribute("class", "committee");
	committeeName = document.createElement("h3");
	committeeName.appendChild(document.createTextNode(committees[i].name));

	thumbnail = document.createElement("div");
	thumbnail.setAttribute("class", "thumbnail");
	committeeImage = document.createElement("img");
	committeeImage.setAttribute("src", committees[i].image);
	committeeImage.setAttribute("class", "img-responsive");
	committeeImage.setAttribute("alt", committees[i].name + " committee image");
	thumbnail.appendChild(committeeImage);

	committeeDesc = document.createElement("p");
	committeeDesc.innerHTML = committees[i].description;

	committeeTimes = document.createElement("p");
	committeeTimes.innerHTML = "<strong>Meeting dates:</strong> " + committees[i].times;

	buttons = document.createElement("p");
	committeePres = document.createElement("a");
	committeePres.setAttribute("class", "btn btn-info btn-xs btn-xs-space");
	committeePres.setAttribute("role", "button");
	committeePres.setAttribute("href", committees[i].presentation);
	committeePres.setAttribute("target", "_blank");
	committeePres.appendChild(document.createTextNode("Committee Presentation"));
	committeeApp = document.createElement("a");
	committeeApp.setAttribute("class", "btn btn-primary btn-xs btn-xs-space");
	committeeApp.setAttribute("role", "button");
	committeeApp.setAttribute("href", committees[i].app);
	committeeApp.setAttribute("target", "_blank");
	committeeApp.appendChild(document.createTextNode("Committee App"));
	buttons.appendChild(committeePres);
	buttons.appendChild(committeeApp);

	committee.appendChild(committeeName);
	committee.appendChild(thumbnail);
	committee.appendChild(committeeDesc);
	committee.appendChild(committeeTimes);
	committee.appendChild(buttons);
	col.appendChild(committee);
	row.appendChild(col);
}