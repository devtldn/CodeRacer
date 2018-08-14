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
            // validate();
        } else if (event.data === " ") {
            if (userArr.join('') === testArr[0].toString()) {
                testArr.shift();
                validate();
                userArr=[];
                event.currentTarget.value = ""
                console.log("Correct")
                // console.log("TestArr", testArr[0]);
                // console.log("UserArr", userArr);
            } else {
                userArr.push(event.data);
                console.log('Not Correct');
            } 
        } else {
            validate();

            userArr.push(event.data);
            console.log(userArr)
        }
    }
  
    function validate() {
        let result;

        for (let i = 0; i < testArr[i].split('').length; i++) {
            let testData = document.getElementById(`test-data${[i]}`).textContent;

            console.log("THIS IS testArr: ", testArr[i]);

            // if (userArr.join('') === testData) {
            //     console.log("THIS IS testData (if): ", testData);
            //     result = testData.setAttribute("style", "color:green;");
            // } else {
            //     console.log("THIS IS testData (else): ", testData);
            //     result = testData.setAttribute("style", "color:red;");
            // }  
            // return result;  
        }
    }

});
