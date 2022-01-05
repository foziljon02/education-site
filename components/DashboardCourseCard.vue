<template>
  <div class="dashboard-card rounded bg-white py-[15px] px-[20px]">
    <div class="flex justify-between mb-[9px]">
      <template v-if="dashboard">
        <p
          :class="[
            course.type == 'Frontend Development' ? 'red-design' : '',
            course.type == 'UI/UX Design' ? 'yellow-design' : '',
            course.type == 'Backend Development' ? 'blue-design' : '',
            'text-xs self-start xl:pt-[4px] xl:pb-[4px] xl:pl-[5px] xl:pr-[2px]',
          ]"
        >
          {{ course.type }}
        </p>
        <span v-html="course.technology.icon"></span>
      </template>

      <template v-else>
        <span v-html="course.technology.icon"></span>
        <p
          :class="[
            course.status == 'Ongoing' ? 'blue-design' : '',
            course.status == 'Done' ? 'yellow-design' : '',
            course.status == 'Paused' ? 'red-design' : '',
            dashboard ? '' : 'font-500-13',
            'text-xs self-start xl:pt-[4px] xl:pb-[4px] xl:pl-[5px] xl:pr-[2px]',
          ]"
        >
          {{ course.status }}
        </p>
      </template>
    </div>

    <p
      :class="[dashboard ? 'mb-[9px]': 'mb-[11px]', 'dashboard-card__title two-line-dots font-semibold text-[12px] xl:text-[14px] md:text-[13px] leading-[24px] w-[75%]']"
    >
      <NuxtLink to="/courseinfo">
      {{ dashboard ? course.name : course.technology.name }}
      </NuxtLink>
    </p>

    <div v-if="!dashboard" class="w-[15px] h-[1px] bg-[#2dca8c] mb-[10px]"></div>

    <p
      :class="[
        dashboard ? 'h-[48px]' : 'h-[72px]',
        'dashboard-card__text two-line-dots text-[10px] xl:text-[12px] md:text-[12px] mb-[19px] w-[90%]',
      ]"
    >
      {{ course.description }}
    </p>

    <Progress :percent="course.progress" />

    <div class="flex mt-[26px]" v-if="!dashboard">
      <img class="w-[22px] h-[22px] rounded-50 mr-[10px] " src="https://thispersondoesnotexist.com/image" alt="instructor">
      <p class="font-600-12">{{ course.instructor.name }}</p>
    </div>
  </div>
</template>

<script>
import Progress from "./Progress.vue";
export default {
  name: "DashboardCourseCard",
  components: { Progress },
  props: {
    course: Object,
    dashboard: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
