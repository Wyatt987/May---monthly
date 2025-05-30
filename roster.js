document.addEventListener("DOMContentLoaded", () =>  {

    const grid= document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-4 py-2'

            col.innerHTML = 
    `
    <div class="card h-100 shadow-sm position-relative">
        <div class="card-blur-content"> <!-- This div is used to create a blur effect on the card when the popup is open -->
            <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title mv-1">${p.firstName} ${p.lastName}</h5>
                <div class="badge badge-position text-dark badge-pos-${p.position}">${p.position}</div>
                <p class="small text-muted mb-0">Age ${p.age}</p>
                <button class="btn btn-primary mt-2" onclick="toggleBlur(this.closest('.card'))">More Details</button>
            </div>
        </div>
        <div class="popup d-none p-2 d-flex justify-content-center align-items-center bg-dark bg-opacity-25 position-absolute top-0 start-0 w-100 h-100">
            <p class="outlinedText">${p.detail}</p>
            <button class="btn btn-secondary btn-sm ms-2" onclick="closePopup(this.closest('.card'))">Close</button>
        </div>
    </div>
    `

            grid.appendChild(col)
    })
    }






    render(players)
} )

function toggleBlur(card) {
    card.classList.toggle('blur');
    const popup = card.querySelector('.popup'); // Find the popup within the card
    popup.classList.toggle('d-none'); 
}

function closePopup(card) {
    card.classList.remove('blur');
    const popup = card.querySelector('.popup');
    popup.classList.add('d-none');
}


