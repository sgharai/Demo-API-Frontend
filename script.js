const dataFunc = () => {
    fetch('https://sleepy-sierra-09531.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{ hello }"})
    })

    .then(r => r.json())
    // .then(data => console.log('data returned:', data.data.hello))
    .then(data => document.getElementById("dataBox").innerHTML = `Sofia says: ${data.data.hello}`)

}