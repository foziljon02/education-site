<template>
  <div class="home">
    <div class="sm:pt-[40px] sm:pl-[40px] sm:pr-[39px]">
      <div class="navbar">
        <nav class="grid grid-cols-12 gap-[40px] mb-[55px]">
          <div class="col-span-full xl:col-span-2 lg:col-span-3 md:col-span-4">
            <Logo />
          </div>

          <div
            class="col-span-full xl:col-span-10 lg:col-span-9 md:col-span-8 flex items-center justify-between"
          >
            <p v-if="$route.name === 'home'" class="font-600-14">Dashboard</p>
            <p v-else-if="$route.name === 'books'" class="font-600-14">eBook</p>
            <p v-else-if="$route.name === 'mycourses'" class="font-600-14">
              My Courses
            </p>
            <p v-else-if="$route.name === 'shop'" class="font-600-14">
              Purchase Courses
            </p>
            <p v-else-if="$route.name === 'completed'" class="font-600-14">
              Completed Courses
            </p>
            <p v-else-if="$route.name === 'challenges'" class="font-600-14">
              Code Challenges
            </p>
            <p v-else-if="$route.name === 'community'" class="font-600-14">
              Community
            </p>
            <p v-else-if="$route.name === 'profile'" class="font-600-14">
              Profile
            </p>
            <p v-else-if="$route.name === 'settings'" class="font-600-14">
              Settings
            </p>
            <p v-else-if="$route.name === 'logout'" class="font-600-14">
              Logout
            </p>
            <p
              v-else-if="
                $route.name === 'bookinfo' ||
                $route.name === 'bookinfo-overview' ||
                $route.name === 'bookinfo-faq' ||
                $route.name === 'bookinfo-announcements' ||
                $route.name === 'bookinfo-reviews'
              "
              class="font-600-14"
            >
              eBook
            </p>
            <p
              v-else-if="
                $route.name === 'courseinfo' ||
                $route.name === 'courseinfo-overview' ||
                $route.name === 'courseinfo-faq' ||
                $route.name === 'courseinfo-announcements' ||
                $route.name === 'courseinfo-reviews'
              "
              class="font-600-14"
            >
              Course Information
            </p>

            <div class="flex items-center">
              <svg
                class="mr-[34px]"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.48723 17.4967C8.685 20.6944 13.7986 20.8087 17.1333 17.8396L17.142 17.8485L21.1383 21.8447C21.6092 22.3156 22.3156 21.6092 21.8447 21.1383L17.8485 17.142L17.8396 17.1333C20.8087 13.7986 20.6944 8.685 17.4967 5.48723C14.1803 2.17092 8.80354 2.17092 5.48723 5.48723C2.17092 8.80354 2.17092 14.1803 5.48723 17.4967ZM16.7902 6.19367C19.7164 9.11982 19.7164 13.8641 16.7902 16.7902C13.8641 19.7164 9.11982 19.7164 6.19367 16.7902C3.26751 13.8641 3.26751 9.11982 6.19367 6.19367C9.11982 3.26751 13.8641 3.26751 16.7902 6.19367Z"
                  fill="#17307A"
                />
              </svg>

              <svg
                class="mr-[24px]"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19.5325C10 20.8952 11.1193 22 12.5 22C13.8807 22 15 20.8952 15 19.5325V19H14V19.5325C14 20.3501 13.3284 21.013 12.5 21.013C11.6716 21.013 11 20.3501 11 19.5325V19L10 19L10 19.5325Z"
                  fill="#17307A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4993 2C13.8733 2 14.9883 3.10847 14.9991 4.47995C17.4739 5.47178 18.9988 8.01191 18.9988 10.8413V15.978L20.9457 19.2747C21.1136 19.6073 20.8719 20 20.4994 20H4.50061C4.12812 20 3.88644 19.6073 4.05429 19.2747L5.99985 15.978V10.8413C5.99985 8.0124 7.52553 5.47263 9.99961 4.48047C10.0101 3.10875 11.1253 2 12.4993 2ZM18.0526 16.3223C18.0173 16.2524 17.9989 16.1753 17.9989 16.097V10.8413C17.9989 7.68096 15.6601 5 12.5 5C9.33995 5 6.99977 7.68096 6.99977 10.8413V16.097C6.99977 16.1753 6.9814 16.2524 6.94613 16.3223L5.31302 19H19.687L18.0526 16.3223ZM13.9603 4.15909C13.4902 4.05492 13.0015 4 12.5 4C11.998 4 11.5089 4.05503 11.0383 4.15939C11.1925 3.49505 11.7881 3 12.4993 3C13.2105 3 13.806 3.4949 13.9603 4.15909Z"
                  fill="#17307A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 9.20914 14.7909 11 17 11Z"
                  fill="#FF6868"
                />
              </svg>

              <div class="w-[46px] h-[46px] bg-[#2f3fed] rounded-50"></div>
            </div>
          </div>
        </nav>

        <div class="grid grid-cols-12 gap-[40px]">
          <div
            class="topnav col-span-full xl:col-span-2 lg:col-span-3 md:col-span-full"
            id="myTopnav"
          >
            <div>
              <a
                id="navIcon"
                href="javascript:void(0);"
                class="icon"
                v-on:click="toggleMenu()"
              >
                <div
                  class="icon-container change"
                  id="icon-container"
                  onclick="myFunction(this)"
                >
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </a>
              <p class="font-600-14 mt-[6px] mb-[29px]">Main Menu</p>

              <NuxtLink to="/home">
                <button
                  :class="[
                    'flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13',
                  ]"
                >
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
                      d="M13.5089 16H11.5089C10.1282 16 9.00891 17.1193 9.00891 18.5V22.5C9.00891 22.7761 9.23277 23 9.50891 23H15.5089C15.7851 23 16.0089 22.7761 16.0089 22.5V18.5C16.0089 17.1193 14.8896 16 13.5089 16ZM15.0089 18.5V22H10.0089V18.5C10.0089 17.6716 10.6805 17 11.5089 17H13.5089C14.3373 17 15.0089 17.6716 15.0089 18.5Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.0089 20.5V10.8227L22.1744 11.8716C22.3797 12.0564 22.6958 12.0397 22.8806 11.8345C23.0653 11.6292 23.0487 11.3131 22.8434 11.1284L12.8434 2.12835C12.6532 1.95722 12.3646 1.95722 12.1744 2.12835L2.17443 11.1284C1.96918 11.3131 1.95254 11.6292 2.13727 11.8345C2.322 12.0397 2.63814 12.0564 2.8434 11.8716L4.00892 10.8227V20.5C4.00892 21.8807 5.1282 23 6.50892 23H18.5089C19.8896 23 21.0089 21.8807 21.0089 20.5ZM12.5089 3.17268L20.0454 9.95548C20.0211 10.0026 20.0089 10.0511 20.0089 10.1008V20.5C20.0089 21.3284 19.3373 22 18.5089 22H6.50892C5.68049 22 5.00892 21.3284 5.00892 20.5V10.1008C5.00892 10.0464 5.00023 9.99399 4.98416 9.94496L12.5089 3.17268Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Dashboard</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/books">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M15 2H14V19H15V2ZM18 2H17V19H18V2ZM5.72361 22.9472C5.39116 23.1134 5 22.8717 5 22.5V19.5C5 19.2239 5.22386 19 5.5 19H9.5C9.77614 19 10 19.2239 10 19.5V22.5C10 22.8717 9.60884 23.1134 9.27639 22.9472L7.5 22.059L5.72361 22.9472ZM7.27639 21.0528L6 21.691V20H9V21.691L7.72361 21.0528C7.58284 20.9824 7.41716 20.9824 7.27639 21.0528Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 2H5.5C4.67157 2 4 2.67157 4 3.5V18.5C4 19.3284 4.67157 20 5.5 20H17.5C19.433 20 21 18.433 21 16.5V5.5C21 3.567 19.433 2 17.5 2ZM5 3.5C5 3.22386 5.22386 3 5.5 3H17.5C18.8807 3 20 4.11929 20 5.5V16.5C20 17.8807 18.8807 19 17.5 19H5.5C5.22386 19 5 18.7761 5 18.5V3.5Z"
                      fill="#A4ADC8"
                    />
                  </svg>
                  <p class="ml-[21px]">eBook</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/mycourses">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M17.5 6H11.5C11.2239 6 11 6.22386 11 6.5V10.5C11 10.7761 11.2239 11 11.5 11H17.5C17.7761 11 18 10.7761 18 10.5V6.5C18 6.22386 17.7761 6 17.5 6ZM17 10H12V7H17V10Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5 2H5.5C4.67157 2 4 2.67157 4 3.5V19.5C4 21.433 5.567 23 7.5 23H17.5C19.433 23 21 21.433 21 19.5V3.5C21 2.67157 20.3284 2 19.5 2ZM8 3H5.5C5.22386 3 5 3.22386 5 3.5V19.5C5 20.8807 6.11929 22 7.5 22H8V3ZM9 3V22H17.5C18.8807 22 20 20.8807 20 19.5V3.5C20 3.22386 19.7761 3 19.5 3H9Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">My Courses</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/shop">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M19 8H19.5C21.433 8 23 9.567 23 11.5V19.5C23 21.433 21.433 23 19.5 23H5.5C3.567 23 2 21.433 2 19.5V7.11939C2 5.86638 2.92758 4.80692 4.16959 4.64132L17.3154 3.0114C17.3767 3.00381 17.4383 3 17.5 3C18.3284 3 19 3.67157 19 4.5V8ZM18 4.5V8H5.5C4.52066 8 3.63526 8.40223 3 9.05051V7.11939C3 6.36759 3.55655 5.73191 4.29719 5.63313L17.4385 4.0038C17.4589 4.00127 17.4794 4 17.5 4C17.7761 4 18 4.22386 18 4.5ZM3 19.5V11.5C3 10.1193 4.11929 9 5.5 9H19.5C20.8807 9 22 10.1193 22 11.5V12H17.5C15.567 12 14 13.567 14 15.5C14 17.433 15.567 19 17.5 19H22V19.5C22 20.8807 20.8807 22 19.5 22H5.5C4.11929 22 3 20.8807 3 19.5ZM15 15.5C15 14.1193 16.1193 13 17.5 13H22V18H17.5C16.1193 18 15 16.8807 15 15.5ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17ZM18 15.5C18 15.7761 17.7761 16 17.5 16C17.2239 16 17 15.7761 17 15.5C17 15.2239 17.2239 15 17.5 15C17.7761 15 18 15.2239 18 15.5Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Purchase Course</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/completed">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M17.5 2H7.5C5.567 2 4 3.567 4 5.5V19.5C4 21.433 5.567 23 7.5 23H17.5C19.433 23 21 21.433 21 19.5V5.5C21 3.567 19.433 2 17.5 2ZM5 5.5C5 4.11929 6.11929 3 7.5 3H17.5C18.8807 3 20 4.11929 20 5.5V19.5C20 20.8807 18.8807 22 17.5 22H7.5C6.11929 22 5 20.8807 5 19.5V5.5Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Completed Courses</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/challenges">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.1193 13.8807 10 12.5 10C11.1193 10 10 11.1193 10 12.5ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 12.5C7 18.2636 9.36822 23 12.5 23C15.6318 23 18 18.2636 18 12.5C18 6.73644 15.6318 2 12.5 2C9.36822 2 7 6.73644 7 12.5ZM17 12.5C17 17.7821 14.8911 22 12.5 22C10.1089 22 8 17.7821 8 12.5C8 7.21786 10.1089 3 12.5 3C14.8911 3 17 7.21786 17 12.5Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.41646 6.97037C1.87073 9.8088 4.77122 14.4662 9.74372 17.5099C14.7294 20.5616 20.0228 20.8985 21.584 18.0315C23.1298 15.193 20.2293 10.5356 15.2568 7.49196C10.2711 4.44023 4.97774 4.10339 3.41646 6.97037ZM4.29468 7.44863C5.48986 5.25392 10.1717 5.55186 14.7347 8.34487C19.3109 11.1459 21.9166 15.3299 20.7058 17.5532C19.5106 19.7479 14.8288 19.45 10.2658 16.657C5.68963 13.8559 3.08395 9.67189 4.29468 7.44863Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.74372 7.49196C4.77122 10.5356 1.87073 15.193 3.41646 18.0315C4.97774 20.8985 10.2711 20.5616 15.2568 17.5099C20.2293 14.4662 23.1298 9.8088 21.584 6.97037C20.0228 4.10339 14.7294 4.44023 9.74372 7.49196ZM14.7347 16.657C10.1717 19.45 5.48986 19.7479 4.29468 17.5532C3.08395 15.3299 5.68963 11.1459 10.2658 8.34487C14.8288 5.55186 19.5106 5.25392 20.7058 7.44863C21.9166 9.67189 19.3109 13.8559 14.7347 16.657Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Code Challenges</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/community">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3962 18.9666H12.5C10.567 18.9666 9 17.3996 9 15.4666L9 13.5C9 13.2239 9.22386 13 9.5 13C9.77614 13 10 13.2239 10 13.5V15.4666C10 16.8474 11.1193 17.9666 12.5 17.9666H15.5159C15.5945 17.9666 15.6721 17.9852 15.7422 18.0208L19.0248 19.687L19.0238 18.4669C19.0236 18.1906 19.2475 17.9665 19.5238 17.9665C20.3391 17.9665 21 17.3056 21 16.4903V12.5C21 11.1193 19.8807 10 18.5 10H15.5C15.2239 10 15 9.77614 15 9.5C15 9.22386 15.2239 9 15.5 9H18.5C20.433 9 22 10.567 22 12.5V16.4903C22 17.6865 21.1519 18.6845 20.0242 18.9159L20.0255 20.5015C20.0258 20.8747 19.632 21.1167 19.2992 20.9478L15.3962 18.9666Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.97605 13.6184L4.97447 15.5015C4.97416 15.8746 5.3678 16.1166 5.70057 15.9479L9.60824 13.9666H12.5C14.433 13.9666 16 12.3996 16 10.4666V7.5C16 5.567 14.433 4 12.5 4H6.5C4.567 4 3 5.567 3 7.5V10.4666C3 11.829 3.78561 13.0427 4.97605 13.6184ZM5.97515 14.6875L5.97632 13.2879C5.9765 13.0774 5.8448 12.8893 5.64692 12.8175C4.66642 12.4616 4 11.5271 4 10.4666V7.5C4 6.11929 5.11929 5 6.5 5H12.5C13.8807 5 15 6.11929 15 7.5V10.4666C15 11.8474 13.8807 12.9666 12.5 12.9666H9.48412C9.38365 12.9666 9.29189 12.9956 9.21516 13.0448L5.97515 14.6875Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Community</p>
                </button>
              </NuxtLink>

              <p class="font-600-14 mt-[29px] mb-[29px]">Settings</p>

              <NuxtLink to="/profile">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M6.77791 22.916L12.5006 19.1009L18.2232 22.916C18.5828 23.1558 19.0567 22.8571 18.9955 22.4293L18.0309 15.6768L22.8541 10.8536C23.1455 10.5622 22.9791 10.0633 22.5713 10.005L15.8494 9.04476L12.9601 2.30304C12.787 1.89899 12.2141 1.89899 12.041 2.30304L9.15167 9.04476L2.42984 10.005C2.02196 10.0633 1.85566 10.5622 2.147 10.8536L6.97023 15.6768L6.00558 22.4293C5.94446 22.8571 6.4183 23.1558 6.77791 22.916ZM12.7779 18.084C12.61 17.972 12.3912 17.972 12.2232 18.084L7.15368 21.4637L7.99553 15.5707C8.01779 15.4149 7.96539 15.2577 7.85411 15.1464L3.56122 10.8536L9.57127 9.99498C9.74401 9.9703 9.89139 9.85735 9.96013 9.69696L12.5006 3.7693L15.041 9.69696C15.1097 9.85735 15.2571 9.9703 15.4298 9.99498L21.4399 10.8536L17.147 15.1464C17.0357 15.2577 16.9833 15.4149 17.0056 15.5707L17.8474 21.4637L12.7779 18.084Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Profile</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/settings">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
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
                      d="M4.86827 6.98959C4.70108 7.15678 4.67386 7.41823 4.80302 7.61628L5.90344 9.30359C5.68755 9.71727 5.50816 10.1495 5.36769 10.5958L3.39699 11.0107C3.16562 11.0594 3 11.2636 3 11.5V14.5C3 14.7364 3.16562 14.9406 3.39699 14.9893L5.36769 15.4042C5.50816 15.8505 5.68755 16.2827 5.90344 16.6964L4.80302 18.3837C4.67386 18.5818 4.70108 18.8432 4.86827 19.0104L6.98959 21.1317C7.15678 21.2989 7.41823 21.3261 7.61628 21.197L9.30359 20.0966C9.71727 20.3125 10.1495 20.4918 10.5958 20.6323L11.0107 22.603C11.0594 22.8344 11.2636 23 11.5 23H14.5C14.7364 23 14.9406 22.8344 14.9893 22.603L15.4042 20.6323C15.8505 20.4918 16.2827 20.3125 16.6964 20.0966L18.3837 21.197C18.5818 21.3261 18.8432 21.2989 19.0104 21.1317L21.1317 19.0104C21.2989 18.8432 21.3261 18.5818 21.197 18.3837L20.0966 16.6964C20.3125 16.2827 20.4918 15.8505 20.6323 15.4042L22.603 14.9893C22.8344 14.9406 23 14.7364 23 14.5V11.5C23 11.2636 22.8344 11.0594 22.603 11.0107L20.6323 10.5958C20.4918 10.1495 20.3125 9.71727 20.0966 9.30359L21.197 7.61628C21.3261 7.41823 21.2989 7.15678 21.1317 6.98959L19.0104 4.86827C18.8432 4.70108 18.5818 4.67386 18.3837 4.80302L16.6964 5.90344C16.2827 5.68755 15.8505 5.50816 15.4042 5.36769L14.9893 3.39699C14.9406 3.16562 14.7364 3 14.5 3H11.5C11.2636 3 11.0594 3.16562 11.0107 3.39699L10.5958 5.36769C10.1495 5.50816 9.71727 5.68755 9.30359 5.90344L7.61628 4.80302C7.41823 4.67386 7.15678 4.70108 6.98959 4.86827L4.86827 6.98959ZM6.90439 9.00778L5.86225 7.40983L7.40983 5.86225L9.00778 6.90439C9.16496 7.0069 9.36632 7.01277 9.52921 6.91957C10.0397 6.62749 10.5855 6.40075 11.155 6.24557C11.336 6.19625 11.4742 6.04975 11.5128 5.86616L11.9057 4H14.0943L14.4872 5.86616C14.5258 6.04975 14.664 6.19625 14.845 6.24557C15.4145 6.40075 15.9603 6.62749 16.4708 6.91957C16.6337 7.01277 16.835 7.0069 16.9922 6.90439L18.5902 5.86225L20.1378 7.40983L19.0956 9.00778C18.9931 9.16496 18.9872 9.36632 19.0804 9.52921C19.3725 10.0397 19.5992 10.5855 19.7544 11.155C19.8037 11.336 19.9502 11.4742 20.1338 11.5128L22 11.9057V14.0943L20.1338 14.4872C19.9502 14.5258 19.8037 14.664 19.7544 14.845C19.5992 15.4145 19.3725 15.9603 19.0804 16.4708C18.9872 16.6337 18.9931 16.835 19.0956 16.9922L20.1378 18.5902L18.5902 20.1378L16.9922 19.0956C16.835 18.9931 16.6337 18.9872 16.4708 19.0804C15.9603 19.3725 15.4145 19.5992 14.845 19.7544C14.664 19.8037 14.5258 19.9502 14.4872 20.1338L14.0943 22H11.9057L11.5128 20.1338C11.4742 19.9502 11.336 19.8037 11.155 19.7544C10.5855 19.5992 10.0397 19.3725 9.52921 19.0804C9.36632 18.9872 9.16496 18.9931 9.00778 19.0956L7.40983 20.1378L5.86225 18.5902L6.90439 16.9922C7.0069 16.835 7.01277 16.6337 6.91957 16.4708C6.62749 15.9603 6.40075 15.4145 6.24557 14.845C6.19625 14.664 6.04975 14.5258 5.86616 14.4872L4 14.0943V11.9057L5.86616 11.5128C6.04975 11.4742 6.19625 11.336 6.24557 11.155C6.40075 10.5855 6.62749 10.0397 6.91957 9.52921C7.01277 9.36632 7.0069 9.16496 6.90439 9.00778Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 13C9 15.2091 10.7909 17 13 17C15.2091 17 17 15.2091 17 13C17 10.7909 15.2091 9 13 9C10.7909 9 9 10.7909 9 13ZM16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Settings</p>
                </button>
              </NuxtLink>

              <NuxtLink to="/logout">
                <button
                  class="bg-[transparent] flex items-center text-left rounded w-[100%] py-[15px] pl-[30px] font-500-13"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7.5V5.5C16 4.13786 14.6725 3 13 3H8C6.32751 3 5 4.13786 5 5.5V19.5C5 20.8621 6.32751 22 8 22H13C14.6725 22 16 20.8621 16 19.5V17.5H17H16C16 16.8333 17 16.8333 17 17.5V19.5C17 21.4516 15.1935 23 13 23H8C5.8065 23 4 21.4516 4 19.5V5.5C4 3.54843 5.8065 2 8 2H13C15.1935 2 17 3.54843 17 5.5V7.5C17 7.77614 16.7761 8 16.5 8C16.2239 8 16 7.77614 16 7.5Z"
                      fill="#A4ADC8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 12C10.2239 12 10 12.2239 10 12.5C10 12.7761 10.2239 13 10.5 13H20.2929L17.1464 16.1464C16.9512 16.3417 16.9512 16.6583 17.1464 16.8536C17.3417 17.0488 17.6583 17.0488 17.8536 16.8536L21.8536 12.8536C22.0488 12.6583 22.0488 12.3417 21.8536 12.1464L17.8536 8.14645C17.6583 7.95118 17.3417 7.95118 17.1464 8.14645C16.9512 8.34171 16.9512 8.65829 17.1464 8.85355L20.2929 12H10.5Z"
                      fill="#A4ADC8"
                    />
                  </svg>

                  <p class="ml-[21px]">Logout</p>
                </button>
              </NuxtLink>
            </div>
          </div>

          <div class="body col-span-full xl:col-span-10 lg:col-span-9 mt-[40px] mb-[40px]">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  components: { Logo },
  name: "custom",
  data() {
    return {
      toggler: true,
      path: String,
    };
  },

  computed: {
    page() {
      return this.$store.state.index.page;
    },
  },
  methods: {
    toggleMenu: function () {
      const iconContainer = document.getElementById("icon-container");
      const topNav = document.getElementById("myTopnav");
      iconContainer.classList.toggle("change");
      topNav.classList.toggle("responsive");
      this.toggler = !this.toggler;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

a {
  display: block;
  color: #a4adc8;
}

a.nuxt-link-active {
  color: white;
  background: #2f3ced;
  border-radius: 4px;

  svg {
    path {
      fill: #fff;
    }
  }

  button:focus-visible {
    border: none;
    outline: none;
  }
}
</style>
