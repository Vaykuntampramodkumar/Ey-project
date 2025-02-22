import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/ban.jpeg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/veg.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">Explore a variety of delicious and healthy vegetarian recipes that are easy to make and full of flavor.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/non-veg.jpeg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Non-veg Recipies</h5>
        <p class="card-text">Enjoy a collection of mouth-watering non-vegetarian dishes, from chicken curries to grilled seafood..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/drink.jpeg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Beverage</h5>
        <p class="card-text">Stay refreshed with a variety of beverage recipes, from smoothies to exotic cocktails and traditional drinks.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/deserts.jpeg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Deserts</h5>
        <p class="card-text">Satisfy your sweet tooth with our delicious dessert recipes, including cakes, puddings, and pastries.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
