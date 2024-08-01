
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
    else document.getElementById("secret_key_value").value = "339962";


});

/* input keys and display value and check with secret key function */
const container_div = document.getElementById("input_output_div");
const result = document.getElementById("display_value");  
//let value = "";

container_div.addEventListener("click", (e) => {
let length_check="";

    if (e.target.matches("button")) {
        length_check=result.value +'';
        if(length_check.length>5 && e.target.innerText != "Clear" && e.target.innerText != "Submit" && e.target.innerText != "X") alert("Only 6 digits allowed");
        //console.log(e.target.innerText);
        //e.target.style.backgroundColor="red";
        //console.log(document.getElementById("result").innerText);
        if (e.target.innerText == "Submit") {
            try {
                result.innerText = eval(result.innerText);
            }
            catch (error) { result.innerText = "error"; }

        }

        else if (e.target.innerText == "Clear") 
            {
                result.value = '';
            }
            else if (e.target.innerText=="X")
            {
                deleteLastString(result.value);
            }
        else {
            result.value+='';
            //console.log(result.value);
            if (result.value.length < 6)
            {
                result.value += e.target.innerText;
                 
            }
               
        }

    }
    
});


function deleteLastString(str)
{  
    if(str)
        {
            let len = str.length;
            let arr = [];
            for (let i = 0; i < len-1; i++) {
                arr.push(str[i]);
            }
            document.getElementById("display_value").value=arr.join("") ;
        }   



}