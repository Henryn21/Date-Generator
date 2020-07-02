  //get form data
  //html elements, whole form, div holding food buttons, nodelist of each food button
let form=document.querySelector("form");
let foodButtonDiv=document.querySelector("#food");
let foodButtons=document.querySelectorAll(".foodButton");
let activityButtons=document.querySelectorAll(".activityButton");

let activity;

//SELECTED BUTTON
//buttons start un-selected

//FOOD
//select/deselect

//add listener to each button
for(let i=0;i<foodButtons.length;i++){
    //when clicked
    foodButtons[i].addEventListener("click", (e)=>{
        //clear selected
        for(let j=0;j<foodButtons.length;j++){
            foodButtons[j].style.backgroundColor="#4E0250";
        }
        //select clicked
        foodButtons[i].style.backgroundColor="blue";
    });
}
//ACTIVITY
//select/deselect

//add listener to each button
for(let i=0;i<activityButtons.length;i++){
    //when clicked
    activityButtons[i].addEventListener("click", (e)=>{
        //clear selected
        for(let j=0;j<activityButtons.length;j++){
            activityButtons[j].style.backgroundColor="#4E0250";
        }
        //select clicked
        activityButtons[i].style.backgroundColor="blue";
    });
}

//FUNCTION FOR RETURNING SELECTED ANSWERS
//CHANGE THIS TO TAKE AN ARRAY PARAMETER FOR RE USE!
function getAnswers(){
    for(let i=0;i<foodButtons.length;i++){
        if(foodButtons[i].style.backgroundColor=="blue"){
            return(foodButtons[i].id);//BUG!
        }
        else{
            return("None Selected");
        }
    }
}
console.log(getAnswers());

form.addEventListener('submit',(e)=>{
    e.preventDefault();//dont "send"
    let zip=document.querySelector("#zip").value;
    //food and activity buttons dont return value
    // let food=document.querySelector("#food").value;
    // let activity=document.querySelector("#activity").value;
    console.log(zip);
    food=getAnswers();
    console.log(food);
    activity=
    console.log(activity);
});
//Bug: Places api not giving right response
//enter form data to google api
let apiElements=[];
xhr= new XMLHttpRequest();//request object
xhr.onreadystatechange=function(){//when state changes
    if(this.readyState===4 && this.status === 200) {//if done
        console.log("done");
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        for(let i=0;i<data.results.length;i++){
            apiElements[i]=data.results[i];
        }
        console.log(apiElements);
        resultsButton.style.display="block";
    }
}
//public api test: https://randomuser.me/api/
//google places API
////maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E
xhr.open("GET", 'https://randomuser.me/api/');
xhr.send();

//display results
let resultsButton=document.querySelector("#results");
resultsButton.style.display="none";
resultsButton.addEventListener("click",(e)=>{
    for(let i=0;i<5;i++){
        let resultItem=document.createElement("li");
        resultItem.innerHTML=apiElements[i];
        document.querySelector("#resultsList").appendChild(resultItem);
    }
    
});
// let xhr= XMLHttpRequest();
