<template>
  <div class="book-info mb-[30px]">
    <p class="font-600-14 mb-[20px]">Popular E-Book</p>

    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-3 mb-[15px] font-500-13">
        <img
          class="min-w-[100%] min-h-[280px] max-w-[100%] max-h-[360px] rounded"
          :src="book.img"
          alt="book"
        />
        <p class="mt-[10px] w-[90%]">
          UX Design : The definitive Beginner's Guide
        </p>

        <div class="instructor justify-between mb-[25px] mt-[10px]">
          <div class="flex">
            <img
              class="instructor__img"
              :src="book.instructor.img"
              alt="book"
            />
            <p class="instructor__name">{{ book.instructor.name }}</p>
          </div>

          <div class="flex items-center">
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
              v-for="i in 5 - book.rating"
              :key="99 - i"
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
        </div>

        <div class="">
          <p class="py-[10px] pl-[10px]">200 Visited</p>
          <p class="py-[10px] pl-[10px]">12 Dec 2019 Published</p>
          <p class="py-[10px] pl-[10px]">300 Downloaded</p>
        </div>

        <div class="flex justify-between mt-[31px]">
          <button class="flex rounded bg-[#e0e4f1] px-[30px] py-[8px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3996 4.39912C18.3996 4.23587 18.3004 4.089 18.149 4.02805C15.4544 2.9436 12.7311 2.92439 9.9999 3.96971C7.31608 2.93901 4.5942 2.95827 1.85432 4.02644C1.70073 4.08632 1.59961 4.23428 1.59961 4.39912V17.1991C1.59961 17.4791 1.87993 17.6725 2.14169 17.573C4.72811 16.5902 7.29324 16.5902 9.85646 17.5726C9.94869 17.608 10.0507 17.608 10.143 17.5726C12.727 16.5806 15.2912 16.5806 17.8553 17.5722C18.1174 17.6736 18.3996 17.4801 18.3996 17.1991V4.39912ZM10.3996 4.67397V16.6308C12.8048 15.8283 15.2091 15.8278 17.5996 16.6295V4.67263C15.2134 3.77538 12.8194 3.77563 10.3996 4.67397ZM9.59961 4.67362C7.22291 3.78924 4.82867 3.78963 2.39961 4.67569V16.6327C4.80603 15.8375 7.21027 15.8369 9.59961 16.6313V4.67362Z"
                fill="#0F1B41"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.4 7.1999C4.17909 7.1999 4 7.02082 4 6.7999C4 6.57899 4.17909 6.3999 4.4 6.3999H7.6C7.82091 6.3999 8 6.57899 8 6.7999C8 7.02082 7.82091 7.1999 7.6 7.1999H4.4ZM12.4 7.1999C12.1791 7.1999 12 7.02082 12 6.7999C12 6.57899 12.1791 6.3999 12.4 6.3999H15.6C15.8209 6.3999 16 6.57899 16 6.7999C16 7.02082 15.8209 7.1999 15.6 7.1999H12.4ZM12.4 9.5999C12.1791 9.5999 12 9.42082 12 9.1999C12 8.97899 12.1791 8.7999 12.4 8.7999H15.6C15.8209 8.7999 16 8.97899 16 9.1999C16 9.42082 15.8209 9.5999 15.6 9.5999H12.4ZM12 13.9999C12 14.2208 12.1791 14.3999 12.4 14.3999H15.6C15.8209 14.3999 16 14.2208 16 13.9999C16 13.779 15.8209 13.5999 15.6 13.5999H12.4C12.1791 13.5999 12 13.779 12 13.9999ZM4 9.1999C4 9.42082 4.17909 9.5999 4.4 9.5999H7.6C7.82091 9.5999 8 9.42082 8 9.1999C8 8.97899 7.82091 8.7999 7.6 8.7999H4.4C4.17909 8.7999 4 8.97899 4 9.1999ZM4.4 11.9999C4.17909 11.9999 4 11.8208 4 11.5999C4 11.379 4.17909 11.1999 4.4 11.1999H7.6C7.82091 11.1999 8 11.379 8 11.5999C8 11.8208 7.82091 11.9999 7.6 11.9999H4.4ZM4 13.9999C4 14.2208 4.17909 14.3999 4.4 14.3999H7.6C7.82091 14.3999 8 14.2208 8 13.9999C8 13.779 7.82091 13.5999 7.6 13.5999H4.4C4.17909 13.5999 4 13.779 4 13.9999Z"
                fill="#0F1B41"
              />
              <path
                d="M12.4 12H15.6C15.8209 12 16 11.8209 16 11.6C16 11.379 15.8209 11.2 15.6 11.2H12.4C12.1791 11.2 12 11.379 12 11.6C12 11.8209 12.1791 12 12.4 12Z"
                fill="#0F1B41"
              />
            </svg>

            <p class="ml-[11px]">Read</p>
          </button>

          <button
            class="flex rounded bg-[#2f3ced] text-white px-[30px] py-[8px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.40964 13.4386C6.48683 14.353 7.00343 15.1422 7.74752 15.5944C7.41174 15.8877 7.19961 16.319 7.19961 16.7999C7.19961 17.6836 7.91595 18.3999 8.79961 18.3999C9.68326 18.3999 10.3996 17.6836 10.3996 16.7999C10.3996 16.5085 10.3217 16.2352 10.1856 15.9999H13.0137C12.8775 16.2352 12.7996 16.5085 12.7996 16.7999C12.7996 17.6836 13.516 18.3999 14.3996 18.3999C15.2833 18.3999 15.9996 17.6836 15.9996 16.7999C15.9996 15.9162 15.2833 15.1999 14.3996 15.1999C14.3599 15.1999 14.3205 15.2013 14.2815 15.2042C14.2624 15.2014 14.2427 15.1999 14.2228 15.1999H9.19961C8.23129 15.1999 7.4237 14.5118 7.2392 13.5978C7.27523 13.5992 7.31142 13.5999 7.34776 13.5999H13.6744C14.9868 13.5999 16.1231 12.6884 16.4078 11.4073L17.5901 6.08667C17.6456 5.83687 17.4556 5.5999 17.1997 5.5999H4.72518L4.54886 4.15726C4.42624 3.154 3.57436 2.3999 2.56363 2.3999H1.99961C1.7787 2.3999 1.59961 2.57899 1.59961 2.7999C1.59961 3.02082 1.7787 3.1999 1.99961 3.1999H2.56363C3.17007 3.1999 3.68119 3.65236 3.75477 4.25432L4.56489 11.1091C4.68621 12.2011 5.42486 13.0883 6.40964 13.4386ZM5.35999 11.0208L4.84656 6.3999H16.701L15.6268 11.2338C15.4235 12.1488 14.6118 12.7999 13.6744 12.7999H7.34776C6.32866 12.7999 5.47253 12.0336 5.35999 11.0208ZM14.3996 17.5999C14.8414 17.5999 15.1996 17.2417 15.1996 16.7999C15.1996 16.3581 14.8414 15.9999 14.3996 15.9999C13.9578 15.9999 13.5996 16.3581 13.5996 16.7999C13.5996 17.2417 13.9578 17.5999 14.3996 17.5999ZM9.59961 16.7999C9.59961 17.2417 9.24144 17.5999 8.79961 17.5999C8.35778 17.5999 7.99961 17.2417 7.99961 16.7999C7.99961 16.3581 8.35778 15.9999 8.79961 15.9999C9.24144 15.9999 9.59961 16.3581 9.59961 16.7999Z"
                fill="white"
              />
            </svg>

            <p class="ml-[11px]">Read</p>
          </button>
        </div>
      </div>

      <div
        class="col-span-9 bg-white pt-[18px] pl-[30px] pr-[30px] pb-[30px] rounded-t"
      >
        <div
          class="book-info-nav border-b-[0.2px] border-[#dee1e2] flex gap-[60px] mb-[20px]"
        >
          <p
            :class="[
              path == '/bookinfo/overview'
                ? 'border-b-2 border-[#2f3ced]'
                : 'text-[#5a7180]',
              'font-500-13 text-center min-w-[70px] pb-[20px]',
            ]"
          >
            <NuxtLink to="/bookinfo/overview">Overview</NuxtLink>
          </p>

          <p
            :class="[
              path == '/bookinfo/faq'
                ? 'border-b-2 border-[#2f3ced]'
                : 'text-[#5a7180]',
              'font-500-13 text-center min-w-[70px] pb-[20px]',
            ]"
          >
            <NuxtLink to="/bookinfo/faq">FAQ</NuxtLink>
          </p>

          <p
            :class="[
              path == '/bookinfo/announcements'
                ? 'border-b-2 border-[#2f3ced]'
                : 'text-[#5a7180]',
              'font-500-13 text-center min-w-[70px] pb-[20px]',
            ]"
          >
            <NuxtLink to="/bookinfo/announcements">Announcements</NuxtLink>
          </p>

          <p
            :class="[
              path == '/bookinfo/reviews'
                ? 'border-b-2 border-[#2f3ced]'
                : 'text-[#5a7180]',
              'font-500-13 text-center min-w-[70px] pb-[20px]',
            ]"
          >
            <NuxtLink to="/bookinfo/reviews">Reviews</NuxtLink>
          </p>
        </div>
        <NuxtChild />
      </div>
    </div>

    <div
      class="line flex justify-between text-[14px] leading-6 mt-[30px] mb-[16px]"
    >
      <p class="font-semibold">You will also like</p>
      <p class="font-medium text-[#2f3ced]">View All</p>
    </div>

    <div class="grid grid-cols-12 gap-[30px]">
      <div
        v-for="book in popular"
        :key="book.id"
        class="col-span-full md:col-span-4"
      >
        <PopularBookCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import PopularBookCard from "../components/PopularBookCard.vue";
import PopularCard from "../components/PopularCard.vue";
export default {
  components: { PopularCard, PopularBookCard },
  name: "BookInfoPage",
  layout: "custom",
  head() {
    return {
      title: "Book Info",
    };
  },

  computed: {
    book() {
      return this.$store.state.books.best[1];
    },
    popular() {
      return this.$store.state.books.popular;
    },
  },

  data() {
    return {
      path: String,
      test: true,
    };
  },

  mounted() {
    this.path = window.location.pathname;
  },
  updated() {
    this.path = window.location.pathname;
  },
};
</script>

<style lang="scss" scoped></style>
