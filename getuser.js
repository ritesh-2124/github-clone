async function getuser(user){
  //  feathcing userr api
    try{
         let response = await fetch(`https://api.github.com/users/${user}`);
    let data = await response.json();
    return data;
    }
    catch(error){
        console.log(error)
    }
   
}
//exporting it that another file can use it
export default getuser;