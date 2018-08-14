
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
    input.oninput = function(event) {
        event.preventDefault();
        console.log(userArr);
        if (event.data === null) {
            userArr.splice(-1,1);
            console.log(userArr);
        } else if (event.data === " ") {
            if (userArr.join('') === testArr[0].toString()) {
                testArr.shift();
                userArr=[];
                event.currentTarget.value = ""
                console.log("TestArr", testArr[0]);
                console.log("UserArr", userArr);
            } else {
                userArr.push(event.data);
                console.log('Not Correct');
            } 
        } else {
            userArr.push(event.data);
        }
        console.log(userArr);
    }
  
  

});
