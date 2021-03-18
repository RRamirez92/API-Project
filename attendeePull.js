fetch('https://t4hz80znug.execute-api.us-east-2.amazonaws.com/SecondChance/AttendeeFunction/')
    .then(res => res.json())
    .then(data => {
     
	var x = ""
	
	for( i in data){
		x += "<td> " + data[i].Attendee_id + " </td>" + "<td>|</td>" +
			 "<td> " + data[i].first_name + " </td>" + "<td>|</td>" +
			 "<td> " + data[i].LastName + " </td>" + "<td>|</td>" +
			 "<td> " + data[i].Email + " </td>" +"<td>|</td>" +
			 "<td> " + data[i].Organization + " </td>" + "<td>|</td>" +
			 "<td> " + data[i].Position + " </td>" + "<td>|</td>" +
			 "<td> " + data[i].State + " </td>" + "<br/>" + "<br/>"
	}
	document.getElementById("demo").innerHTML = x;
	
	
}).catch(err => console.error(err));



