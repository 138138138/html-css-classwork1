function outputCountryBox(name, continent, cities, photos) {
  /* outputs list of cities for country */
  function outputCities(cities) {
    for (const city of cities) {
      document.write('<p>' + city + '</p>');
    }
  }

  /* outputs photos for country */
  function outputPhotos(photos) {
    for (const photo of photos) {
      document.write('<img class="photo" src="' + photo + '">');
    }
  }
  document.write('<div class="item">');
  document.write('<h2>' + name + '</h2>');
  document.write('<p>' + continent + '</p>');
  document.write('<div class="inner-box">');
  document.write('<h3>Cities</h3>');
  outputCities(cities);
  document.write('</div>');
  document.write('<div class="inner-box">');
  document.write('<h3>Popular Photos</h3>');
  outputPhotos(photos);
  document.write('</div>');
  document.write('<button>Visit</button>');
  document.write('</div>');
}
