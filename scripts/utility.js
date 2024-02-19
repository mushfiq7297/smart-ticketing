 function  setInerText(id, value){
    document.getElementById(id).innerText = value;
}


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// for(const btn of allBtn){
//     btn.addEventListener("click", function() {
//         console.log("click korsi");
//     })
// }

// 2.remove beckground and text color 
// 3.cahnge the count of getselected and seatsnumber
// 4.add extra line in ticket info 