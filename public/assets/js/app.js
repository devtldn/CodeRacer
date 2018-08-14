
document.addEventListener("DOMContentLoaded", function(event){
    var button = document.getElementById("button");
    var container = document.getElementById("main-container");
    var input = document.getElementById('user-input');

    let testArr;
    button.onclick = function(event) {
        event.preventDefault();
        console.log('clickity click')
        axios.get('/api/racer').then(res => {
            testArr = res.data[0].text.split(' ');
            console.log(testArr);
            container.innerHTML+=`<p>${res.data[0].text}</p>`
            input.setAttribute("style", "display:block;");
            button.setAttribute("style", "display:none;");
        })
    }

    let userArr = [];
    let userStr = "";
    input.oninput = function(event) {
        userStr.join(event.data);
        console.log(userStr);
        event.preventDefault();
        if (event.data === null || event.data === 46) {
            userArr.splice(-1,1);
        } else if (event.data === " ") {
            if (userArr[0] === testArr[0]) {
                testArr.shift();
            } else {
                console.log('Not Correct');
            } 
        } else {
            userArr.push(event.data);
        }
        console.log(userArr);
    }
  
  

});
