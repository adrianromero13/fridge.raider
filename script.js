// get variables for input
const $runSearch = $('#run-search');
let ingredientsArr = [];

$runSearch.on()
let spoonURL = "https://api.spoonacular.com/food/products/search?" 
    + "q=" + "apiKey=3db2849d1aa54e739d00df4fa0d2205a";



// keep these comments for reference
// const edamamID = "1c01fad2";
// const edamamAPI = "ffbeaab2531fe96153c73abbf7d533f8";
$runSearch.on('click', function(event) {
    event.preventDefault();
    let $firstInput = $('#firstInput').val();
    let $secondInput = $('#secondInput').val();
    let $thirdInput = $('#thirdInput').val();
    let edamamURL = "https://api.edamam.com/search?"
        + "q=" + $firstInput + "&" + $secondInput + "&" + $thirdInput
        + "?app_id=1c01fad2&app_key=ffbeaab2531fe96153c73abbf7d533f8";

    let spoonURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
        + $firstInput + ",+" + $secondInput + ",+" + $thirdInput
        + "&apiKey=3db2849d1aa54e739d00df4fa0d2205a";
    
    console.log(edamamURL, spoonURL);

    $.ajax({
        url: edamamURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
    
          let suggestedRecipes = response.hits[0].recipe.url;
          let label = response.hits[0].recipe.label;
          console.log(suggestedRecipes);

          //create variables for div
        let $topChoice = $('#well-section');
        //create variable for href
        let $link = $('<a>');
        $link.attr("href", suggestedRecipes).text(label);


          //append suggestedRecipes to new
          $topChoice.append($link);
        
          
          //find images in api
          //set variable for div with class attr of row
          //set variable for div with column
          //set variable for image tag
          //append image using the image from api into this column
          
          //find ingredientlist in api
          //set variable for div
          
    });
});
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=6722b04f831c48d2b8b90e494cc56fd6








//THIS IS FOR CAROUSEL

// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel', options);
​
// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}
​
// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}