<template>
  <tbody>
    <tr v-for="cart in carts" :key="cart.id">
      <td><input type="checkbox" v-model="cart.isSelected"></td>
      <td>{{cart.goodsName}}</td>
      <td>￥{{cart.price.toFixed(2)}}</td>
      <td>
        <button>-</button>
        <input style="width:60px;margin: 0 10px;text-align:center;" type="text" v-model="cart.number">
        <button>+</button>
      </td>
      <td>
        <span>{{getSubTotal(cart.price,cart.number)}}</span>
      </td>
      <td>
        <button>删除</button>
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: 'cartList',
  props: ['carts'],
  methods: {
    getSubTotal(price, number) {
      return (price * number).toFixed(2)
    }
  }
}
</script>
