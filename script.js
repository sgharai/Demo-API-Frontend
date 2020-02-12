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