
document.addEventListener("DOMContentLoaded", function(event){
    var button = document.getElementById("button");
    var container = document.getElementById("main-container");
    var input = document.getElementById('user-input');

    button.onclick = function(event) {
        event.preventDefault();
        console.log('clickity click')
        axios.get('/api/racer').then(res => {
            container.innerHTML+=`<p>${res.data[0].text}</p>`
            input.setAttribute("style", "display:block;")
        })
    }

  
  

});
