// storing html elements in a variable to update the DOM 
const word = document.getElementsByClassName("word")[0];
const workName = document.getElementsByClassName("workName")[0];
const email = document.getElementsByClassName("email")[0];
const profilePic = document.getElementsByClassName("profilePic")[0];
const locations = document.getElementsByClassName("locations")[0];
const dateOfBirth = document.getElementsByClassName("dateOfBirth")[0];
const dateOfRegistration = document.getElementsByClassName("dateOfRegistration")[0];
const phoneNumber = document.getElementsByClassName("phoneNumber")[0];
const button = document.getElementsByClassName("button")[0];

let path = 
"https://randomuser.me/api/"

// Declaring a function to be called to fetch data and update the DOM
let getData = () => {
    // Fetching data syntax
    fetch(path).then(response => {
        // Cleaning up the data with JSON
        return response.json()
    }).then(datas => {
        // Updating the DOM with data fatched
        profilePic.src = datas.results[0].picture.large;
        workName.innerHTML = `${datas.results[0].name.first.toUpperCase()} ${datas.results[0].name.last.toUpperCase()}`;
        email.innerHTML = datas.results[0].email;
        locations.innerHTML = ` ${datas.results[0].location.city}, ${datas.results[0].location.state}, ${datas.results[0].location.country}.`;
        dateOfRegistration.innerHTML = datas.results[0].registered.date.split("T")[0];
        dateOfBirth.innerHTML = datas.results[0].dob.date.split("T")[0];
        phoneNumber.innerHTML = datas.results[0].phone;
    })
};
// Calling the function declared to update the DOM automatically
getData()  ; 
// Handling a click event to change user details
button.addEventListener("click", () => {
    getData()
})
