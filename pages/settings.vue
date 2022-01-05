<template>
  <div class="settings">
    <div class="grid grid-cols-12 gap-[23px]">
      <div class="col-span-full md:col-span-8 bg-white">
        <p class="font-600-16 py-[16px] px-[25px] mb-[24px]">
          Basic Information
        </p>
        <div class="px-[25px] font-600-14">
          <p class="mb-[12px]">Name</p>
          <input
            class="font-500-13 w-[100%] mb-[20px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="name"
          />

          <p class="mb-[12px]">Email (Required)</p>
          <input
            class="font-500-13 w-[100%] mb-[20px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="email"
          />

          <p class="mb-[12px]">Username (Required)</p>
          <input
            class="font-500-13 w-[100%] mb-[20px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="username"
          />

          <p class="mb-[12px]">Country</p>
          <input
            class="font-500-13 w-[100%] mb-[20px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="country"
          />

          <p class="mb-[12px]">Website</p>
          <input
            class="font-500-13 w-[100%] mb-[20px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="website"
          />

          <p class="mb-[12px]">Instagram</p>
          <input
            class="font-500-13 w-[100%] mb-[30px] py-[18px] pl-[24px] border border-[#e0e7ff] rounded-[5px]"
            type="text"
            v-model="instagram"
          />
        </div>
        <button
          class="font-norm-14 py-[7px] text-center bg-[#2f3ced] rounded text-white w-[196px]"
        >
          Update My Profile
        </button>
      </div>

      <div class="col-span-full md:col-span-4">
        <div class="bg-white px-[25px] py-[16px] rounded">
          <p class="font-600-16 mb-[22px]">My Settings</p>
          <div class="font-600-14">
            <p class="text-[#525ce5] mb-[25px]">Basic Information</p>
            <p class="mb-[25px]">Change Password</p>
            <p class="mb-[25px]">Mail Settings</p>
            <p class="mb-[25px]">Linked Accounts</p>
            <p class="mb-[30px]">Delete Accounts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
  layout: "custom",
  data() {
    return {
      name: "Randy Walsh",
      email: "randywalsh@gmail.com",
      username: "RandyWalsh_76",
      country: "London United Kingdom",
      website: "RandyWalsh_76",
      instagram: "RandyWalsh_76",
    };
  },
  head() {
    return {
      title: "Settings",
    };
  },
};
</script>

<style lang="scss" scoped></style>
