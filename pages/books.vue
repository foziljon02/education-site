<template>
  <div class="books">
    <!-- Popular Books Secton -->
    <div class="line mb-[20px]">
      <p class="font-semibold text-[14px] leading-6">Popular E-Book</p>
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

    <!-- Best Programming Section -->
    <div
      class="line flex justify-between font-semibold text-[14px] leading-6 mt-[30px] mb-[20px]"
    >
      <p>Best Programming eBook</p>
      <p class="text-[#2f3ced]">View All</p>
    </div>

    <div class="best-books noscroll-y flex">
      <div class="col-span-3" v-for="book in bestBooks" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>

    <!-- Best Design Programming Section -->
    <div
      class="line flex justify-between font-semibold text-[14px] leading-6 mt-[30px] mb-[20px]"
    >
      <p>Best Designs eBook</p>
      <p class="text-[#2f3ced]">View All</p>
    </div>

    <div class="best-books noscroll-y flex">
      <div class="col-span-3" v-for="book in bestBooks" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  components: { BookCard },
  name: "books",
  layout: "custom",
  head() {
    return {
      title: "Books",
    };
  },
  computed: {
    popular() {
      return this.$store.state.books.popular;
    },
    bestBooks() {
      return this.$store.state.books.best;
    },
  },
};
</script>

<style lang="scss" scoped></style>
