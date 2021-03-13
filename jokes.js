const ul = document.querySelector("#joke-list")
const punchLine = []

const createJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
        if(!res.ok) {
            throw Error("Not today Satan!")
        } 
        return res.json();
    }).then(res => {
        res.forEach(joke => {
            const li = document.createElement("li");
            punchLine.push(joke.punchline);
            li.textContent = joke.setup;
            ul.appendChild(li)
        });
        // debugger 
        // console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
    console.log(punchLine)
}
createJokes();

ul.addEventListener("click", (e) => {
    const li = e.target;
    // fetch
})