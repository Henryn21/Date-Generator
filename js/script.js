//get form data
let form=document.querySelector("form");

let foodButtonDiv=document.querySelector("#food");
console.log(foodButtonDiv);

let foodButtons=foodButtonDiv.childNodes;
console.log(foodButtons);
let activity;
for(let i=0;i<foodButtons.length;i++){
    console.log(foodButtons[i]);
    foodButtons[i].addEventListener("Click",(e)=>{
        console.log("HI");
    });
}
// foodButtons.addEventListener("Click",(e)=>{
//     console.log(e);
// });

form.addEventListener('submit',(e)=>{
    e.preventDefault();//dont "send"
    let zip=document.querySelector("#zip").value;
    //food and activity buttons dont return value
    // let food=document.querySelector("#food").value;
    // let activity=document.querySelector("#activity").value;
    console.log(zip);
    console.log(food);
    console.log(activity);
});

//enter form data to google api
//display results
// let xhr= XMLHttpRequest();
