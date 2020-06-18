export default  async function(){
    const response= await fetch("https://api.github.com/users/caqg95/repos");
    let myRepos=await response.json()
    return myRepos;
}