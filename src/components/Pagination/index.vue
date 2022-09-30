<template>
  <div class="pagination">
    <!-- <h1>{{startNumAndEndNum}}---当前页{{pageNo}}</h1> -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo-1)">上一页</button>
    <button
      v-show="startNumAndEndNum.start > 1"
      @click="$emit('getPageNo',1)"
    >
      1
    </button>
    <button v-show="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-show="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{active:page==pageNo}">
      {{ page }}
    </button>

    <button v-show="startNumAndEndNum.end < totalPage - 1">···</button>
    <!-- end<=31 totol32 -->
    <button v-show="startNumAndEndNum.end < totalPage"  @click="$emit('getPageNo',totalPage)">{{ totalPage }}</button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <!-- <h1>{{ startNumAndEndNum }}</h1> -->
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { totalPage, continues, pageNo } = this;
      let start = 0,
        end = 0;
      if (continues > totalPage) {
        //1 2 3 4 5
        start = 1;
        end = totalPage;
      } else {
        // 1 ... 3 4 5 6 7 ... 9
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          //-1 0 1 2 3
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          // 25 26 27 28 29 ... 27
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
