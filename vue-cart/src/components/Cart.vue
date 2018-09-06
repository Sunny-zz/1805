<template>
  <div class="cart-wrap">
    <table>
      <thead>
        <td><input @change="handleAll" type="checkbox" v-model="isAllSelected">全选</td>
        <td>商品</td>
        <td>单价</td>
        <td>数量</td>
        <td>小计</td>
        <td>操作</td>
      </thead>
      <CartList :carts="carts" :del="del" :delSelected="delSelected" :changeAll="changeAll" />
      <tfoot>
        <td><input @change="handleAll" type="checkbox" v-model="isAllSelected">全选</td>
        <td>
          <button @click="delSelected">删除选中的商品</button>
        </td>
        <td>
          <span>已选择{{getTotalObject.number}}件商品</span>
        </td>
        <td>总价:${{getTotalObject.total.toFixed(2)}}</td>
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
    ],
    isAllSelected: true
  }),
  computed: {
    // getSelectedNum() {
    //   return this.carts.reduce(
    //     (result, cart) => (cart.isSelected ? result + cart.number * 1 : result),
    //     0
    //   )
    // },
    // getTotal() {
    //   return this.carts.reduce(
    //     (result, cart) =>
    //       cart.isSelected ? result + cart.number * cart.price : result,
    //     0
    //   )
    // }
    getTotalObject() {
      return this.carts.reduce(
        (object, cart) => {
          return cart.isSelected
            ? {
                number: object.number + cart.number * 1,
                total: object.total + cart.number * cart.price
              }
            : object
        },
        {
          number: 0,
          total: 0
        }
      )
    }
  },
  methods: {
    del(id) {
      this.carts.splice(this.carts.findIndex(t => t.id === id), 1)
    },
    delSelected() {
      this.carts = this.carts.filter(t => !t.isSelected)
    },
    handleAll() {
      this.carts = this.carts.map(t => {
        t.isSelected = this.isAllSelected
        return t
      })
    },
    changeAll(checked) {
      this.isAllSelected = checked
    }
  },
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
