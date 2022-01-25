
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    
    const url = "https://type.fit/api/quotes"

     fetch(url)
      .then(res=> res.json())
          .then(function(data) {
              let indx = Math.floor(Math.random()*data.length)
              let quote = data[indx].text;
              output.innerHTML =quote;
          })
          .catch(error => console.log("Quote Not Found"))
        });