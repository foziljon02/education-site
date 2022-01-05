<template>
  <div class="community">
    <div class="line flex justify-center sm:justify-between items-center mb-[31px]">
      <div>
        <p class="hidden sm:block font-normal text-[8px] lg:text-[16px] md:text-[12px] text-[#2732c4]">
          All Discussion <span class="font-bold">"18.000 Questions"</span>
        </p>
      </div>

      <div class="flex gap-[40px] font-medium text-[10px] lg:font-medium lg:text-[13px] text-[#5a7180]">
        <p class="text-black border-b-2 md:py-[10px] border-[#525ce5] cursor-pointer">Latest</p>
        <p class="md:py-[10px] cursor-pointer">Unanswered</p>
        <p class="md:py-[10px] cursor-pointer">Trending</p>
        <p class="md:py-[10px] cursor-pointer">Popular This Week</p>
        <p class="md:py-[10px] cursor-pointer">Popular This Month</p>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-[23px]">
      <div class="col-span-full md:col-span-8">
        <div v-for="comment in comments" :key="comment.id" class="mb-[23px]">
          <CommentCard :comment="comment" />
        </div>
      </div>

      <div class="col-span-full md:col-span-4">
        <button
          class="font-norm-14 text-white bg-[#2f3ced] rounded w-[100%] py-[7px] mb-[23px]"
        >
          Start New Discussion
        </button>

        <div class="bg-white mb-[23px]">
          <p class="font-500-13 pl-[25px] py-[21px]">Discussion</p>
          <div class="pt-[20px] px-[20px]">
            <div class="flex items-center mb-[22px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00054 14.5783C2.03437 16.511 3.62857 18.0503 5.56127 18.0165L6 18.0088V21.5C6 21.9193 6.48497 22.1523 6.81235 21.8904L11.674 18.0011L19.5 18.0509C21.433 18.0509 23 16.4839 23 14.5509V6.5C23 4.567 21.433 3 19.5 3H5.5C3.567 3 2 4.567 2 6.5V14.517C2.00004 14.5324 2.00007 14.54 2.00013 14.5477C2.0002 14.5553 2.00031 14.563 2.00054 14.5783ZM11.1877 17.1096L7 20.4597V17.5C7 17.2204 6.77077 16.9952 6.49125 17.0001L5.54376 17.0167C4.16326 17.0408 3.02455 15.9413 3 14.517V6.5C3 5.11929 4.11929 4 5.5 4H19.5C20.8807 4 22 5.11929 22 6.5V14.5509C22 15.9316 20.8807 17.0509 19.4841 17.0508L11.5032 17C11.3886 16.9993 11.2772 17.038 11.1877 17.1096Z"
                  fill="#525CE5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9.5C7 9.77614 7.22386 10 7.5 10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H7.5C7.22386 9 7 9.22386 7 9.5ZM7 12.5C7 12.7761 7.22386 13 7.5 13H14.5C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12H7.5C7.22386 12 7 12.2239 7 12.5Z"
                  fill="#525CE5"
                />
              </svg>
              <p class="font-600-14 ml-[12px] text-[#525ce5]">All Discussion</p>
            </div>

            <div class="flex items-center mb-[22px]">
              <svg
                class="p-[0]"
                width="19"
                height="19"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.77791 22.916L12.5006 19.1009L18.2232 22.916C18.5828 23.1558 19.0567 22.8571 18.9955 22.4293L18.0309 15.6768L22.8541 10.8536C23.1455 10.5622 22.9791 10.0633 22.5713 10.005L15.8494 9.04476L12.9601 2.30304C12.787 1.89899 12.2141 1.89899 12.041 2.30304L9.15167 9.04476L2.42984 10.005C2.02196 10.0633 1.85566 10.5622 2.147 10.8536L6.97023 15.6768L6.00558 22.4293C5.94446 22.8571 6.4183 23.1558 6.77791 22.916ZM12.7779 18.084C12.61 17.972 12.3912 17.972 12.2232 18.084L7.15368 21.4637L7.99553 15.5707C8.01779 15.4149 7.96539 15.2577 7.85411 15.1464L3.56122 10.8536L9.57127 9.99498C9.74401 9.9703 9.89139 9.85735 9.96013 9.69696L12.5006 3.7693L15.041 9.69696C15.1097 9.85735 15.2571 9.9703 15.4298 9.99498L21.4399 10.8536L17.147 15.1464C17.0357 15.2577 16.9833 15.4149 17.0056 15.5707L17.8474 21.4637L12.7779 18.084Z"
                  fill="#0F1B41"
                />
              </svg>

              <p class="font-500-13 ml-[12px] mt-[2px]">Following</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#5780f7] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">UI/UX Design</p>
              </div>
              <p class="blue-design font-500-12 p-[5px]">383</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#ffc168] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Angular Js</p>
              </div>
              <p class="yellow-design font-500-12 p-[5px]">684</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#ff6868] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Laravel</p>
              </div>
              <p class="red-design font-500-12 p-[5px]">197</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#57d094] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Vue Js</p>
              </div>
              <p class="green-design font-500-12 p-[5px]">661</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#68dcff] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Bootstrap</p>
              </div>
              <p class="light-blue-design font-500-12 p-[5px]">845</p>
            </div>

            <div class="flex items-center justify-between mb-[20px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#9a68ff] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Codeigniter</p>
              </div>
              <p class="pink-design font-500-12 p-[5px]">198</p>
            </div>

            <div class="flex items-center justify-between pb-[22px]">
              <div class="flex items-center">
                <div class="w-[19px] h-[19px] bg-[#ff9868] rounded-50"></div>
                <p class="font-500-13 ml-[12px] mt-[2px]">Node JS</p>
              </div>
              <p class="carrot-design font-500-12 p-[5px]">292</p>
            </div>
          </div>
        </div>

        <div class="bg-white pl-[25px] pr-[30px]">
            <p class="font-500-13 py-[21px]">Popular Tags</p>
            <div class="pt-[20px] flex flex-wrap gap-[10px] font-500-12">
                <p class="blue-design p-[5px]">sketch</p>
                <p class="blue-design p-[5px]">plugin</p>
                <p class="blue-design p-[5px]">symbols</p>
                <p class="blue-design p-[5px]">bug</p>
                <p class="blue-design p-[5px]">arthboard</p>
                <p class="blue-design p-[5px]">text</p>
                <p class="blue-design p-[5px]">export</p>
                <p class="blue-design p-[5px]">override</p>
                <p class="blue-design p-[5px]">craft</p>
                <p class="blue-design p-[5px]">sketch plugin</p>
                <p class="blue-design p-[5px]">error 404</p>
                <p class="blue-design p-[5px]">angular</p>
                <p class="blue-design p-[5px]">bootsrtap</p>
                <p class="blue-design p-[5px]">html 5</p>
                <p class="blue-design p-[5px]">css 3</p>
                <p class="blue-design p-[5px]">javascript</p>
                <p class="blue-design p-[5px]">workflow</p>
                <p class="blue-design p-[5px]">update</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCard from "../components/CommentCard.vue";
export default {
  components: { CommentCard },
  name: "CommunityPage",
  layout: "custom",
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
  },
};
</script>

<style lang="scss" scoped></style>
