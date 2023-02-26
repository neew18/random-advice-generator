let btn = document.querySelector("button");
let adviceDisplay = document.querySelector("h1");
let adviceID = document.getElementById("ID");

btn.addEventListener("click", getAdvice)
function getAdvice(event){
        event.preventDefault();
        let apiUrl = "https://api.adviceslip.com/advice";
        axios.get(apiUrl).then((response) => {
                let apiId = response.data.slip.id;
                let advice = response.data.slip.advice;
                adviceID.innerHTML = apiId;
                adviceDisplay.innerHTML =  `"${advice}"`;
        })
}
