<template>
  <div class="pupolar-card flex bg-white rounded py-[17px] pl-[20px] ">
      <div class="mr-[10px] xl:mr-[20.8px] lg:mr-[15px] ">
          <span v-html="course.technology.icon"></span>
      </div>

      <div>
          <p class="font-600-14">{{ course.technology.name }}</p>

            <div class="flex">
                <div class="flex items-center font-norm-12">
                    <div class="w-[8px] h-[8px] rounded-50 bg-[#525ce5] mr-[6px]"></div>
                    <span class="mr-[10px]">300 Course</span>
                </div>

                <div class="flex items-center font-norm-12">              
                    <div class="w-[8px] h-[8px] rounded-50 bg-[#ffa82b] mr-[6px]"></div>
                    <span class="mr-[10px]">300 Course</span>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PopularCard',
    props: {
        course: Object
    }
};
</script>

<style lang="scss" scoped></style>
