var frozen = {
  stars:5,
  title:"Frozen",
  hasWatched:true,
};

var moana= {
  stars:5,
  title:"Moana",
  hasWatched:true,
};
var gladiator= {
  stars:4.5,
  title:"Gladiator",
  hasWatched:true,
};
var theNotebook={
  stars:0,
  title:"The Notebook",
  hasWatched:false
}
var movies = [frozen,moana,gladiator,theNotebook];

// movieDB[i].stars
// movieDB[i].title
// movieDB[i].hasWatched

movies.forEach(function dbList(e){
  if (e.hasWatched === true){
    console.log("You have watched "+ e.title + " - " + e.stars + " stars");
  }
  else {
    console.log("You have not watched "+ e.title + " - " + e.stars + " stars");
  }
})
