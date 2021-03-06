
fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => {
            if(!response.ok) {
                console.log(response.statusText)
                throw Error
            }
            else return response.json()
        }
    )
    .then(data => console.log(data))
    .catch(error => console.error(error))

