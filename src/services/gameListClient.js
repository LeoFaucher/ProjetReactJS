import axios from 'axios'

const URL = '/igdb'
const API_KEY = 'f11280f300dcab5fea1204b95db61e5b'

export async function getGamesNameList (games) {
    const {data} = await axios({
        url: URL + '/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "name"
      })

      return data
  }

  export async function getGamesCoverList (games) {
    const {data} = await axios({
        url: URL + '/covers',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "fields alpha_channel,animated,game,height,image_id,url,width;"
      })

      return data
  }
