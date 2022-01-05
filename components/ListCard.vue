<template>
  <div class="flex justify-center w-full">
    <!-- <div class="flex flex-col"> -->
      <div class="w-full">
        <div class="border-b border-gray-200 shadow">
          <table class="my-table border-separate">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-2 text-xs text-gray-500"><input type="checkbox" name="" id=""></th>
                <th class="px-6 py-2 text-xs text-gray-500">Name</th>
                <th class="px-6 py-2 text-xs text-gray-500">Email</th>
                <th class="px-6 py-2 text-xs text-gray-500">Created_at</th>
                <th class="px-6 py-2 text-xs text-gray-500">Edit</th>
                <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="bg-green-400 mb-[5px] whitespace-nowrap">
                <td class="px-6 py-4 text-sm text-gray-500">1</td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900">Jon doe</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-500">jhondoe@example.com</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                    >Edit</a
                  >
                </td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-red-400 rounded"
                    >Delete</a
                  >
                </td>
              </tr>
              <tr class=" bg-green-400 mb-[5px] whitespace-nowrap">
                <td class="px-6 py-4 text-sm text-gray-500">1</td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900">Jon doe</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-500">jhondoe@example.com</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                    >Edit</a
                  >
                </td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-red-400 rounded"
                    >Delete</a
                  >
                </td>
              </tr>
              <tr class="whitespace-nowrap">
                <td class="px-6 py-4 text-sm text-gray-500">1</td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900">Jon doe</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-500">jhondoe@example.com</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                    >Edit</a
                  >
                </td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="px-4 py-1 text-sm text-white bg-red-400 rounded"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    course: Object,
  },
};
</script>

<style lang="scss" scoped>
.my-table {
    border-spacing: 0 5px;
}
</style>
