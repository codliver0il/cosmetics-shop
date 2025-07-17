<template>
  <!-- товарка -->
  <div class="container">
    <div class="inner">
      <div class="item">
        <img
          src="static/images/123.jpg"
          alt="Матирующий крем SPF 15"
          class="img"
        />
        <span class="price">4225</span>
        <span class="currency">₽</span>
        <span>/</span>
        <span>75мл</span>
        <span class="name">Матирующий крем SPF 15 Comodex</span>
        <p>
          Увлажняет кожу, повышает упругость и эластичность, ускоряет
          заживление, защищает от солнечных лучей, и матирует кожу.
        </p>
        <a href="Product.html">
          <button class="btn" id="btn1">Add</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.container {
  margin-top: 50px;
  width: 300px;
  /* Ограничение по ширине */
  padding-top: 5px;
  box-sizing: border-box;
  /* Учет отступов в общей ширине */
}

.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 271.2px);
}

.img {
  border-style: solid;
  border-width: 0.1px;
  border-radius: 10px;
  width: 145.5px;
}

.item {
  width: 146px;
  text-align: center;
}

/*кнопка add*/
.btn {
  position: relative;
  top: 5px;
  padding: 9px 58.5px;
  border: none;
  background: #7e1f61;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;

  transition: background 0.2s linear;
}

.btn:hover {
  background: #55c555;
  color: #fff;
}

.usercard {
  text-align: center;
}

.item {
  border-style: solid;
  border-width: 0.5px;
  border-radius: 10px;
  margin: 1.5px;
  background-color: #d8c6c6;
  text-transform: none;
}

/*название товара*/
span {
  size: 3px;
  font-style: oblique;
  font-weight: bolder;
}

/*описание товара*/
p {
  margin: 0;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/*цена и валюта*/
.price {
  font-size: 20px;
  font-weight: bold;
}

.currency {
  font-size: 12px;
}
</style>
