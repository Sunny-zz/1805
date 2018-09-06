<template>
  <div class="cart-wrap">
    <table>
      <thead>
        <td><input type="checkbox">全选</td>
        <td>商品</td>
        <td>单价</td>
        <td>数量</td>
        <td>小计</td>
        <td>操作</td>
      </thead>
      <CartList :carts="carts" />
      <tfoot>
        <td><input type="checkbox">全选</td>
        <td>
          <button>删除选中的商品</button>
        </td>
        <td>
          <span>已选择0件商品</span>
        </td>
        <td>总价:$0.00</td>
        <td colspan="2">
          <button>结算</button>
        </td>
      </tfoot>
    </table>
  </div>
</template>

<script>
import CartList from './CartList'
export default {
  name: 'cart',
  data: () => ({
    carts: [
      {
        id: '12312',
        goodsName: 'iphone',
        price: 100,
        number: 1,
        isSelected: true
      },
      {
        id: '14224',
        goodsName: 'iphone x',
        price: 1000,
        number: 1,
        isSelected: true
      }
    ]
  }),
  components: {
    CartList
  }
}
</script>

<style>
.cart-wrap {
  display: flex;
  margin-top: 40px;
}
.cart-wrap table {
  border-collapse: collapse;
  width: 85%;
  margin: 0 auto;
}
.cart-wrap table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
</style>
