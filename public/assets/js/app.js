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
            for (i=0;i<testArr.length;i++){
                container.innerHTML+=`<span id="test-data${[i]}">${testArr[i]}</span> `
            }
            console.log(testArr);
            input.setAttribute("style", "display:block;");
            button.setAttribute("style", "display:none;");
        })
    }
    
    let userArr = [];
    input.oninput = function(event) {
        event.preventDefault();
        if (event.data === null) {
            userArr.splice(-1,1);
        } else if (event.data === " ") {
            if (userArr.join('') === testArr[0].toString()) {

                validate(userArr.join(''), testArr[0].toString());

                testArr.shift();
                userArr=[];
                event.currentTarget.value = ""

                console.log("Correct")
            } else {

                userArr.push(event.data);

                validate(userArr.join(''), testArr[0].toString());
                
                console.log('Not Correct');
            } 
        } else {
            userArr.push(event.data);
            console.log(userArr)
        }
    }
  
    function validate(user, test) {
        if (user === test) {
            console.log('yes');
        } else {
            console.log('no')
        }
        // for(i=0; i<testArr.length; i++) {
        //     let testData = document.getElementById(`test-data${[i]}`); 

        //     if (userArr.join('') === testData.innerText) {
        //         console.log(testData);
        //         console.log('Sure');
        //         testData.setAttribute("style", "color:green;");
        //     } else {
        //         console.log(testData);
        //         console.log("No");
        //         testData.setAttribute("style", "color:red;");
        //     }  
        // }
    }

});
