//get form data
let form=document.querySelector("form");
let apiKey="";//will create later to encrypt key
let foodList=document.querySelector("#foodList");
let activityList=document.querySelector("#activityList");
//console.log(foodList.options[foodList.selectedIndex].value);


//submit button
form.addEventListener('submit',(e)=>{
    e.preventDefault();//dont "send"
    //assign response to Strings
    let food=foodList.options[foodList.selectedIndex].value;
    let activity=activityList.options[activityList.selectedIndex].value;

    console.log(food);
    console.log(activity);
    //CORS fix
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //create url to send
    //food
    let foodSearch=proxyurl+`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E&query=${food}`;
    //activity
    let activitySearch=proxyurl+`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E&query=${activity}`;

    //send API request using responses
    //for food
    xhr1.open("GET", foodSearch);
    xhr1.send();
    //for activity
    xhr2.open("GET", activitySearch);
    xhr2.send();

});
//enter form data to google api 
//empty list to fill with resutls from returned json
let apiElements=[];
xhr1= new XMLHttpRequest();//request object1
xhr2= new XMLHttpRequest();//request object2

xhr1.onreadystatechange=function(){//when state changes
    if(this.readyState===4 && this.status === 200) {//if done
        console.log("done");
        //assign json to variable(JSON object)
        let data=JSON.parse(xhr1.responseText);
        console.log(data.results[0].name);
        //fill list
        for(let i=0;i<data.results.length;i++){
            apiElements[i]=data;//list of results
        }
        //append 5 names to list
        for(let i=0;i<5;i++){
            let resultItem=document.createElement("li");
            resultItem.innerHTML=apiElements[i].results[i].name;
            document.querySelector("#foodResult").appendChild(resultItem);
        }
    }
}

xhr2.onreadystatechange=function(){//when state changes
    if(this.readyState===4 && this.status === 200) {//if done
        console.log("done");
        //assign json to variable(JSON object)
        let data=JSON.parse(xhr2.responseText);
        console.log(data.results[0].name);
        //fill list
        for(let i=0;i<data.results.length;i++){
            apiElements[i]=data;//list of results
        }
        //append 5 names to list
        for(let i=0;i<5;i++){
            let resultItem=document.createElement("li");
            resultItem.innerHTML=apiElements[i].results[i].name;
            document.querySelector("#activityResult").appendChild(resultItem);
        }
    }
}
