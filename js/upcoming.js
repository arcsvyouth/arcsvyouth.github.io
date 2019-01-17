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
		"visible": false
	},
	{
		"name": "Veterans' Day Parade",
		"date": "November 11 (Sunday) 10:30am-2pm",
		"desc": '<p>March with Red Cross to support veterans. The parade begins at the SAP arena in Downtown San Jose. This is the 100th anniversary of the parade and the 25th year our Red Cross chapter has participated. Wear Red Cross merch/patriotic colors and decorate with face paint! Register on Volunteer Connection under the event name “Veteran’s Day Parade Staff” and text Jolie at (408) 439-1935 if you have trouble finding the meeting location. Also sign up at <a href="https://tinyurl.com/vetparade2018">tinyurl.com/vetparade2018</a> to coordinate with our International/SAF committee, who is bringing banners for the parade. If your club is interested in making banners, contact the coordinators at <i>svrc.internationals@gmail.com</i>.</p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Movie Under the Stars",
		"date": "November 16 (Friday) 6:30pm",
		"desc": '<p>Unwind and watch a movie on the patio! There will be popcorn for sale for $2 to fundraise for upcoming NYIM events. <a href="https://docs.google.com/forms/d/1sD5rj_rplOzuSiTKYhpkXHkjmV1V8yykNTxOg1LJuio/edit" target="_blank">RSVP here</a>. Come in comfy clothes and bring a blanket!</p>',
		"type": types.all,
		"tag": "movies",
		"visible": false
	},
	{
		"name": "Liaison Meeting",
		"date": "November 18 (Sunday) 10-11am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": false
	},
	{
		"name": "Blood Donor Card Making",
		"date": "November 18 (Sunday) 11am-12pm",
		"desc": '<p>Come out to the chapter from 11am-12pm to make thank-you cards for our wonderful blood donors to receive during the holiday time!  Supplies will be provided but feel free to bring your own (there will be food too!). <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpyWOzwoL4aFI98Q6a3AJOoZ_VDZ48-piG0S5AmZOjjA-eDQ/viewform" target="_blank">Sign up here.</a></p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "CDE Training",
		"date": "November 18 (Sunday) 11am-12:30pm",
		"desc": '<p>Come to the chapter in meeting room 2 to be CDE trained and get the chance to present with an Americorp! <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8OvnZvPHgoOmC15R9GGji20pKv9Gzn6LjLqNT2dNFBJjsvg/viewform" target="_blank">Sign up here.</a></p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Health and Safety Training",
		"date": "November 25 (Sunday) 9:30am-2pm",
		"desc": '<p>Become a Health and Safety Instructor through this training at the chapter! Learn about first aid and CPR topics. This is open to all youth and lunch is provided. Limited spots so <a href="https://docs.google.com/forms/d/e/1FAIpQLSctDSxlLhKRXDB93YdtWp8twUCHvbviJPSJ2VbrsGrlgclh_g/viewform" target="_blank">sign up here soon</a>! (An email will be sent indicating if there is space in the class for you.)</p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Totes of Hope Packaging Event",
		"date": "November 30 (Friday) 4:30-6:30pm",
		"desc": '<p>Over the entire month of November, we are collecting donations for <b>Totes of Hope</b>, a personal care kit drive for homeless veterans. Bring your donations to the Youth Services room in the chapter, or collect donations within your club and have an officer bring them all. On <b>November 30th</b>, we will host a packaging event at the chapter before sending our totes off to veterans hospitals and outreach programs! <a href="https://docs.google.com/forms/d/1NqSMHWvA5FBKImZ8DG_zw_j18UzxSz9s6ONl9GoovAE/edit" target="_blank">Sign up for the packaging event</a> and <a href="newsletters/11.5-18.html#totes" target="_blank">learn more on how you and your club can help</a>.</p>',
		"type": types.all,
		"tag": "totes",
		"visible": false
	},
	{
		"name": "Sound the Alarm",
		"date": "December 1 (Saturday) 8:30am-2:30pm",
		"desc": '<p>Help us #EndHomeFires by installing smoke alarms and providing fire safety education within your community. Our Sound the Alarm events are generally held one Saturday every month. There is no age limit to participate.</p><p>The next event is <b>December 1st (Saturday)</b> at the County Fair Mobile Estate. Meet at <b>San Jose Fire Station 24</b>: 1924 Yerba Buena Rd, San Jose, CA, 95121. Sign up at <a href="http://tiny.cc/STADec1" target="_blank">http://tiny.cc/STADec1</a> and contact <b>rcdisastercommittee@gmail.com</b> for any questions.</p>',
		"type": types.all,
		"visible": false
	},
	{
		"name": "Sound the Alarm Canvassing",
		"date": "January 12 (Saturday) 10am-12pm",
		"desc": '<p>Raise awareness of our <b>January 19th</b> Sound the Alarm in the La Buona Vita Mobile Home Community by canvassing. Volunteers will go house to house talking to residents and distributing doorhangers. <a href="https://goo.gl/forms/qyBA9E7opcW4Q3gf1" target="_blank">Sign up here.</a></p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Fisher House Dinner",
		"date": "January 18 (Friday) 5:30-7:30pm",
		"desc": '<p>Youth volunteers will be going to the VA Hospital in Palo Alto to make dinner for veterans. This event is full.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Sound the Alarm",
		"date": "January 19 (Saturday) 8:30am-2pm",
		"desc": '<p>Help us #EndHomeFires by installing smoke alarms and providing fire safety education within your community. Our Sound the Alarm events are generally held one Saturday every month. There is no age restriction to participate.</p><p>The next event is <b>January 19th (Saturday)</b> at La Buona Vita Mobile Home Community. Sign up at <a href="http://tiny.cc/STAJan19" target="_blank">tiny.cc/STAJan19</a>. Meet at the La Buona Vita Clubhouse in the morning for check-in, breakfast, and training. Contact <b>rcdisastercommittee@gmail.com</b> for any questions.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Liaison Meeting",
		"date": "January 20 (Sunday) 10-11am",
		"desc": '<p>One officer from each club must attend.</p>',
		"type": types.officers,
		"visible": false
	},
	{
		"name": "Pillowcase Project Training",
		"date": "January 27 (Sunday) 11am-3pm",
		"desc": '<p>This training is at the Silicon Valley Red Cross chapter and open to all Red Cross youth. We <b>highly recommend</b> that you attend. Food/lunch will be provided!<br>The Pillowcase Project is an interactive preparedness program designed for youth grades 3 to 5 which aims to increase understanding of natural hazards and teaches safety and personal preparedness. Becoming trained will allow you to teach these classes along with our Americorps and other youth volunteers in the local community.<br>Please <b>RSVP by January 23rd</b> for the training <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo2zZmCS7Qg3ni_tRFKeVfIQsB0mVDbx6M5-KrrG4btLuJmQ/viewform?usp=send_form" target="_blank">here</a>.<br>Before you attend the training, however, you must <b>complete the following online modules</b>: "Basic Instructor Fundamentals for Youth" and the "Pillowcase Project Presenter Fundamentals Module 1" We have attached a document <a href="https://docs.google.com/document/d/10hBX6C46ZE-BKoC_l_JO78ggZesVN14QF17eFlgCP7Q/edit" target="_blank">here</a> with full instructions and screenshots to make the process easier.<br>Email <i>oishika.barat@redcross.org</i> if you have questions.</p>',
		"type": types.all,
		"visible": true
	},
	{
		"name": "Raid Cross",
		"date": "February 2 (Saturday) 1-4pm",
		"desc": '<p>Raid Cross is a role-playing simulation activity devised by the the Red Cross to help the youth explore:</p><ul><li>The humanitarian issues involved in armed conflict situations.</li><li>The basic rules of international humanitarian law (IHL) that apply in those situations.</li><li>The importance of these rules in conflict situations including preventing civilian casualties and excessive damage to civilian objects. e.g., schools, homes, cities, and towns.</li></ul><p>Sign up at <a href="https://goo.gl/forms/ulzRjlytUYUwI5El1" target="_blank">tinyurl.com/raidcross19</a>. Contact the International/SAF coordinators for questions.</p>',
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
		if (eventsList[i].hasOwnProperty("tag")) {
			rowBlock.setAttribute("id",eventsList[i].tag);
		}

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