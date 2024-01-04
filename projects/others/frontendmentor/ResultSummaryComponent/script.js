const scores = document.querySelector('.scores');
let score = ``;
function numberToWords(num) {
    const words = [
        "", "one", "two", "three", "four"
    ];

    if (num >= 1 && num <= 20) {
        return words[num];
    } else {
        return "Number out of range";
    }
}

async function loadJson() {
    try {
        let response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        // Teraz możesz użyć zmiennej data, która zawiera dane JSON
        console.log(data); // wyświetla dane w konsoli

        console.log(data.length);

        for(let i =0; i <data.length; i++)
            score += `
                <div class="score ${numberToWords(i+1)}">
                    <img src="${data[i].icon}" alt="">
                    <h2>${data[i].category}</h2>
                    <p><span class="dark">${data[i].score} </span>/ 100</p>
                </div>
                
            `;


        scores.innerHTML += score;


        data.forEach(item => {
            console.log(item.category);
        });
        //console.log(JSON.parse(data));
    } catch (error) {
        console.error('Błąd przy wczytywaniu JSON:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadJson);