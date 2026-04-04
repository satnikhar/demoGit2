const availableKeywords = [
    'NDPS', 
    ' PMLA', 
    'Trust and Property Registration',
     'where', 
    'where can I contact you', 
    'Do you handle Sexual harrassment cases',
     'Do you handle Rape cases',
     'Labour court cases',
     'stalking',
     'cyber law',
     'voyerisum',
     'rape case',
     'Housing Society matters',
     'Family law',
     'Divorce',
    ];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){ 
    alert("hello");

let result = [];
let input = inputBox.value;

if(input.length) {
    result = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());

    });
    // console.log(result);
}
display(result);
}


if(!result.length){
    resultsBox.innerHTML = "";
}
function display(result){
    const content = result.map((list)=>{
        return "<li onClick = selectInput(this)>" + list + "</li>";

    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = "";
}

