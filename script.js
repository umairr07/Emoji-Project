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
        let dsn = document.createElement('td')
        let alis = document.createElement('td');

        emo.classList.add('emoji');
        dsn.classList.add('descr');
        alis.classList.add('aliases');

        emo.innerText = item.emoji;
        dsn.innerText = item.description;
        alis.innerText = item.aliases;


        newRow.appendChild(emo)
        newRow.appendChild(alis)
        newRow.appendChild(dsn)
        console.log(newRow);

        emoContainer.append(newRow);

    })

    let emojiClass = document.querySelectorAll('.emoji');

    emojiClass.forEach(emoo => {
        emoo.style.fontSize = '30px'
        emoo.style.padding = '10px'
    })

    let desClass = document.querySelectorAll('.descr');

    desClass.forEach(dpt => {
        dpt.style.fontSize = '20px'
        dpt.style.padding = '10px'
    })

    let aliClass = document.querySelectorAll('.aliases');

    aliClass.forEach(alii => {
        alii.style.fontSize = '20px'
        alii.style.padding = '10px'
    })
}

function findEmoji(e) {
    let val = e.target.value;
    displayEmoji(val);
}

window.addEventListener('load', () => displayEmoji(''));
search.addEventListener('keyup', findEmoji);