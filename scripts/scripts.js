// select buy ticket and scroll it down to the ticket secton
function firstScroll(){
    document.getElementById('scrollView').scrollIntoView({ behavior: "smooth"});
}
let count = 0;
// 1.select btn individually
const allBtn = document.getElementsByClassName("add-btn");
// console.log(allBtn);

for(const btn of allBtn){
    
            btn.addEventListener("click", function (e){
            count+=1;
            if(count > 4){
                return;
             }
            btn.style.color = 'white';
            btn.style.backgroundColor = '#1DD100';
            setInerText("seat-count",count)
            setInerText("seat-left", 40-count)
            if(btn.style.backgroundColor == '#1DD100')
            {
                btn.disabled = true;
                return;
            }
    
             const seatName = e.target.childNodes[0].textContent;
             const selectedContainer = document.getElementById("selected-container");
             const addedSeatInfo = document.getElementById("add-line");
             const li = document.createElement("li");
             const h1 = document.createElement("h1");
             h1.innerText = seatName
             const h2 = document.createElement("h2");
             h2.innerText = "Economy";
             const h3 = document.createElement("h3");
             h3.innerText = "550"
             
             li.appendChild(h1);
             li.appendChild(h2);
             li.appendChild(h3);
             selectedContainer.appendChild(li);
             setInerText("total-price",count*550);
             setInerText("grand-total", count*550);
             

            });
        }

function next(){
    hideElementById("main-section");
    showElementById("success-page");
   }
