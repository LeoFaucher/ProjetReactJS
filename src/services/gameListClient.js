import axios from 'axios'

const URL = '/igdb'
const API_KEY = 'f11280f300dcab5fea1204b95db61e5b'

// return les name contenu dans l'api d'igdb
export async function getGamesNameList() {
    const { data } = await axios({
        url: URL + '/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "fields *; sort popularity desc; limit 50;"
    })
    return data
}
export async function getCover() {
    const { cover } = await axios({
        url: URL + '/cover',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "fields *; sort popularity desc; limit 50;"
    })
    return cover
}