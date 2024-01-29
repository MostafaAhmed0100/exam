/* $("#myButton").click(function () {
    $("#hi").hide(400)
})

$("#myClose").click(function () {
    $("#hi").show(400)
})

let arr = []

const searchByName = document.querySelector("#searchByName")
const display = document.querySelector("#display")



searchByName.addEventListener("input", function(){

    getApi(searchByName.value)
}) */

async function getApi(searchName) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    const finalResponse = await response.json();
        arr = finalResponse
        console.log(arr);
        displayReasltSearch(arr)
  }


  function displayReasltSearch(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.meals.length; i++) {
      cartona += ` <div class="col-lg-3 g-3 cursorPointer">
          <div class="item-container rounded" onclick="getDetails(${arr.meals[i].idMeal})">
            <img
              src="${arr.meals[i].strMealThumb}"
              class="w-100 rounded"
              alt=""
            />
            <div class="layer rounded">
              <h2 class="text-dark text-center">${arr.meals[i].strMeal}</h2>
            </div>
          </div>
        </div>`;
    }
    display.innerHTML = cartona;
  }
  