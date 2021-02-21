<template>
  <div class="table">
    <div class="table__row table__row_title">
      <div class="table__col">
        <p class="table__inner table__inner_title">Stock</p>
      </div>
      <div class="table__col">
        <p class="table__inner table__inner_title">Current</p>
      </div>
      <div class="table__col">
        <p class="table__inner table__inner_title">Change</p>
      </div>
    </div>
    <div v-for="item, i in sharesData" :key="i" class="table__row">
      <div class="table__col">
        <p class="table__inner">{{ item.name }}</p>
      </div>
      <div class="table__col">
        <p class="table__inner">{{ item.current }}</p>
      </div>
      <div class="table__col">
        <p class="table__inner green" :class="{red: item.color}">{{ item.change }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    sharesData: Array
  }
}

</script>