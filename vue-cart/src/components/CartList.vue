<template>
  <tbody>
    <tr v-for="cart in carts" :key="cart.id">
      <td><input type="checkbox" v-model="cart.isSelected" @change="handleChange"></td>
      <td>{{cart.goodsName}}</td>
      <td>￥{{cart.price.toFixed(2)}}</td>
      <td>
        <button :disabled="cart.number<=1" @click="cart.number--">-</button>
        <input style="width:60px;margin: 0 10px;text-align:center;" type="text" v-model="cart.number">
        <button @click="cart.number++">+</button>
      </td>
      <td>
        <span>{{getSubTotal(cart.price,cart.number)}}</span>
      </td>
      <td>
        <button @click="handleDel(cart.id)">删除</button>
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: 'cartList',
  props: ['carts', 'del', 'changeAll'],
  methods: {
    getSubTotal(price, number) {
      return (price * number).toFixed(2)
    },
    handleChange() {
      const check = this.carts.every(t => t.isSelected)
      this.changeAll(check)
    },
    handleDel(id) {
      this.del(id)
      this.carts.every(t => t.isSelected) ? this.changeAll(true) : null
    }
  }
}
</script>
