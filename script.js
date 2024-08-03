
/* generate random number */
function randomNumber() {
    let random_num = parseInt(100 + Math.random() * 1000000);
    random_num += '';
    //console.log(random_num.length);
    if (random_num.length == 6) return random_num;
    else
        randomNumber();
}
document.getElementById("secret_key_button").addEventListener("click", (e) => {
    let expected_num = randomNumber();
    if (expected_num)
        document.getElementById("secret_key_value").value = expected_num;
    else 
    {
       let valueForIndex= Math.floor(Math.random() * 899);
        let randomNumArr=someRandomNumbers();
        //console.log(randomNumArr);
        document.getElementById("secret_key_value").value =randomNumArr[valueForIndex] ;
    }
    
    


});

/* input keys and display value and check with secret key function */
const container_div = document.getElementById("input_output_div");
const result = document.getElementById("display_value");
const secret_key = document.getElementById("secret_key_value");
//let value = "";

container_div.addEventListener("click", (e) => {
    let length_check = "";

    if (e.target.matches("button")) {
        length_check = result.value + '';
        if (length_check.length > 5 && e.target.innerText != "Clear" && e.target.innerText != "Submit"
            && e.target.innerText != "X") 
            {
                   textFontColorChanged("msg_span", "only six digits allowed", "blanchedalmond", "18px");
                    textFontColorChanged("icon_id", "warning", "floralwhite", "18px");
                    document.getElementById("icon_id").setAttribute("class", "material-icons");
                    return;
            }
        //console.log(e.target.innerText);
        //e.target.style.backgroundColor="red";
        //console.log(document.getElementById("result").innerText);

        if (e.target.innerText == "Submit") {
            if (result.value && secret_key.value && length_check.length > 5) {
                if (result.value == document.getElementById("secret_key_value").value) {

                    textFontColorChanged("msg_span", "  wow!great.successfully matches", "palegreen", "18px");
                    textFontColorChanged("icon_id", "check_circle", "whitesmoke", "18px");
                    document.getElementById("icon_id").setAttribute("class", "material-icons");


                }
                else {
                    textFontColorChanged("msg_span", "Secret key and Input are different!", "floralwhite", "18px");
                    textFontColorChanged("icon_id", "error", "floralwhite", "18px");

                    document.getElementById("msg_span").style.textShadow = "1px 1px red";

                    document.getElementById("icon_id").setAttribute("class", "material-icons");

                }



            }
            else {
                //console.log(length_check.length);
                if (!secret_key.value) {
                    textFontColorChanged("msg_span", "please generate a secret key", "blanchedalmond", "18px");
                    textFontColorChanged("icon_id", "warning", "floralwhite", "18px");
                    document.getElementById("icon_id").setAttribute("class", "material-icons");

                    return;

                }
                if (length_check.length <= 5) {
                    textFontColorChanged("msg_span", "please input six digits", "blanchedalmond", "18px");
                    textFontColorChanged("icon_id", "warning", "floralwhite", "18px");
                    document.getElementById("icon_id").setAttribute("class", "material-icons");


                    return;
                }
                if (!result.value) {
                    textFontColorChanged("msg_span", "please input secret key", "blanchedalmond", "18px");
                    textFontColorChanged("icon_id", "warning", "floralwhite", "18px");
                    document.getElementById("icon_id").setAttribute("class", "material-icons");

                    return;
                }

            }


        }

        else if (e.target.innerText == "Clear") {
            result.value = '';
            document.getElementById("msg_span").innerText = "";
            document.getElementById("icon_id").removeAttribute("class");
            document.getElementById("icon_id").innerText = "";
        }
        else if (e.target.innerText == "X") {
            deleteLastString(result.value);
            document.getElementById("msg_span").innerText = "";
            document.getElementById("icon_id").removeAttribute("class");
            document.getElementById("icon_id").innerText = "";
        }
        else {
            result.value += '';
            //console.log(result.value);
            if (result.value.length < 6) {
                result.value += e.target.innerText;

            }

        }

    }

});

function textFontColorChanged(type, item_text, color, font) {
    document.getElementById(type).innerText = item_text;
    document.getElementById(type).style.color = color;
    //document.getElementById(type).style.fontSize = font;


}

function someRandomNumbers()
{
    let numArray=[];
    for(let i=0;i<900;i++)
    {
        numArray[i]=600000+i;
    }
    return numArray;
}


function deleteLastString(str) {
    if (str) {
        let len = str.length;
        let arr = [];
        for (let i = 0; i < len - 1; i++) {
            arr.push(str[i]);
        }
        document.getElementById("display_value").value = arr.join("");
    }



}
//console.log(someRandomNumbers());