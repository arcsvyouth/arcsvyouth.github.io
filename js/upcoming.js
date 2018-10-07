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
		"desc": '<p>All committee apps were originally due September 30, but for clubs who began meetings after this deadline, we will still accept applications. Read more about our different committees and access their apps on our <a href="committees.html">Committees page</a>.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Liaison Meeting",
		"date": "October 7 (Sunday) 11am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": true
	},
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