let circle = document.getElementsByClassName("circle");

let submitBtn = document.getElementById("submit");

let ratingContainer = document.getElementById("rating");

let thankYouContainer = document.getElementById("thank-you");

let ratingResult = document.getElementById("rating-result");

let ratingScore;

Array.from(circle).forEach(function(item){
    item.addEventListener("click",function(e){
        ratingScore = e.target.id;
        submit();
    });
});

function submit(){
    submitBtn.addEventListener("click", () => {
        ratingContainer.style.display ="none";
        thankYouContainer.classList.remove("hidden");
        ratingResult.textContent=ratingScore;
    });
}


