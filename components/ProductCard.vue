<template>
  <div class="product-card bg-white rounded">
    <NuxtLink to="/courseinfo">
      <div class="product-card__img flex items-center">
        <div class="text-white flex justify-center">
          <div
            class="hidden w-[45px] h-[45px] mr-[11.5px] rounded-50 bg-white xl:flex items-center justify-center"
          >
            <div>
              <span v-html="course.technology.icon"></span>
            </div>
          </div>

          <p
            class="font-normal text-[14px] xl:text-[20px] leading-[26.44px] w-[70%]"
          >
            {{ course.name }}
          </p>
        </div>
      </div>

      <div class="pl-[14px] pt-[14px] pr-[25px]">
        <div class="mb-[10px]">
          <p class="font-600-13">{{ course.name }}</p>
        </div>

        <div class="instructor flex mb-[10px] mt-[10px]">
          <img class="instructor__img" :src="course.instructor.img" alt="" />
          <p class="instructor__name">{{ course.instructor.name }}</p>
        </div>
      </div>

      <div class="flex justify-between pl-[14px] px-[14px] pb-[9px]">
        <div class="flex items-center gap-[7px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02009 15.5261C3.70363 15.7371 3.28666 15.4743 3.34044 15.0978L4.01333 10.3876L0.648893 7.02314C0.39251 6.76676 0.538859 6.32771 0.897795 6.27644L5.581 5.60741L7.5956 0.90669C7.74798 0.551123 8.25206 0.551123 8.40444 0.90669L10.419 5.60741L15.1022 6.27644C15.4612 6.32771 15.6075 6.76676 15.3511 7.02314L11.9867 10.3876L12.6596 15.0978C12.7134 15.4743 12.2964 15.7371 11.98 15.5261L8.00002 12.8728L4.02009 15.5261Z"
              fill="#FFA82B"
            />
          </svg>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02009 15.5261C3.70363 15.7371 3.28666 15.4743 3.34044 15.0978L4.01333 10.3876L0.648893 7.02314C0.39251 6.76676 0.538859 6.32771 0.897795 6.27644L5.581 5.60741L7.5956 0.90669C7.74798 0.551123 8.25206 0.551123 8.40444 0.90669L10.419 5.60741L15.1022 6.27644C15.4612 6.32771 15.6075 6.76676 15.3511 7.02314L11.9867 10.3876L12.6596 15.0978C12.7134 15.4743 12.2964 15.7371 11.98 15.5261L8.00002 12.8728L4.02009 15.5261Z"
              fill="#FFA82B"
            />
          </svg>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02009 15.5261C3.70363 15.7371 3.28666 15.4743 3.34044 15.0978L4.01333 10.3876L0.648893 7.02314C0.39251 6.76676 0.538859 6.32771 0.897795 6.27644L5.581 5.60741L7.5956 0.90669C7.74798 0.551123 8.25206 0.551123 8.40444 0.90669L10.419 5.60741L15.1022 6.27644C15.4612 6.32771 15.6075 6.76676 15.3511 7.02314L11.9867 10.3876L12.6596 15.0978C12.7134 15.4743 12.2964 15.7371 11.98 15.5261L8.00002 12.8728L4.02009 15.5261Z"
              fill="#FFA82B"
            />
          </svg>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02009 15.5261C3.70363 15.7371 3.28666 15.4743 3.34044 15.0978L4.01333 10.3876L0.648893 7.02314C0.39251 6.76676 0.538859 6.32771 0.897795 6.27644L5.581 5.60741L7.5956 0.90669C7.74798 0.551123 8.25206 0.551123 8.40444 0.90669L10.419 5.60741L15.1022 6.27644C15.4612 6.32771 15.6075 6.76676 15.3511 7.02314L11.9867 10.3876L12.6596 15.0978C12.7134 15.4743 12.2964 15.7371 11.98 15.5261L8.00002 12.8728L4.02009 15.5261Z"
              fill="#FFA82B"
            />
          </svg>

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
              d="M3.69009 14.7C3.38854 14.901 2.99122 14.6506 3.04247 14.2918L3.68365 9.80359L0.477758 6.5977C0.233457 6.3534 0.372909 5.93505 0.71493 5.88619L5.17744 5.24868L7.0971 0.769489C7.2423 0.430678 7.72262 0.430678 7.86783 0.769489L9.78749 5.24868L14.25 5.88619C14.592 5.93505 14.7315 6.3534 14.4872 6.5977L11.2813 9.80359L11.9225 14.2918C11.9737 14.6506 11.5764 14.901 11.2748 14.7L7.48246 12.1717L3.69009 14.7Z"
              fill="#515BE5"
              fill-opacity="0.120739"
            />
          </svg>
        </div>

        <div class="blue-design pt-[6px] pr-[9px] pb-[7px] pl-[12px]">
          <p class="font-medium text-[12px]">${{ course.price }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    course: Object,
  },
};
</script>

<style lang="scss" scoped></style>
