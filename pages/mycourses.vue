<template>
  <div class="my-courses">
    <div class="flex items-center justify-between">
      <p class="font-norm-16">
        My Courses for <span class="font-bold">"All Course"</span>
      </p>
      <div class="flex items-center mb-[40px]">
        <div class="flex bg-white p-[10px]">
          <p class="font-norm-13 text-[#58606a]">Sort By:</p>
          <select class="font-600-13 bg-[white]">
            <option value="all_courses">All Courses</option>
            <option value="popular">Popular</option>
            <option value="Trending">Trending</option>
          </select>
        </div>

        <div
          class="w-[42px] cursor-pointer h-[42px] bg-white mx-[10px] flex items-center justify-center"
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.21036 6.5179V10.2349C8.21036 10.3686 8.13715 10.4908 8.02126 10.5506L5.28469 11.9623C5.05725 12.0796 4.78964 11.909 4.78964 11.6466V6.5179L0.0779714 0.576415C-0.104769 0.345978 0.0541396 0 0.34272 0H12.6573C12.9459 0 13.1048 0.345978 12.922 0.576415L8.21036 6.5179Z"
              fill="#CBD5DE"
            />
          </svg>
        </div>

        <div
          v-on:click="listView()"
          :class="[
            list ? 'bg-[blue] text-white' : 'bg-white text-[#CBD5DE]',
            'w-[42px] cursor-pointer h-[42px] rounded-l flex items-center justify-center',
          ]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 0H12.5C13.8807 0 15 0.266497 15 0.595238V2.97619C15 3.30493 13.8807 3.57143 12.5 3.57143H2.5C1.11929 3.57143 0 3.30493 0 2.97619V0.595238C0 0.266497 1.11929 0 2.5 0ZM2.5 5.71429H12.5C13.8807 5.71429 15 5.98078 15 6.30952V8.69048C15 9.01922 13.8807 9.28571 12.5 9.28571H2.5C1.11929 9.28571 0 9.01922 0 8.69048V6.30952C0 5.98078 1.11929 5.71429 2.5 5.71429ZM2.5 11.4286H12.5C13.8807 11.4286 15 11.6951 15 12.0238V14.4048C15 14.7335 13.8807 15 12.5 15H2.5C1.11929 15 0 14.7335 0 14.4048V12.0238C0 11.6951 1.11929 11.4286 2.5 11.4286Z"
              :fill="list ? 'white' : '#cbd5de'"
            />
          </svg>
        </div>

        <div
          v-on:click="gridView()"
          :class="[
            !list ? 'bg-[blue] text-white' : 'bg-white text-[#CBD5DE]',
            'w-[42px] cursor-pointer h-[42px] rounded-l flex items-center justify-center',
          ]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.35714 0H1.07143C0.479695 0 0 0.479695 0 1.07143V5.35714C0 5.94888 0.479695 6.42857 1.07143 6.42857H5.35714C5.94888 6.42857 6.42857 5.94888 6.42857 5.35714V1.07143C6.42857 0.479695 5.94888 0 5.35714 0ZM13.9286 8.57143H9.64286C9.05112 8.57143 8.57143 9.05112 8.57143 9.64286V13.9286C8.57143 14.5203 9.05112 15 9.64286 15H13.9286C14.5203 15 15 14.5203 15 13.9286V9.64286C15 9.05112 14.5203 8.57143 13.9286 8.57143Z"
              :fill="!list ? 'white' : '#cbd5de'"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9286 0H9.64286C9.05112 0 8.57143 0.479695 8.57143 1.07143V5.35714C8.57143 5.94888 9.05112 6.42857 9.64286 6.42857H13.9286C14.5203 6.42857 15 5.94888 15 5.35714V1.07143C15 0.479695 14.5203 0 13.9286 0ZM5.35714 8.57143H1.07143C0.479695 8.57143 0 9.05112 0 9.64286V13.9286C0 14.5203 0.479695 15 1.07143 15H5.35714C5.94888 15 6.42857 14.5203 6.42857 13.9286V9.64286C6.42857 9.05112 5.94888 8.57143 5.35714 8.57143Z"
              :fill="!list ? 'white' : '#cbd5de'"
            />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="list">
      <!-- <div class="flex justify-between w-full"> -->
      <!-- <div class="flex flex-col"> -->
      <div class="w-full">
        <!-- <div class="shadow"> -->
        <table class="my-table border-separate w-full">
          <thead class="">
            <tr class="">
              <th class="text-xs text-center">
                <input class="scale-[1.5]" type="checkbox" name="" id="" />
              </th>
              <th class="text-sm font-semibold text-left">Course Name</th>
              <th class="text-sm font-semibold text-left">Catagory</th>
              <th class="text-sm font-semibold text-left">Instructor</th>
              <th class="text-sm font-semibold text-left">Description</th>
              <th class="text-sm font-semibold">Progress</th>
              <th class="text-sm font-semibold">Status</th>
              <th class="text-sm font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="course in courses" :key="course.id" class="bg-white">
              <th class="text-[13px] text-center">
                <input class="scale-[1.5]" type="checkbox" name="" id="" />
              </th>
              <th class="text-[13px] font-medium flex items-center">
                <span
                  class="mr-[22px]"
                  v-html="course.technology.smallIcon"
                ></span>
                <p>{{ course.technology.name }}</p>
              </th>
              <th class="text-[13px] font-medium text-left">
                {{ course.type }}
              </th>
              <th class="text-[13px] font-medium flex">
                <img
                  class="w-[22px] h-[22px] rounded-50 mr-[15px]"
                  :src="course.instructor.img"
                  alt="instructor"
                />
                <p>{{ course.instructor.name }}</p>
              </th>
              <th class="text-[13px] font-medium w-[250px] text-left">
                <p class="one-line-text">
                  {{ course.description }}
                </p>
              </th>
              <th class="text-[13px] font-medium">
                <div
                  class="w-[33px] h-[33px] mx-auto bg-[#2F3CED] rounded-50"
                ></div>
              </th>
              <th>
                <span
                  :class="[
                    course.status == 'Ongoing' ? 'blue-design' : '',
                    course.status == 'Done' ? 'green-design' : '',
                    course.status == 'Paused' ? 'red-design' : '',
                    'text-[13px] font-medium px-[5px]',
                  ]"
                >
                  {{ course.status }}
                </span>
              </th>
              <th class="text-[13px] font-medium text-left">
                <span
                  :class="[
                    course.action == 'Countinue'
                      ? 'text-[#00c0cd]'
                      : 'text-[#0ec07a]',
                  ]"
                >
                  {{ course.action }}
                </span>
              </th>
            </tr>
          </tbody>
        </table>
        <!-- </div> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>

    <div v-if="!list" class="grid grid-cols-12 gap-[22px] mt-[30px]">
      <div
        class="col-span-full xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6"
        v-for="course in courses"
        :key="course.id"
      >
        <DashboardCourseCard :dashboard="false" :course="course" />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCourseCard from "../components/DashboardCourseCard.vue";
import ListCard from "../components/ListCard.vue";
export default {
  components: { DashboardCourseCard, ListCard },
  name: "mycourses",
  layout: "custom",
  head() {
    return {
      title: "My Courses",
    };
  },
  data() {
    return {
      list: true,
    };
  },
  methods: {
    listView() {
      if (!this.list) {
        this.list = true;
      }
    },
    gridView() {
      if (this.list) {
        this.list = false;
      }
    },
  },
  computed: {
    courses() {
      return this.$store.state.courses.courses;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-table {
  border-spacing: 0 5px;
}

th {
  border: solid 0 rgb(231, 231, 231);
  border-style: solid none;
  padding: 22px 20px;
  vertical-align: middle;
}
</style>
