document.addEventListener("DOMContentLoaded", () =>  {

    const grid= document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-4 py-2'

            col.innerHTML = 
           col.innerHTML = 
            `
                <div class="card h-100 shadow-sm">
                    <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mv-1">${p.firstName} ${p.lastName}</h5>
                        <div class="badge badge-position text-dark badge-pos-${p.position}">${p.position}</div>
                        <p class="small text-muted mb-0">Age ${p.age}</p>
                        <button class="btn btn-primary mt-2" onclick="toggleBlur(this.closest('.card'))">More Details</button>
                    </div>
                 </div>
                </div>

            <div class="popup-box d-none justify-content-center align-items-center">
                <p>${p.detail}</p>
                <button class="btn btn-secondary btn-sm" onclick="closePopup(this.closest('.card'))">Close</button>
                </div>
            `

            grid.appendChild(col)
    })
    }






    render(players)
} )

function toggleBlur(card) {
    card.classList.toggle('blur')
    popup.classList.remove('d-none');
}


