import axios from 'axios'

const URL = '/igdb'
const API_KEY = 'f11280f300dcab5fea1204b95db61e5b'

// return les name contenu dans l'api d'igdb
export async function getGamesNameList () {
    const {data} = await axios({
        url: URL + '/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "fields name, popularity; sort popularity desc; limit 50;"
      })

      return data
  }
// return les cover contenu dans l'api d'igdb
  export async function getGamesCoverList () {
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

  export async function getGamesDetailsList(){

    const {data} = await axios({
        url: URL + '/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
        data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites; limit 50;"
    })
    return data   
}
