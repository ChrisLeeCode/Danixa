
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)

const Http = new XMLHttpRequest();
const url='https://jsonblob.com/api/jsonBlob/c58e743c-25bf-11ea-9557-5d2e0961d291';
Http.responseType = 'json';
Http.open("GET", url);
Http.setRequestHeader("Content-Type", "application/json");
Http.setRequestHeader("Accept", "application/json");
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.response)
  if (Http.response != null){
  	process(Http.response)
  }
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function process(text_json){
	var actv_int = text_json[0]
	var actv_list = text_json[actv_int]
	var day_index = getRandomInt(actv_list.length);
	day_index = 103;
	console.log("Active int: " + actv_int + " Random day is: " + day_index)
	msg_list = actv_list[day_index]
	console.log(msg_list)
	console.log("There are "+ msg_list.length +" messages on this day")


	var toAdd = document.createDocumentFragment();

	var scuffed_date = msg_list[0][0];
	var split_date = scuffed_date.split("-");
	var d_year = split_date[0];
	var d_month = split_date[1];
	var d_day = split_date[2];


	date_div = document.createElement('div');
	date_div.className = "date"
	date_div.innerHTML += "Messages taken from: " + d_day+"/"+d_month+"/"+d_year;
	toAdd.appendChild(date_div)
	for(var i=0; i < msg_list.length; i++){
	    var newDiv = document.createElement('div');
	    var curr_msg = msg_list[i]
	    var direction = curr_msg[2]
	    var msg_text = curr_msg[3]
	    var msg_time = curr_msg[1]


	    newDiv.id = 'r'+i;
	    if (direction == "out") {
		   	newDiv.className = 'container';
		   	newDiv.innerHTML += msg_text;
		   	newDiv.innerHTML += "<br/>"+'<span class="time-left">'+msg_time+'</span>';
	    } else{
		   	newDiv.className = 'container darker';
		   	newDiv.innerHTML += msg_text;
		   	newDiv.innerHTML += "<br/>"+'<span class="time-right">'+msg_time+'</span>';
	    }
	   
	    toAdd.appendChild(newDiv);
	    var br = document.createElement("br");
		toAdd.appendChild(document.createTextNode("\n"))
	}

document.getElementById('globalCont').appendChild(toAdd);

}

//TODO
//see which list is active (1 or 2) /
//size of active list = n /
//choose random number between 0 and n = i /
//take i's messages and display them /
//move i day to innactive list
//delete i day from active list
//check size of active list
//if size is 0 then change active list operator 


