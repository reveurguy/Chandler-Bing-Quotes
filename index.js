var btn= document.querySelector("#btn");
var quote= document.querySelector("#quote");
var tweetbtn= document.querySelector("#twitterbtn");
var fbbtn= document.querySelector("#facebookbtn");
// var url= 'https://api.sheety.co/de1e3565f4fdbd0a2999a03f48817ce1/chandlerBing/chandlerBing';
var url= 'https://sheet.best/api/sheets/d5afee0f-b41f-4e88-bf3f-3ec18bf2e1bb';
// var url= 'https://sheet.best/api/sheets/9eb26f2c-b413-4dcb-a943-c3767e797f29';


btn.addEventListener("click",function () {
    fetch(url)
    .then(function(req){
        req.json().then(function(data){
          var ChandlerBing = data;
          function randomNumber() {
            var random = Math.floor(Math.random() * data.length);
            return ChandlerBing[random];
          }
            quote.innerText= randomNumber().Quotes;
        // req.json().then(function(data){
        //   var ChandlerBing = data.chandlerBing;
        //   function randomNumber() {
        //     var random = Math.floor(Math.random() * ChandlerBing.length);
        //     return ChandlerBing[random];
        //   }
        //     quote.innerText= randomNumber().quotes;
        })
    })
});

tweetbtn.addEventListener("click", function() {
  tweetIt ();
});

function tweetIt () {
  var phrase = quote.innerText;
  var tweetUrl = "https://twitter.com/intent/tweet?&text=\"" + encodeURIComponent(phrase) + "\"  - Chandler Bing &hashtags=FRIENDS&hashtags=CHANDLERBING&url=https://reveurguy.github.io/Chandler-Bing-Quotes/"; 
  window.open(tweetUrl);
}

