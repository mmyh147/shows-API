
const con = document.querySelector('#continer')


async function getShows() {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows?page=1");
      addShows(response.data)
     
    } catch (error) {
      console.error(error);
    }
  }


  
  // document.getElementsByClassName('card')[0].addEventListener("click", function(e) {
  //   console.log(e.currentTarget);
  // });
 function eventHandler(event) {
}
const addShows = (shows) => {
  console.log(shows)
  for(let show of shows){
    //console.log(show)
    //card.style = "cursor: pointer;";
    //const cardID = document.createElement()
    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const rating = document.createElement('div');
    const showPage = document.createElement('a')
    card.className = "card";
    title.className = "showTitle";
    rating.className = "rating";
    // showPage.className = "fill-div"
    if(show.rating.average !== null){
      card.id = show.id;
      //console.log(card.id);
      rating.innerText = show.rating.average + "⭐";
      img.src = show.image.medium;
      title.innerText = show.name;
      // showPage.href = "google.com";
      // card.append(showPage);
      //card.onclick = "location.href='#';"
      card.append(img);
      card.append(title);
      card.append(rating);
      con.append(card);
    }
    
  }
}

getShows()
const cond = document.querySelector('div');
cond.addEventListener('click', (e) => {
    console.log(e.target.parentNode.id);
    localStorage["selectShow"] = e.target.parentNode.id;
    
    window.location.href = "./showPage.html";
  });

