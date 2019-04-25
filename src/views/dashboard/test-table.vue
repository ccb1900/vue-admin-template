<template>
  <div>
    <div>
      <el-form :inline="true">
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item prop="" :label="$t('search')">
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{ $t('search') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="table.data" border>
        <el-table-column prop="title" :label="$t('module.test.table.title')" />
        <el-table-column prop="title" :label="$t('module.test.table.title')">
          <template>
            <i class="el-icon-error" />
            <i class="el-icon-success" style="color:red" />
          </template>
        </el-table-column>
        <el-table-column :label="$t('op')">
          <template slot-scope="s">
            <span>{{ s.row }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        class="pagination"
        :current-page="table.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getList } from '../../api/test'
export default {
  data() {
    return {
      table: {
        data: [],
        total: 0,
        page: 1,
        size: 10,
        search: ''
      }
    }
  },
  mounted() {
    console.log(this.$t)
    this.getList()
  },
  methods: {
    getList() {
      getList({
        limit: this.table.size,
        page: this.table.page,
        search: this.table.search
      }).then(res => {
        console.log(res)
        this.table = Object.assign({}, this.table, {
          total: res.data.total,
          data: res.data.items
        })
      })
    },
    handleCurrentChange(page) {
      this.table = Object.assign({}, this.table, {
        page: page
      })
      this.getList()
    },
    handleSizeChange(size) {
      this.table = Object.assign({}, this.table, {
        size: size
      })
      this.getList()
    },
    handleSearch() {
      this.table = Object.assign({}, this.table, {
        search: ''
      })
      this.getList()
    }
  }
}
</script>

<style scoped>
.pagination {
    margin-top: 10px;
}
</style>
