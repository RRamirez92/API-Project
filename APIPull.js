fetch('https://w1skozpr2m.execute-api.us-east-2.amazonaws.com/SecondTry/Eventfunction/9453994')
    .then(res => res.json())
    .then(data => {
     document.querySelector("#Name").innerHTML = data.Name
	 document.querySelector("#Date").innerHTML = data.Date
	 document.querySelector("#Location").innerHTML = data.Location
	 document.querySelector("#EventID").innerHTML = data.EventID
	 document.querySelector("#StartTime").innerHTML = data.StartTime
	document.querySelector("#EndTime").innerHTML = data.EndTime 
	document.querySelector("#Price").innerHTML = data.price
	
	
}).catch(err => console.error(err));
