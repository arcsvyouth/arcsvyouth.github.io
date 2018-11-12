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
		"name": "Liaison Meeting",
		"date": "October 21 (Sunday) 10am",
		"desc": '<p>One officer from each club must attend. Here are the <a href="https://docs.google.com/presentation/d/1eAn5vWQPp6hAhLmQRFWfVurNZend40OwUD5Jn677PEM/edit?fbclid=IwAR04NnbYKQ11ZrtRR-XNhaKA6bGCOzm_RbPPtLJZf77-2PGWq7t5ndcmFCA#slide=id.g452dad6361_0_53" target="_blank">slides</a> from the liaison meeting.</p>',
		"type": types.officers,
		"visible": false
	},
	{
		"name": "Sound the Alarm",
		"date": "October 27 (Saturday) 9am-3pm",
		"desc": '<p>Help us #EndHomeFires by installing smoke alarms and providing fire safety education within your community. Our Sound the Alarm events are generally held one Saturday every month. The event on October 27th (Saturday) from 9am-3pm is at <b>Village of the Four Seasons Mobile Home Park</b>: 200 Ford Road, San Jose 95138. Sign up on <a href="https://stasanjose.wufoo.com/forms/k1p8p5vt0z2iieq/" target="_blank">this form</a>. Here is the <a href="https://www.facebook.com/events/1871198016260819/" target="_blank">facebook event</a>. The next Sound the Alarm is on December 2 and location is to be announced.</p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Liaison Meeting",
		"date": "November 3 (Sunday) 10am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": true
	},
	{
		"name": "Veterans' Day Parade",
		"date": "November 11 (Sunday) 10:30am-2pm",
		"desc": '<p>March with Red Cross to support veterans. The parade begins at the SAP arena in Downtown San Jose. This is the 100th anniversary of the parade and the 25th year our Red Cross chapter has participated. Wear Red Cross merch/patriotic colors and decorate with face paint! Register on Volunteer Connection under the event name “Veteran’s Day Parade Staff” and text Jolie at (408) 439-1935 if you have trouble finding the meeting location. Also sign up at <a href="https://tinyurl.com/vetparade2018">tinyurl.com/vetparade2018</a> to coordinate with our International/SAF committee, who is bringing banners for the parade. If your club is interested in making banners, contact the coordinators at <i>svrc.internationals@gmail.com</i>.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Movie Under the Stars",
		"date": "November 16 (Friday)",
		"desc": '<p>Unwind and watch a movie on the patio! There will be popcorn for sale. Come in comfy clothes and bring a blanket!</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Blood Donor Card Making",
		"date": "November 18 (Sunday) 11am-12pm",
		"desc": '<p>Come out to the chapter from 11am-12pm to make thank-you cards for our wonderful blood donors to receive during the holiday time!  Supplies will be provided but feel free to bring your own (there will be food too!).</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Liaison Meeting",
		"date": "November 18 (Sunday) 10am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": true
	},
	{
		"name": "Health and Safety Training",
		"date": "November 25 (Sunday) 9:30-2pm",
		"desc": '<p>Become a Health and Safety Instructor through this training at the chapter! Learn about first aid and CPR topics. This is open to all youth and lunch is provided. Limited spots so <a href="https://docs.google.com/forms/d/e/1FAIpQLSctDSxlLhKRXDB93YdtWp8twUCHvbviJPSJ2VbrsGrlgclh_g/viewform" target="_blank">sign up here soon</a>! (An email will be sent indicating if there is space in the class for you.)</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Totes of Hope Packaging Event",
		"date": "November 30 (Friday) TBA",
		"desc": '<p>Over the entire month of November, we are collecting donations for <b>Totes of Hope</b>, a personal care kit drive for homeless veterans. Bring your donations to the Youth Services room in the chapter, or collect donations within your club and have an officer bring them all. On <b>November 30th</b>, we will host a packaging event at the chapter before sending our totes off to veterans hospitals and outreach programs! <a href="newsletters/11-18.html#totes" target="_blank">Learn more on how you and your club can help</a>.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Sound the Alarm",
		"date": "December 1 (Saturday) 8:30am-2:30pm",
		"desc": '<p>Help us #EndHomeFires by installing smoke alarms and providing fire safety education within your community. Our Sound the Alarm events are generally held one Saturday every month. There is no age limit to participate.</p><p>The next event is <b>December 1st (Saturday)</b> at the County Fair Mobile Estate. Meet at <b>San Jose Fire Station 24</b>: 1924 Yerba Buena Rd, San Jose, CA, 95121. Sign up at <a href="http://tiny.cc/STADec1" target="_blank">http://tiny.cc/STADec1</a> and contact <b>rcdisastercommittee@gmail.com</b> for any questions.</p>',
		"type": types.all,
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