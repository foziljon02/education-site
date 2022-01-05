<template>
  <div class="course-info">
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-full md:col-span-8">
        <div>
          <iframe
            class="rounded w-[100%] h-[353px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q7AOvWpIVHU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="mt-[31px] w-[100%]">
          <div class="flex mb-[20px]">
            <NuxtLink to="/courseinfo/overview">
              <p
                :class="[
                  $route.name == 'courseinfo-overview'
                    ? 'border-b-2 border-[#2f3ced]'
                    : 'text-[#5a7180]',
                  'font-600-13 min-w-[70px] text-center mr-[50px] pb-[10px]',
                ]"
              >
                Overview
              </p>
            </NuxtLink>

            <NuxtLink to="/courseinfo/faq">
              <p
                :class="[
                  $route.name == 'courseinfo-faq'
                    ? 'border-b-2 border-[#2f3ced]'
                    : 'text-[#5a7180]',
                  'font-600-13 min-w-[70px] text-center mr-[50px] pb-[10px]',
                ]"
              >
                FAQ
              </p>
            </NuxtLink>

            <NuxtLink to="/courseinfo/announcements">
              <p
                :class="[
                  $route.name == 'courseinfo-announcements'
                    ? 'border-b-2 border-[#2f3ced]'
                    : 'text-[#5a7180]',
                  'font-600-13 min-w-[70px] text-center mr-[50px] pb-[10px]',
                ]"
              >
                Announcements
              </p>
            </NuxtLink>

            <NuxtLink
              :class="[
                $route.name == 'courseinfo-reviews'
                  ? 'border-b-2 border-[#2f3ced]'
                  : 'text-[#5a7180]',
                'font-600-13 min-w-[70px] cursor-pointer text-center mr-[50px] pb-[10px]',
              ]"
              to="/courseinfo/reviews"
            >
              <p>Reviews</p>
            </NuxtLink>
          </div>
          <NuxtChild />
        </div>
      </div>

      <div class="col-span-full md:col-span-4">
        <div class="">
          <div
            v-for="topic in topics"
            :key="topic.id"
            :class="[
              topic.section
                ? 'py-[25px] pl-[15px] my-[1px]'
                : 'pt-[20px] pl-[30px] ',
              topic.current ? 'bg-[#2f3ced] text-white' : '',
              'bg-white flex items-baseline',
            ]"
          >
            <div class="flex items-center">
              <input
                v-if="!topic.section"
                type="checkbox"
                class="scale-[1.2] mr-[19.2px]"
              />
            </div>
            <div class="">
              <p class="font-500-13">
                {{ topic.name }}
              </p>
              <div class="flex items-center">
                <svg
                  class="mr-[7.2px]"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.88 12.76C3.63257 12.76 1 10.1274 1 6.88C1 3.63257 3.63257 1 6.88 1C10.1274 1 12.76 3.63257 12.76 6.88C12.76 10.1274 10.1274 12.76 6.88 12.76ZM5.87017 9.87958C5.58437 10.0641 5.20307 9.98206 5.01852 9.69627C4.95421 9.59668 4.92 9.48065 4.92 9.3621V4.39785C4.92 4.05764 5.19579 3.78185 5.536 3.78185C5.65455 3.78185 5.77058 3.81606 5.87017 3.88037L9.71393 6.36249C9.99973 6.54705 10.0818 6.92834 9.89725 7.21414C9.84984 7.28756 9.78735 7.35005 9.71393 7.39746L5.87017 9.87958ZM9.41014 6.83293C9.43612 6.84971 9.44358 6.88437 9.42681 6.91035C9.4225 6.91703 9.41681 6.92271 9.41014 6.92702L5.56638 9.40914C5.5404 9.42592 5.50573 9.41846 5.48896 9.39248C5.48311 9.38343 5.48 9.37288 5.48 9.3621V4.39785C5.48 4.36692 5.50507 4.34185 5.536 4.34185C5.54678 4.34185 5.55733 4.34496 5.56638 4.35081L9.41014 6.83293Z"
                    fill="#FFA82B"
                  />
                </svg>

                <p
                  :class="[
                    !topic.current ? 'text-[#547180]' : '',
                    'font-norm-12 ',
                  ]"
                >
                  {{ topic.videos }} video | {{ topic.length }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseInfo",
  layout: "custom",
  head() {
    return {
      title: "Course Details",
    };
  },
  computed: {
    topics() {
      return this.$store.state.topics.topics;
    },
  },
};
</script>

<style lang="scss" scoped></style>
