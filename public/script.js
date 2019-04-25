function onload() {
    let url = './sports/api/list-sports'
    let settings = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, settings)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(responseJSON => {
            displaySportList(responseJSON)
        })
}

function postSport(sportId, sportName) {
    let url = './sports/api/post-sport'
    let settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            id: sportId,
            name: sportName
        })
    }
}

function displaySportList(data) {
    document.getElementById('newList').innerHTML += '<ul>'
    data.sports.forEach(sport => {
        document.getElementById('newList').innerHTML += `<li>${sport.name}</li>`
    });
    document.getElementById('newList').innerHTML += '</ul>'
}

$(onload)