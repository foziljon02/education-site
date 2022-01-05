<template>
  <div class="book bg-white p-[14px]">
    <NuxtLink to="/bookinfo">
      <div>
        <img
          class="min-w-[214px] min-h-[264px] max-h-[265px] max-w-[215px]"
          :src="book.img"
          alt="book"
        />
      </div>

      <div class="mt-[14px]">
        <p class="two-line-text font-500-13">{{ book.name }}</p>
      </div>

      <div class="instructor mt-[10px]">
        <img
          class="instructor__img"
          :src="book.instructor.img"
          alt="instructor"
        />
        <p class="instructor__name">Brad Traversy</p>
      </div>

      <div class="flex gap-[7px] mt-[16.6px] mb-[10px] ">
        <svg
          v-for="i in book.rating"
          :key="i"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.02009 15.526C3.70363 15.737 3.28666 15.4742 3.34044 15.0977L4.01333 10.3875L0.648893 7.02302C0.39251 6.76664 0.538859 6.32759 0.897795 6.27631L5.581 5.60729L7.5956 0.906568C7.74798 0.551001 8.25206 0.551001 8.40444 0.906568L10.419 5.60729L15.1022 6.27631C15.4612 6.32759 15.6075 6.76664 15.3511 7.02302L11.9867 10.3875L12.6596 15.0977C12.7134 15.4742 12.2964 15.737 11.98 15.526L8.00002 12.8727L4.02009 15.526Z"
            fill="#FFA82B"
          />
        </svg>

        <svg
          v-for="i in 5-book.rating"
          :key="8754-i"
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
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
};
</script>

<style lang="scss" scoped></style>
