
const con = document.querySelector('#continer')

async function getShows() {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows?page=1");
      addShows(response.data)
     
    } catch (error) {
      console.error(error);
    }
  }

const addShows = (shows) => {
  for(let show of shows){
    console.log(show.rating.average)
    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const rating = document.createElement('div');
    title.className = "showTitle";
    rating.className = "rating";
    if(show.rating.average !== null){

      rating.innerText = show.rating.average + "⭐";
      img.src = show.image.medium;
      title.innerText = show.name;
      card.append(img);
      card.append(title);
      card.append(rating);
      con.append(card);
    }
    
  }
}

getShows()