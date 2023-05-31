document.title = "MY ASSESSMENT"

const word = document.getElementsByClassName("word")[0];
const workName = document.getElementsByClassName("workName")[0];
const email = document.getElementsByClassName("email")[0];
const profilePic = document.getElementsByClassName("profilePic")[0];
const locations = document.getElementsByClassName("locations")[0];
const dateOfBirth = document.getElementsByClassName("dateOfBirth")[0];
const dateOfRegistration = document.getElementsByClassName("dateOfRegistration")[0];
const phoneNumber = document.getElementsByClassName("phoneNumber")[0];

let path = 
"https://randomuser.me/api/"

let getData = () => {
    fetch(path).then(response => {
        return response.json()
    }).then(datas => {
        const apiPicture = datas.results[0].picture.large;
        profilePic.src = apiPicture;

        const apiFullName = `${datas.results[0].name.first.toUpperCase()} ${datas.results[0].name.last.toUpperCase()}`;
        workName.innerHTML = `Name: ${apiFullName}`;

        email.innerHTML = `Email: ${datas.results[0].email}`;

        const CityStateCountry = `Location: ${datas.results[0].location.city}, ${datas.results[0].location.state}, ${datas.results[0].location.country}.`
        locations.innerHTML = CityStateCountry;

        const splittedDateOfRegistration = datas.results[0].registered.date.split("T")[0];
        dateOfRegistration.innerHTML = `Date Of Registration: ${splittedDateOfRegistration}`;

        const splittedDateOfBirth = datas.results[0].dob.date.split("T")[0];
        dateOfBirth.innerHTML = `Date Of Birth: ${splittedDateOfBirth}`;

        phoneNumber.innerHTML = `Phone Number: ${datas.results[0].phone}`;
        // console.log(datas.results[0]);
    })
};
getData()  ; 
