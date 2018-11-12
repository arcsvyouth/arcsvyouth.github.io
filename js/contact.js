var contactList = [
	{
		"position": "Co-Chairs",
		"people": [
			{
				"name": "Jolie Nguyen",
				"email": "jolie.nguyen@redcross.org"
			},
			{
				"name": "Tiffany Nguyen",
				"email": "tiffany.nguyen@redcross.org"
			}
		]
	},
	{
		"position": "AmeriCorps",
		"people": [
			{
				"name": "Gurpreet Lally",
				"email": "gurpreet.lally@redcross.org"
			},
			{
				"name": "Timothy Fader",
				"email": "timothy.fader@redcross.org"
			}
		]
	},
	{
		"position": "Youth Services",
		"people": [
			{
				"name": "Jonathan Bernier",
				"email": "jonathan.bernier2@redcross.org"
			}
		]
	},
	{
		"position": "Disaster Services",
		"people": [
			{
				"name": "Jay Feng",
				"email": "jay.feng@redcross.org"
			}
		]
	},
	{
		"position": "Fundraising",
		"people": [
			{
				"name": "Andrea Simonian",
				"email": "andrea.simonian@redcross.org"
			}
		]
	},
	{
		"position": "Health & Safety",
		"people": [
			{
				"name": "Leon Huynh",
				"email": "leon.huynh@redcross.org"
			},
			{
				"name": "Theodore Do",
				"email": "theodore.do@redcross.org"
			}
		]
	},
	{
		"position": "International/SAF",
		"email": "svrc.internationals@gmail.com",
		"people": [
			{
				"name": "Kashov Sharma",
				"email": "kashov.sharma@redcross.org"
			},
			{
				"name": "Tianyi (Rose) Lin",
				"email": "tianyi.lin@redcross.org"
			}
		]
	},
	{
		"position": "Preparedness",
		"people": [
			{
				"name": "Josephine Tai",
				"email": "josephine.tai@redcross.org"
			},
			{
				"name": "Oishika Barat",
				"email": "oishika.barat@redcross.org"
			}
		]
	},
	{
		"position": "Publicity",
		"people": [
			{
				"name": "Shannon Ding",
				"email": "shannon.ding@redcross.org"
			},
			{
				"name": "Vivian Tsang",
				"email": "vivian.tsang@redcross.org"
			}
		]
	},
	{
		"position": "Spirit",
		"people": [
			{
				"name": "Noopur Shanbhogue",
				"email": "noopur.shanbhogue@redcross.org"
			}
		]
	},
	{
		"position": "Volunteer Connection",
		"email": "arcsv.vc@gmail.com",
		"people": [
			{
				"name": "Britney Weng",
				"email": "britney.weng@redcross.org"
			}
		]
	},
];



var contactContainer = document.getElementById("contacts");

var block, address, position;

for (var i = 0; i < contactList.length; i++) {
	block = document.createElement("div");
	block.setAttribute("class", "col-lg-6 col-md-6 col-sm-6 col-xs-12");

	address = document.createElement("address");

	position = document.createElement("strong");
	position.appendChild(document.createTextNode(contactList[i].position));

	address.appendChild(position);

	if (contactList[i].hasOwnProperty("email")) {
		address.appendChild(document.createElement("br"));
		var email = document.createElement("i");
		email.appendChild(document.createTextNode(contactList[i].email));
		address.appendChild(email);
	}
	
	var email;
	for (var j = 0; j < contactList[i].people.length; j++) {
		address.appendChild(document.createElement("br"));
		address.appendChild(document.createTextNode(contactList[i].people[j].name));
		address.appendChild(document.createElement("br"));
		email = document.createElement("i");
		email.appendChild(document.createTextNode(contactList[i].people[j].email));
		address.appendChild(email);
	}

	

	block.appendChild(address);
	contactContainer.appendChild(block);
}