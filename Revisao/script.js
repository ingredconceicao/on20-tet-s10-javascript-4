const container = document.getElementById("demo")

async function getCards(){
    try{
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        const json = await response.json()
        const cards = json.data
        const oursCards = cards.slice(100,115)

        oursCards.map((card)=>{
            const section = document.createElement('div');
            const title = document.createElement('h2');
            const type = document.createElement('p');
            const descripition = document.createElement('p')
            const image = document.createElement('img');


            section.setAttribute('class', 'card')
            title.setAttribute('class', 'title')
            type.setAttribute('class', 'type')
            descripition.setAttribute('class', 'descripition')
            image.setAttribute('class', 'image')

            title.innerText = card.name
            type.innerText = card.type
            descripition.innerHTML = card.descripition
            image.setAttribute('src', card.card_images[0].image_url)

            container.appendChild(section);
            section.appendChild(image);
            section.appendChild(title);
            section.appendChild(type);
            section.appendChild(descripition);
        })
    }
    catch(err){
        console.log("Capturei um erro", err)
    }
}

getCards()

// {
//     data:[
//         {},
//         {},
//         {}
//     ]
// }