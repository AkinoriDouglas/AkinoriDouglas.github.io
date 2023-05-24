const result = document.getElementById('result');

getData();

async function getData() {
    const res= await fetch('data.json')
    const {results}=await res.json()

    result.innerHTML=''
    results.forEach(contact=> {
        const li =document.createElement('li')

        listItems.push(li)

        li.innerHTML=`
        <div class="contact-details">
        <img src="${contact.picture.large}" "alt=${contact.picture.large}">
        <h3>${contact.name.first} ${contact.name.last}</h3>
        </div>
        <div class="joined-details">
        <span class="email">${contact.email}</span>
        </div>
        `
        result.appendChild(li)
    });
}

