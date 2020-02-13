// get variables for input
const $runSearch = $('#run-search');
let ingredientsArr = [];

$runSearch.on()
let spoonURL = "https://api.spoonacular.com/food/products/search?" 
    + "q=" + "apiKey=6722b04f831c48d2b8b90e494cc56fd6";



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
        + "&apiKey=6722b04f831c48d2b8b90e494cc56fd6";
    
    console.log(edamamURL, spoonURL);
});
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=6722b04f831c48d2b8b90e494cc56fd6

