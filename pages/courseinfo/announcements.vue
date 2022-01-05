<template>
  <div class="reviews">
    <div
      class="join-offer bg-[#515be50e] py-[13px] px-[20px] rounded flex items-center justify-between mb-[21px]"
    >
      <div>
        <p class="font-500-13">Teach the world online</p>
        <p class="font-norm-12 text-[#5a7180]">
          Create an online video course, reach students accross the globe, and
          earn money
        </p>
      </div>

      <div>
        <button
          class="bg-transparent border-[#5a7180] border-[1px] py-[7px] px-[12.8px] rounded font-norm-14 flex justify-center"
        >
          <p class="text-[#5a7180]">Become a mentor</p>
        </button>
      </div>
    </div>

    <div class="flex bg-white py-[15px] pl-[20px] mb-[1px]">
      <div>
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
            fill="#FFA82B"
          />
          <mask
            id="mask0_0_862"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="42"
            height="42"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_0_862)">
            <g filter="url(#filter0_d_0_862)">
              <rect
                y="-10.5"
                width="37.8"
                height="56.7"
                fill="url(#pattern0)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_0_862"
              x="-30"
              y="-16.5"
              width="97.7998"
              height="116.7"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="24" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0687878 0 0 0 0 0.0894491 0 0 0 0 0.372509 0 0 0 0.0892428 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_862"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_862"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_0_862"
                transform="scale(0.0131579 0.00877193)"
              />
            </pattern>
            <image
              id="image0_0_862"
              width="76"
              height="114"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>

      <div class="ml-[10px]">
        <p class="font-500-13">Wayne Patel</p>
        <p class="font-norm-12 text-[#5a7180]">Instructor | 3 years ago</p>
      </div>
    </div>

    <div class="bg-white">
      <p class="font-norm-12 text-[#5a7180] pt-[20px] pr-[50px] pb-[15px] pl-[20px] ">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
        Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
        Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
        facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
        Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
        ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
        <br />
        <br />
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
        Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
        Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
        facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
        Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
        ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Announcements",
  mounted() {
    const accordion = document.querySelectorAll(".accordian_container");

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        console.log("done");
        this.classList.toggle("active");
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
