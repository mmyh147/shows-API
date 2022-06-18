
const showID = localStorage["selectShow"];

async function getShows() {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${showID}`);
      showPage(response.data)
     
    } catch (error) {
      console.error(error);
    }
  }
  const addShows = (shows) => {
    console.log(shows)
  }
  getShows();

 const showPage = (show) => {
     console.log(show)
    const cover = document.querySelector('.cover  img');
    const showName = document.querySelector('.showDit  h1');
    const showDes = document.querySelector('.showDes');
    const rating = document.querySelector('.rating');
    showName.innerText = show.name;
    showDes.innerHTML = show.summary;
    rating.innerText = show.rating.average + "⭐";
    console.log(cover.src);
    cover.src = show.image.medium;
    console.log(cover.src)
  }