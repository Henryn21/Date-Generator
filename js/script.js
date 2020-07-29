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

    //create url to send
    //food
    let foodSearch=`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E&query=${food}`;
    //activity
    let activitySearch=`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E&query=${activity}`;

    //send API request using responses
    xhr.open("GET", foodSearch);
    xhr.send();

});
//enter form data to google api
//empty list to fill with resutls from returned json
let apiElements=[];
xhr= new XMLHttpRequest();//request object
xhr.onreadystatechange=function(){//when state changes
    if(this.readyState===4 && this.status === 200) {//if done
        console.log("done");
        //assign json to variable(JSON object)
        let data=JSON.parse(xhr.responseText);
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


