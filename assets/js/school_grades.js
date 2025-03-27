// document.addEventListener("DOMContentLoaded", () => {
//     const grades = [
//         { id: 9, name: "Grade 9", link: "grade9.html", icon: "fas fa-9" },
//         { id: 10, name: "Grade 10", link: "grade10.html", icon: "fas fa-10" },
//         { id: 11, name: "Grade 11", link: "grade11.html", icon: "fas fa-11" },
//         { id: 12, name: "Grade 12", link: "grade11.html", icon: "fas fa-12" },
//         { id: 13, name: "Grade 13", link: "grade11.html", icon: "fas fa-13" }

//     ];

//     const container = document.getElementById("gr_rep");
//     container.innerHTML = ""; // Clear previous content

//     grades.forEach(grade => {
//         const card = document.createElement("a");
//         card.href = grade.link;
//         card.classList.add("grades");
 
//         card.innerHTML = `
            
//                 <div class="gr-logo">
//                     <i class="${grade.icon}"></i>
//                 </div>
//                 <h4 class="gr-name">${grade.name}</h4>
            
//         `;

//         container.appendChild(card);
//     });
// });
