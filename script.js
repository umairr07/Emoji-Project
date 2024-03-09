let emoContainer = document.getElementById('emoContainer');
let search = document.getElementById('search-emo');

function displayEmoji(query) {
    emoContainer.innerHTML = "";
    let filterData = emojiList.filter(e => {
        if (e.description.indexOf(query) != -1)
            return true
    })


    filterData.forEach(item => {
        let newRow = document.createElement('tr');
        let emo = document.createElement('td')
        // let dsn = document.createElement('td')
        // let alis = document.createElement('td');

        emo.classList.add('emoji');
        // dsn.classList.add('descr');
        // alis.classList.add('aliases');

        emo.innerText = item.emoji;
        // dsn.innerText = item.description;
        // alis.innerText = item.aliases;


        newRow.appendChild(emo)
        // newRow.appendChild(alis)
        // newRow.appendChild(dsn)
        console.log(newRow);

        emoContainer.append(newRow);

    })

    let emojiClass = document.querySelectorAll('.emoji');

    emojiClass.forEach(emoo => {
        emoo.style.fontSize = '30px'
        emoo.style.padding = '10px'
    })

    // let desClass = document.querySelectorAll('.descr');

    // desClass.forEach(dpt => {
    //     dpt.style.fontSize = '20px'
    //     dpt.style.padding = '10px'
    // })

    // let aliClass = document.querySelectorAll('.aliases');

    // aliClass.forEach(alii => {
    //     alii.style.fontSize = '20px'
    //     alii.style.padding = '10px'
    // })
}

function findEmoji(e) {
    let val = e.target.value;
    displayEmoji(val);
}

let all = document.getElementById('all');
let addAll = ""
all.addEventListener('click', () => {
    emoContainer.innerHTML = "";
    emojiList.forEach((aAll) => {
        addAll += `
            <div id="row1">
                <p style="font-size: 30px; padding: 10px">${aAll.emoji}</p>
            </div>`
    })

    emoContainer.innerHTML = addAll;
})

let smile = document.getElementById('smile');
let addSmile = ""
smile.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((smi) => {
        if (smi.category === "Smileys & Emotion") {
            addSmile += `
            <div id="row2">
                <p style="font-size: 30px; padding: 10px">${smi.emoji}    
                </p>
            </div>`
        }
    })
    emoContainer.innerHTML = addSmile;
})

let peoples = document.getElementById('ppls')
let addPeeps = ""
peoples.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((p) => {
        if (p.category === "People & Body") {
            addPeeps += `
                <div>
                    <p style="font-size: 30px; padding: 10px">${p.emoji}</p>
                </div>
            `
        }
    })
    emoContainer.innerHTML = addPeeps;
})


let animals = document.getElementById('anis')
let addAnims = ""
animals.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((an) => {
        if (an.category == "Animals & Nature") {
            addAnims += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${an.emoji}</p>
            </div>
            `

        }
    })
    emoContainer.innerHTML = addAnims;
})


let foods = document.getElementById('food')
let addFood = ""
foods.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((fd) => {
        if (fd.category == "Food & Drink") {
            addFood += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${fd.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addFood;
})

let travell = document.getElementById('trvl')
let addTravell = ""
travell.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((tr) => {
        if (tr.category == "Travel & Places") {
            addTravell += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${tr.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addTravell;
})

let activities = document.getElementById('act')
let addAct = ""
activities.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((at) => {
        if (at.category == "Activities") {
            addAct += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${at.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addAct;
})

let objects = document.getElementById('obj')
let addObj = ""
objects.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((ob) => {
        if (ob.category == "Objects") {
            addObj += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${ob.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addObj;
})


let symbolss = document.getElementById('sym')
let addSymbols = ""
symbolss.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((sy) => {
        if (sy.category == "Symbols") {
            addSymbols += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${sy.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addSymbols;
})

let flagss = document.getElementById('flags')
let addFlags = ""
flagss.addEventListener('click', () => {
    emoContainer.innerHTML = ""
    emojiList.forEach((fl) => {
        if (fl.category == "Flags") {
            addFlags += `
            <div>
                 <p style="font-size: 30px; padding: 10px">${fl.emoji}</p>
            </div>
            `
        }
    })
    emoContainer.innerHTML = addFlags;
})

window.addEventListener('load', () => displayEmoji(''));
search.addEventListener('keyup', findEmoji);