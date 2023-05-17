const container = document.querySelector(".container");

const quote = document.getElementById("quote")
    // const quote = doucument.getElementById("quote");

const adviceText = document.getElementById("advice-span");

const imageBtn = document.getElementById("image")

imageBtn.addEventListener("click", getQuote);

function getQuote() {
    const res1 = fetch(`https://api.adviceslip.com/advice`)

    const res2 = res1.then(function(response) {
        console.log(response)
        return response.json()
    })

    res2.then(function(data) {
        console.log(data.slip)
        const dataAdvice = data.slip.advice
        console.log(dataAdvice)
        const dataId = data.slip.id
        console.log(dataId)

        adviceText.innerHTML = dataId
        quote.innerHTML = dataAdvice

    })
};

console.log(getQuote())

// function getQuote(advice) {
//     fetch(`https://api.adviceslip.com/${advice}`).then(function(response) {
//         console.log(response)
//         return response.json()
//     }).then(function(data) {
//         console.log(data)

//         const html = `
//     <article class="content">
//     <div id="advice">
//         <h5 class="advice-text">advice </h5>
//     </div>
//     <div id="quote" class="advice-quote">"Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up."</div>
//     </article>
//     `

//         container.insertAdjacentHTML("beforeend", html);
//     })

// }

// const html = `
//     <article class="content">
//     <div id="advice">
//         <h5 class="advice-text">advice </h5>
//     </div>
//     <div id="quote" class="advice-quote">"Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up."</div>
//     </article>
//     `

//     container.insertAdjacentHTML("afterbegin", html)

// //Methos 2
// async function getAdvice() {
//     try {
//         const response = await fetch("https://api.adviceslip.com/advice")

//         const data = await response.json()
//         console.log(data)
//         const id = data.slip.id
//         const advice = data.slip.advice

//         adviceText.textContent = advice
//         adviceId = "#" + id
//     } catch (e) {
//         console.log(e)
//     }
// }

// Button.addEventListener("click", getAdvice())