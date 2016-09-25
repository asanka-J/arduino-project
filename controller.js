$(document).ready(function() {
	var tempsArray = [];
	var tArray = [];
	var sessionArray = [];
    
    var tempsArray1 = [];
	var tArray1 = [];
	var sessionArray1 = [];

    var tempsArray2 = [];
	var tArray2 = [];
	var sessionArray2 = [];

	var currTemp = '';
 //controller function for  temperature
	var dataRef = new Firebase('https://project-edb28.firebaseio.com/temp');
	dataRef.on('value', function(snapshot) {
		var t = snapshot.val();
		var count = 0;
 
		for (var key in t) {
		  if (t.hasOwnProperty(key)) {		    
		    var dt = [];	    
		    dt[0] = count;
		    dt[1] = parseFloat(t[key]);
		    tempsArray = [];
		    tempsArray.push(dt);
		    tArray = [];
		    tArray.push(dt[1]);
		    count++;
		  }
		}
		sessionArray.push(tempsArray[0])
		//console.log("lkr"+tempsArray)
		$.plot($("#chart1"), [ sessionArray ]);
		currTemp = tempsArray[0][1].toString();
		$('#tempMsg').show();
		$("#currTemp").text(currTemp);
	});	


//controller function for  humidity
var dataRef1 = new Firebase('https://project-edb28.firebaseio.com/humid');
	dataRef1.on('value', function(snapshot1) {
		var t1 = snapshot1.val();
		var count1 = 0;
 
		for (var key1 in t1) {
		  if (t1.hasOwnProperty(key1)) {		    
		    var dt1 = [];	    
		    dt1[0] = count1;
		    dt1[1] = parseFloat(t1[key1]);
		    tempsArray1 = [];
		    tempsArray1.push(dt1);
		    tArray1 = [];
		    tArray1.push(dt1[1]);
		    count1++;
		  }
		}
		sessionArray1.push(tempsArray1[0])
		//console.log("lkr"+tempsArray)
		$.plot($("#chart2"), [ sessionArray1 ]);
		currTemp2 = tempsArray1[0][1].toString();
		$('#tempMsg2').show();
		$("#currTemp2").text(currTemp2);
	});	


    //controller function for  vibration
var dataRef2 = new Firebase('https://project-edb28.firebaseio.com/vib');

    	dataRef2.on('value', function(snapshot2) {
		var t2 = snapshot2.val();
		var count2 = 0;
 
		for (var key2 in t2) {
		  if (t2.hasOwnProperty(key2)) {		    
		    var dt2 = [];	    
		    dt2[0] = count2;
		    dt2[1] = parseFloat(t2[key2]);
		    tempsArray2 = [];
		    tempsArray2.push(dt2);
		    tArray2 = [];
		    tArray2.push(dt2[1]);
		    count2++;
		  }
		}
		sessionArray2.push(tempsArray2[0])
		//console.log("lkr"+tempsArray)
		$.plot($("#chart3"), [ sessionArray2 ]);
		currTemp3 = tempsArray2[0][1].toString();
		$('#tempMsg3').show();
		$("#currTemp3").text(currTemp3);
	});	

		
});
