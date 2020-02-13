const dataFunc = () => {
    fetch('https://sleepy-sierra-09531.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{ users{name} }"})
    })

    .then(r => r.json())
    .then(data => document.getElementById("dataBox").innerHTML = `Sofia says: ${data.data.users.map(el => document.createElement("div").innerHTML = el.name)}`)

    // data.data.users.map(el => document.createElement(div).innerHTML = el)

    // document.createElement
    // .then(data => console.log(data))


}

window.onload = () => {
    const githubDownload = document.getElementById("githubDownload");
    githubDownload.addEventListener("click", () =>{
        alert("Are you sure you want to leave this page?")
    });
}



// const handleScroll = () => {
//     window.scroll(0,0)
// }

// let doggie = {
//     name: "Dog"
// }
// let storeDog = JSON.stringify(doggie)
// localStorage.setItem('my dog', storeDog)

// const handleStorage = () => {
//     console.log(localStorage.getItem('my dog'))
// }