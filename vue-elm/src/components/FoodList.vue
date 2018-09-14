<template>
  <div class="food-list" ref='wrapper'>
    <div v-show="goods.length">
      <div class='food-tab' v-for="(good,ind) in goods" :key="good.id" :ref='`foodTab${ind}`'>
        <h3>{{good.name}}</h3>
        <div class='food' @click="changeShowDetail(food)" v-for="food in good.foods" :key="food.id">
          <img class='icon' :src="food.icon" alt="">
          <div class='food-info'>
            <h4>{{food.name}}</h4>
            <p>{{food.info}}</p>
            <p>
              <span>月售{{food.sellCount}}</span>
              <span>好评率{{food.rating}}%</span>
            </p>
            <span class="price">￥{{food.price}}</span>
            <Count :food='food' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import Count from './Count'
export default {
  name: 'foodList',
  props: ['changeActiveTabIndex', 'changeShowDetail'],
  components: {
    Count
  },
  computed: {
    goods() {
      return this.$store.state.goods.goods
    },
    offsetTopList() {
      let offsetTopList = []
      const tabs = document.querySelectorAll('.food-tab')
      for (let i = 0; i < tabs.length; i++) {
        offsetTopList.push(tabs[i].offsetTop - tabs[0].offsetTop)
      }
      return offsetTopList
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      })
      this.scroll.on('scrollEnd', pos => {
        this.changeActiveTabIndex(this.currentIndex(-pos.y))
      })
    })
  },
  methods: {
    currentIndex(y) {
      for (let i = 0; i < this.offsetTopList.length; i++) {
        // const offsetTop1 = this.offsetTopList[i]
        const offsetTop2 = this.offsetTopList[i + 1]
        if (!offsetTop2 || y < offsetTop2) {
          return i
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.food-list {
  flex-grow: 1;
  overflow: auto;
  padding-left: 2.5vw;

  > div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    .food-tab {
      width: 100%;
      h3 {
        margin: 0;
        padding: 2vw 4vw;
        font-size: 14px;
        color: #666;
        font-weight: 900;
      }
      .food {
        position: relative;
        width: 100%;
        display: flex;
        padding: 2.5vw;
        .icon {
          width: 25vw;
          height: 25vw;
          flex-shrink: 0;
          margin-right: 2.5vw;
        }
        .food-info {
          width: 100%;
          display: flex;
          flex-grow: 1;
          flex-direction: column;

          h4 {
            margin: 0;
            font-weight: 700;
            overflow: hidden;
            font-size: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 40vw;
            margin-bottom: 1vw;
          }
          p {
            margin: 0;
            font-size: 8px;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 1.1em;
            width: 40vw;
            padding: 1vw 0;
            > span:nth-child(1) {
              margin-right: 4px;
            }
          }
          .price {
            color: rgb(255, 83, 57);
            font-size: 16px;
            margin-top: 1vw;
          }
          .count {
            position: absolute;
            right: 2vw;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
