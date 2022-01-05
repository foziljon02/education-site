<template>
  <div class="progress flex items-center rounded bg-[#e9eafc] h-[5px]">
    <div
      class="progress__completed rounded h-[5px] bg-[#2f3ced]"
      :style="{ width: percent + '%' }"
    ></div>
    <span v-if="percent != 100" class="progress__mark bg-white ml-[-8px]"></span>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
      percent: Number
  }
};
</script>

<style lang="scss" scoped></style>
