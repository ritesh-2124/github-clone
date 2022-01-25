//declearing some global vareables;
 let response;
 let query;
 //importing data from another files
import navbar from "./nav2.js";
import getuser from "./getuser.js";
document.querySelector("#navbar2").innerHTML = navbar();

let input = document.querySelector("#search-input");
//using addevenlistener on keypress
 input.addEventListener("keypress" ,searchuser)
async function searchuser(event){
 if(event.key == "Enter"){
query = input.value;
response =  getuser(query);

//after compleate above condition;
response.then((result) =>{
    let {avatar_url} = response;
//user profile 
    document.querySelector("#profile-img").src = result.avatar_url;
    document.querySelector("#user_profile_img").src = result.avatar_url;
    document.querySelector("#name").textContent = result.name;
    document.querySelector("#user_name").textContent = result.login;
    document.querySelector("#bio").textContent = result.bio;
    document.querySelector("#follower").textContent= result.followers+" "+"follower";
    document.querySelector("#following").textContent= result.following+" "+"following";
    
console.log(response)
        getuserrepo()
})
 
}
 }
 
async function getuserrepo(){
///featching API for repos 
    let res = await fetch(`https://api.github.com/users/${query}/repos`);
    let repos_data = await  res.json();
         console.log(repos_data) 
         showrepose(repos_data)
}
//maping all repose for appending in main div
let showrepose = (repos_data)=>{
  document.querySelector("#user_repos").innerHTML = "";
  repos_data.forEach((element)=> {
     
    let childdiv = document.createElement("div");
    let repo_name = document.createElement("h2");
    repo_name.innerHTML = element.name;
    let repo_position = document.createElement("p");
    repo_position.innerHTML = element.visibility;
  
    childdiv.append(repo_name , repo_position);
    console.log(childdiv)
    document.querySelector("#user_repos").append(childdiv)
  });
}