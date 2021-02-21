<template>
  <div class="list">
    <ButtonShares @getData="getData"/>
    <TableShares v-if="sharesData.length" :sharesData="sharesData"/>
    <DataLoading v-else-if="loading"/>
    <NoData v-else/>
  </div>
</template>

<script>

import { payload } from '@/mocData/index.js'
import simulateAsyncReq from '@/plugins/getDataFunc.js'
import ButtonShares from '@/components/ButtonShares.vue'
import TableShares from '@/components/TableShares.vue'
import NoData from '@/components/NoData.vue'
import DataLoading from '@/components/DataLoading.vue'

export default {
  data() {
    return {
      response: null,
      loading: false,
      sharesData: []
    }
  },
  methods: {
    async getData() {
      if (this.sharesData.length) {
        this.sharesData = []
      }
      try {
        this.loading = !this.loading
        this.response = await simulateAsyncReq(payload)
        this.createArray()
        this.loading = !this.loading
      } catch {
        this.loading = !this.loading
        console.log('data loading error')
      }
    },
    createArray() {
      this.response.stocks.forEach((item, i) => {
        this.sharesData.push({
          name: this.response.stocks[i],
          current: Number(this.response.current[i].toFixed(2)),
          change: this.response.current[i] - this.response.start[i]
        })
      })
      this.sorting()
    },
    sorting() {
      for (let i = 0; i < this.sharesData.length; i++) {
        for (let j = 0; j < this.sharesData.length; j++) {
          if (this.sharesData[j].change < this.sharesData[j < this.sharesData.length - 1 ? j + 1 : j].change) {
            let satellite = this.sharesData[j]
            this.sharesData[j] = this.sharesData[j < this.sharesData.length - 1 ? j + 1 : j]
            this.sharesData[j < this.sharesData.length - 1 ? j + 1 : j] = satellite
          }
        }
      }
      this.transformation()
    },
    transformation() {
      this.sharesData.forEach(item => {
        if (item.change > 0) {
          item.change = '+' + item.change.toFixed(2)
        } else {
          item.change = item.change.toFixed(2)
          item.color = 'red'
        }
      })
    }
  },
  components: {
    ButtonShares,
    TableShares,
    DataLoading,
    NoData
  }
}
</script>