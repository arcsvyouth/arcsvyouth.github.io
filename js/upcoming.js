var types = {
	"all": {
		"name": "all youth",
		"color": "#ddd"
	},
	"committee": {
		"name": "committee",
		"color": "#ff6961"
	},
	"officers": {
		"name": "officers",
		"color": "#333"
	},
	"special": {
		"name": "★",
		"color": "#4286f4"
	}
};

var eventsList = [
	{
		"name": "Red Cross Club Bootcamp",
		"date": "August 26 (Sunday) 10am-4pm",
		"desc": '<p>We are inviting all of you to attend this year’s very first Red Cross Club Bootcamp at the Silicon Valley Red Cross Chapter (2731 N 1st St, San Jose, CA 95134)! The Bootcamp will include presentations on Red Cross youth initiatives, committees, and preparation for the upcoming school year. <a href="#club-bootcamp">Read more above.</a></p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Committee Apps Extended",
		"date": "",
		"desc": '<p>All committee apps were due September 30. Read more about our different committees and access their apps on our <a href="committees.html">Committees page</a>.</p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Liaison Meeting",
		"date": "October 7 (Sunday) 10am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": false
	},
	{
		"name": "Blood Services",
		"date": "October 7 (Sunday) 11am",
		"desc": '<p>The first meeting of the Blood Services committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "Preparedness",
		"date": "October 7 (Sunday) 11am",
		"desc": '<p>The first meeting of the Preparedness committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "International/SAF",
		"date": "October 7 (Sunday) 12pm",
		"desc": '<p>The first meeting of the International/SAF committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "Disaster",
		"date": "October 13 (Saturday) 10am",
		"desc": '<p>The first meeting of the Disaster committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "Health and Safety",
		"date": "October 14 (Sunday) 10am",
		"desc": '<p>The first meeting of the Health and Safety committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "Spirit",
		"date": "October 14 (Sunday) 11am",
		"desc": '<p>The first meeting of the Spirit committee.</p>',
		"type": types.committee,
		"visible": false
	},
	{
		"name": "Sound the Alarm",
		"date": "October 27 (Saturday) 9am-3pm",
		"desc": '<p>Help us #EndHomeFires by installing smoke alarms and providing fire safety education within your community. Our Sound the Alarm events are generally held one Saturday every month. The event on October 27th (Saturday) from 9am-3pm is at <b>Village of the Four Seasons Mobile Home Park</b>: 200 Ford Road, San Jose 95138. Sign up on <a href="https://stasanjose.wufoo.com/forms/k1p8p5vt0z2iieq/" target="_blank">this form</a>. Here is the <a href="https://www.facebook.com/events/1871198016260819/" target="_blank">facebook event</a>.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Liaison Meeting",
		"date": "October 21 (Sunday) 10am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": true
	}
];



var eventsListContainer = document.getElementById("events-list");

var rowBlock, rowHead, rowHeadName, rowHeadDate, rowDesc, desc;

for (var i = 0; i < eventsList.length; i++) {
	if (eventsList[i].visible) {
		rowBlock = document.createElement("div");
		rowBlock.setAttribute("class","row-block");

		rowHead = document.createElement("div");
		rowHead.setAttribute("class","row row-m-t row-table-head");
		rowHead.style.borderBottomColor = eventsList[i].type.color; 

		rowHeadName = document.createElement("div");
		rowHeadName.setAttribute("class","col-md-6 col-sm-6");
		rowHeadName.appendChild(document.createElement("h4"));
		rowHeadName.querySelector("h4").appendChild(document.createTextNode(eventsList[i].name));

		rowHeadDate = document.createElement("div");
		rowHeadDate.setAttribute("class","col-md-6 col-sm-6");
		rowHeadDate.appendChild(document.createElement("h4"));
		rowHeadDate.querySelector("h4").appendChild(document.createTextNode(eventsList[i].date));

		rowDesc = document.createElement("div");
		rowDesc.setAttribute("class","row row-table-desc");

		desc = document.createElement("div");
		desc.setAttribute("class","col-md-12 col-sm-12");
		desc.innerHTML = eventsList[i].desc;


		rowHead.appendChild(rowHeadName);
		rowHead.appendChild(rowHeadDate);
		rowDesc.appendChild(desc);

		rowBlock.appendChild(rowHead);
		rowBlock.appendChild(rowDesc);

		eventsListContainer.appendChild(rowBlock);
	}
}