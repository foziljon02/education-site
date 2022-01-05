<template>
  <div class="sign-in h-[100vh] grid place-items-center bg-[#f5f7fd]">
    <div
      class="sign-in__container bg-white rounded w-[548px] pt-[41px] pb-[40px] px-[50px]"
    >
      <logo class="flex justify-center mb-[31px]" />
      <h4 class="sign-in__info mb-[5px]">Sign in</h4>
      <p class="sign-in__warning font-norm-14 mb-[28px]">
        Please sign in first to access all features
      </p>

      <button
        class="sign-in__options font-norm-14 w-[100%] flex justify-center border-[1px] border-gray-100 bg-transparent hover:bg-gray-50 text-white rounded pt-[15px] pb-[13px] mb-[20px]"
      >
        <svg
          class="mr-[14px]"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4184 12.7351C24.4184 11.7108 24.3353 10.9633 24.1554 10.1881H12.4584V14.8115H19.3243C19.1859 15.9605 18.4384 17.6908 16.7772 18.8535L16.754 19.0083L20.4523 21.8734L20.7086 21.899C23.0618 19.7256 24.4184 16.528 24.4184 12.7351Z"
            fill="#4285F4"
          />
          <path
            d="M12.4583 24.9167C15.8221 24.9167 18.6459 23.8093 20.7085 21.899L16.7772 18.8536C15.7252 19.5873 14.3132 20.0994 12.4583 20.0994C9.16383 20.0994 6.36764 17.9262 5.37088 14.9224L5.22477 14.9348L1.37915 17.9109L1.32886 18.0507C3.37754 22.1204 7.58571 24.9167 12.4583 24.9167Z"
            fill="#34A853"
          />
          <path
            d="M5.37088 14.9224C5.10787 14.1472 4.95566 13.3166 4.95566 12.4584C4.95566 11.6001 5.10787 10.7695 5.35704 9.99437L5.35008 9.82927L1.45626 6.8053L1.32886 6.8659C0.484497 8.55472 0 10.4512 0 12.4584C0 14.4655 0.484497 16.3619 1.32886 18.0507L5.37088 14.9224Z"
            fill="#FBBC05"
          />
          <path
            d="M12.4583 4.8172C14.7977 4.8172 16.3757 5.8277 17.2755 6.67216L20.7916 3.23917C18.6322 1.232 15.8221 0 12.4583 0C7.58571 0 3.37754 2.79619 1.32886 6.86588L5.35704 9.99435C6.36764 6.99051 9.16383 4.8172 12.4583 4.8172Z"
            fill="#EB4335"
          />
        </svg>
        <p class="text-[#5A7180]">Continue with Google</p>
      </button>

      <button
        class="sign-in__options font-norm-14 w-[100%] flex justify-center border-[1px] border-gray-100 bg-[#3C5A9A] text-white rounded pt-[15px] pb-[13px] mb-[20px]"
      >
        <svg
          class="mr-[19.5px]"
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.42787 24.9494V13.6141H12.2327L12.8024 9.19657H8.42787V6.37609C8.42787 5.09713 8.78307 4.22545 10.6173 4.22545L12.9566 4.22437V0.273367C12.5518 0.219727 11.1633 0.0994873 9.54783 0.0994873C6.17511 0.0994873 3.86607 2.15809 3.86607 5.93881V9.19669H0.0513916V13.6142H3.86595V24.9496L8.42787 24.9494Z"
            fill="white"
          />
        </svg>

        <p>Continue with Google</p>
      </button>

      <div class="separator flex justify-between items-center mb-[20px]">
          <div class="separator__line"></div>
          <div class="separator__text font-norm-14">OR</div>
          <div class="separator__line"></div>
      </div>

      <form action="">
        <div class="form-control">
          <legend class="form-control__text">Email Address</legend>
          <input type="text" class="form-control__input" placeholder="e.g example@gmail.com">
        </div>

        <div class="form-control">
          <legend class="form-control__text">Email Address</legend>
          <input type="text" class="form-control__input" placeholder="Your Password">
        </div>
      </form>

      <div class="flex justify-between items-center mb-[30px]">
        <div class="remember flex items-center font-norm-14">
          <input type="checkbox" class="remember__input w-[20px] h-[20px] mr-[10px]">
          <p class="remember__text leading-[22px]">Keep me Sign in</p>
        </div>

        <p class="font-norm-14 text-[#657297]">Forgot Password</p>
      </div>

      <button class="font-norm-14 bg-[#2F3CED] rounded-[4px] text-white w-[100%] py-[14px] mb-[18px]">
        Sign In
      </button>

      <div class="flex justify-center">
        <p class="font-norm-14 text-[#5A7180]">Don't Have Account?</p>
        <p class="font-600-14 text-[blue]">Sign Up</p>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  components: { Logo },
  head() {
    return {
      title: "Sign in",
    };
  },
};
</script>

<style lang="scss" scoped></style>
