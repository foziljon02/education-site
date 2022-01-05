<template>
  <div
    class="mentor font-600-13 p-[20px] mb-[5px] bg-white flex justify-between items-center"
  >
    <div class="flex items-center w-[15%]">
      <img
        class="w-[30px] h-[30px] rounded-50 mr-[14px]"
        src="https://thispersondoesnotexist.com/image"
        alt="instructor"
      />
      <p>{{ mentor.name }}</p>
    </div>
    <div class="w-[15%]">
      <p
        :class="[
          mentor.industry == 'Frontend Development' ? 'red-design' : '',
          mentor.industry == 'UI/UX Design' ? 'yellow-design' : '',
          mentor.industry == 'Backend Development' ? 'blue-design' : '',
          mentor.industry == 'Android Development' ? 'green-design' : '',
          'mx-[3px] text-center',
        ]"
      >
        {{ mentor.industry }}
      </p>
    </div>
    <p class="w-[15%] text-center">{{ mentor.profession }}</p>
    <p class="w-[7%] text-left">{{ mentor.courses }} Courses</p>
    <p>{{ mentor.followers }} Followers</p>
    <div class="flex items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.02056 15.526C3.70411 15.737 3.28713 15.4742 3.34092 15.0977L4.0138 10.3875L0.649366 7.02302C0.392983 6.76664 0.539332 6.32759 0.898268 6.27631L5.58148 5.60729L7.59607 0.906568C7.74846 0.551001 8.25253 0.551001 8.40492 0.906568L10.4195 5.60729L15.1027 6.27631C15.4617 6.32759 15.608 6.76664 15.3516 7.02302L11.9872 10.3875L12.6601 15.0977C12.7139 15.4742 12.2969 15.737 11.9804 15.526L8.00049 12.8727L4.02056 15.526Z"
          fill="#FFA82B"
        />
      </svg>
      <p class="ml-[8.5px]">
          {{ mentor.rating == 5.0 || mentor.rating == 4.0 || mentor.rating == 3.0 || mentor.rating == 2.0 ? `${mentor.rating}` + `.0` :  mentor.rating}}
        {{  }}
      </p>
    </div>

    <div class="flex items-center">
      <div
        class="w-[28px] h-[28px] rounded bg-[#ffc06841] mr-[10px] grid place-items-center"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.72001 4.71999V0.51999C4.72001 0.365351 4.84537 0.23999 5.00001 0.23999C5.15464 0.23999 5.28001 0.365351 5.28001 0.51999V4.71999H9.48001C9.63465 4.71999 9.76 4.84535 9.76 4.99999C9.76 5.15463 9.63465 5.27999 9.48001 5.27999H5.28001V9.47999C5.28001 9.63463 5.15464 9.75999 5.00001 9.75999C4.84537 9.75999 4.72001 9.63463 4.72001 9.47999V5.27999H0.520005C0.365366 5.27999 0.240005 5.15463 0.240005 4.99999C0.240005 4.84535 0.365366 4.71999 0.520005 4.71999H4.72001Z"
            fill="#FFA82B"
          />
        </svg>
      </div>

      <div
        class="w-[28px] h-[28px] rounded bg-[#525ce549] grid place-items-center"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.1203 8.16379C1.13924 9.2461 2.03199 10.1081 3.11431 10.0892L3.36 10.0849V12.0399C3.36 12.2747 3.63158 12.4052 3.81491 12.2586L6.53743 10.0806L10.92 10.1084C12.0025 10.1084 12.88 9.2309 12.88 8.14842V3.63993C12.88 2.55745 12.0025 1.67993 10.92 1.67993H3.08C1.99752 1.67993 1.12 2.55745 1.12 3.63993V8.12948C1.12002 8.13806 1.12003 8.14235 1.12007 8.14663C1.12011 8.15092 1.12017 8.15521 1.1203 8.16379ZM6.26508 9.58129L3.92 11.4574V9.79993C3.92 9.64337 3.79163 9.51723 3.63509 9.51997L3.1045 9.52926C2.33142 9.5428 1.69374 8.92707 1.68 8.12948V3.63993C1.68 2.86673 2.3068 2.23993 3.08 2.23993H10.92C11.6932 2.23993 12.32 2.86673 12.32 3.63993V8.14842C12.32 8.92162 11.6932 9.54842 10.9111 9.54839L6.44178 9.51994C6.37759 9.51953 6.31521 9.54119 6.26508 9.58129Z"
            fill="#525CE5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.92001 5.32004C3.92001 5.47468 4.04537 5.60004 4.20001 5.60004H9.24001C9.39465 5.60004 9.52001 5.47468 9.52001 5.32004C9.52001 5.1654 9.39465 5.04004 9.24001 5.04004H4.20001C4.04537 5.04004 3.92001 5.1654 3.92001 5.32004ZM3.92001 7.00004C3.92001 7.15468 4.04537 7.28004 4.20001 7.28004H8.12001C8.27465 7.28004 8.40001 7.15468 8.40001 7.00004C8.40001 6.8454 8.27465 6.72004 8.12001 6.72004H4.20001C4.04537 6.72004 3.92001 6.8454 3.92001 7.00004Z"
            fill="#525CE5"
          />
        </svg>
      </div>
    </div>
    <div>
      <svg
        width="4"
        height="13"
        viewBox="0 0 4 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
          fill="#CBD5DE"
        />
        <path
          d="M1 7C1 7.55228 1.44772 8 2 8C2.55228 8 3 7.55228 3 7C3 6.44772 2.55228 6 2 6C1.44772 6 1 6.44772 1 7Z"
          fill="#CBD5DE"
        />
        <path
          d="M1 12C1 12.5523 1.44772 13 2 13C2.55228 13 3 12.5523 3 12C3 11.4477 2.55228 11 2 11C1.44772 11 1 11.4477 1 12Z"
          fill="#CBD5DE"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentorCard",
  props: {
    mentor: Object,
  },
};
</script>

<style lang="scss" scoped></style>
