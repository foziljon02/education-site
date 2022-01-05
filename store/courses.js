export const state = () => ({
  courses: [
    {
      id: 0,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      price: "993.23",
      technology: {
        name: "Angular Js",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Brad Traversy",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as Realtime database.",
      progress: 65,
      status: "Ongoing",
      action: "Continue",
      rating: 4,
    },

    {
      id: 1,
      name: "Sketch from A to Z (2019): Become an app designer",
      type: "UI/UX Design",
      price: "993.23",
      technology: {
        name: "Sketch",
        icon: `<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48555 8.62354L13.4719 23.9724L0.048317 8.62354H5.48555Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4605 8.62354L13.4741 23.9724L26.8977 8.62354H21.4605Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48526 8.62354H21.4579L13.4716 23.9724L5.48526 8.62354Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.90561 0.90249L5.48526 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L21.0375 0.90249L21.4579 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8977 8.62349L21.0401 0.902466L21.4605 8.62349H26.8977Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.048317 8.62349L5.9059 0.902466L5.48555 8.62349H0.048317Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.48526 8.62351H21.4579L13.4716 0.117188Z" fill="#FEEEB7"/>
        </svg>
        `,
        smallIcon: `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8602 6.10828L9.4802 16.9804L0.0339966 6.10828H3.8602Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1018 6.10828L9.48178 16.9804L18.928 6.10828H15.1018Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85999 6.10828H15.1L9.47999 16.9804L3.85999 6.10828Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L4.15579 0.639264L3.85999 6.10832L9.47999 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47998 0.0830078L14.8042 0.639264L15.1 6.10832L9.47998 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.928 6.10834L14.806 0.639282L15.1018 6.10834H18.928Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0339966 6.10834L4.156 0.639282L3.8602 6.10834H0.0339966Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L3.85999 6.10832H15.1L9.47999 0.0830078Z" fill="#FEEEB7"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Inside Code Media",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A.",
      progress: 29,
      status: "Done",
      action: "Get Reward",
      rating: 4,
    },

    {
      id: 2,
      name: "Laravel 2019, the complete guide with real world projects",
      type: "Backend Development",
      price: "993.23",
      technology: {
        name: "Laravel",
        icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3747 10.1143C22.5767 10.0875 25.8551 9.49499 26.0031 9.46135C26.0086 9.46011 26.014 9.45887 26.0194 9.45763C26.1608 9.42523 26.286 9.39654 26.461 9.63648C26.6018 9.82925 28.1283 11.7648 28.8545 12.6855C28.9076 12.7528 28.9563 12.8146 29 12.87V13.3941C28.9834 13.3983 28.9662 13.4024 28.9488 13.4063C28.7333 13.4534 25.2059 14.3285 25.2059 14.3285L22.3209 10.3701C22.2402 10.2557 22.1729 10.1413 22.3747 10.1143ZM29 19.3841V14.5812C27.9192 14.8692 26.5521 15.2333 26.0124 15.3768C26.8266 16.4661 28.0994 18.1709 29 19.3841ZM18.1754 23.5625C18.402 23.8898 18.5404 23.8646 18.7166 23.789C18.823 23.7434 22.1713 22.6095 24.8675 21.6964C26.6352 21.0978 28.1225 20.5941 28.2322 20.5543C28.4865 20.4618 28.4329 20.3799 28.3543 20.2597C28.3473 20.2491 28.3402 20.2382 28.333 20.2269C28.2954 20.1679 27.7253 19.3889 27.0716 18.4958C26.1914 17.293 25.1596 15.8833 25.0729 15.7461C24.9342 15.5265 24.8592 15.5509 24.6627 15.6149C24.6452 15.6206 24.6268 15.6266 24.6072 15.6328L15.0004 18.1326C15.0004 18.1326 17.9489 23.2351 18.1754 23.5625Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.37588 3.2437C6.08581 3.21141 6.15061 3.37295 6.46247 3.83548L14.2981 16.9355L24.1507 14.5753C23.6048 13.8015 21.1266 10.2881 20.887 9.95278C20.6179 9.57578 20.8938 9.40076 21.3314 9.32679C21.7689 9.2527 25.5387 8.61991 25.8618 8.57279C26.185 8.52566 26.4409 8.41125 26.9658 9.04403C27.2345 9.36779 28.1453 10.502 29 11.5651V5.4375C29 3.9397 28.4681 2.65894 27.4047 1.59534C26.3411 0.531855 25.0603 0 23.5625 0H5.4375C3.9397 0 2.65894 0.531855 1.59534 1.59534C0.985325 2.20559 0.551118 2.8872 0.291138 3.64018C2.06716 3.49427 4.87914 3.26635 5.37599 3.2437H5.37588Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.064 25.3256C18.2332 25.5773 17.8606 25.7022 17.3195 24.947C16.9141 24.3814 14.7223 20.4335 13.6476 18.4874C11.6136 19.02 7.89128 19.9915 6.81783 20.2495C5.77021 20.5012 5.32275 19.873 5.15067 19.4859C5.03003 19.2143 1.95852 12.5921 0 8.34314V23.5625C0 25.0604 0.531855 26.3409 1.59534 27.4046C2.65894 28.4681 3.9397 29 5.4375 29H23.5625C25.0603 29 26.3411 28.4681 27.4047 27.4046C28.4681 26.3409 29 25.0604 29 23.5625V21.7748C26.7752 22.5886 19.6237 25.156 19.064 25.3256Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84354 18.724C7.13807 18.6566 12.6563 17.336 12.7741 17.3107C12.892 17.2854 12.9676 17.2181 12.8414 16.9995C12.7152 16.7809 5.48563 4.30181 5.48563 4.30181C5.41891 4.18728 5.43794 4.14911 5.25658 4.15862C5.09493 4.16723 1.00423 4.53222 0.057197 4.6113C0.0292419 4.81154 0.0118104 5.01312 0.00497437 5.2152C0.966392 7.18346 6.48455 18.5639 6.51547 18.6566C6.54912 18.7576 6.54912 18.7913 6.84354 18.724Z" fill="#F35045"/>
        </svg>
        `,
        smallIcon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1162 5.92908C13.2347 5.91334 15.1564 5.56603 15.2432 5.54631C15.2464 5.54559 15.2496 5.54486 15.2528 5.54413C15.3357 5.52514 15.4091 5.50832 15.5117 5.64898C15.5942 5.76198 16.4891 6.89673 16.9148 7.43641C16.9459 7.47581 16.9744 7.51205 17 7.54448V7.85174C16.9903 7.85419 16.9802 7.85659 16.97 7.85884C16.8437 7.88647 14.7759 8.39946 14.7759 8.39946L13.0847 6.07902C13.0374 6.01195 12.9979 5.94488 13.1162 5.92908ZM17 11.3631V8.54761C16.3664 8.71641 15.565 8.92984 15.2487 9.01398C15.7259 9.65254 16.4721 10.6519 17 11.3631ZM10.6546 13.8125C10.7874 14.0043 10.8685 13.9896 10.9718 13.9453C11.0342 13.9186 12.9969 13.2539 14.5774 12.7186L14.5774 12.7186C15.6137 12.3677 16.4856 12.0724 16.5499 12.0491C16.699 11.9948 16.6676 11.9468 16.6215 11.8764L16.609 11.8572C16.587 11.8226 16.2529 11.3661 15.8698 10.8426L15.8696 10.8423C15.3536 10.1373 14.7487 9.31091 14.6979 9.23046C14.6166 9.10175 14.5726 9.11608 14.4575 9.15356L14.4249 9.16406L8.79333 10.6294C8.79333 10.6294 10.5218 13.6206 10.6546 13.8125Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15137 1.90148C3.56753 1.88255 3.60552 1.97725 3.78833 2.24838L8.38165 9.92773L14.1573 8.54416C13.8373 8.09054 12.3846 6.03095 12.2441 5.83439C12.0863 5.61339 12.2481 5.51079 12.5046 5.46743C12.7611 5.424 14.9709 5.05305 15.1603 5.02543C15.3498 4.9978 15.4998 4.93073 15.8075 5.30168C15.965 5.49146 16.499 6.15632 17 6.77955V3.1875C17 2.30948 16.6882 1.55869 16.0648 0.935199C15.4413 0.311777 14.6905 0 13.8125 0H3.18749C2.30947 0 1.55868 0.311777 0.935189 0.935199C0.577592 1.29293 0.323057 1.6925 0.170654 2.1339C1.21177 2.04837 2.86017 1.91476 3.15143 1.90148H3.15137Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1754 14.6449C10.6884 14.7925 10.47 14.8657 10.1528 14.423C9.91518 14.0914 8.63029 11.7772 8.00029 10.6363C6.80797 10.9486 4.62593 11.5181 3.99666 11.6693C3.38254 11.8168 3.12023 11.4486 3.01936 11.2217C2.94864 11.0624 1.1481 7.18046 0 4.6897V13.6114C0 14.4895 0.311777 15.2401 0.935199 15.8637C1.55869 16.4871 2.30948 16.7989 3.1875 16.7989H13.8125C14.6905 16.7989 15.4413 16.4871 16.0648 15.8637C16.6882 15.2401 17 14.4895 17 13.6114V12.5634C15.6958 13.0405 11.5036 14.5455 11.1754 14.6449Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.01174 10.9761C4.1844 10.9366 7.41925 10.1625 7.48831 10.1477C7.55737 10.1329 7.60173 10.0934 7.52775 9.96524C7.45378 9.83708 3.21573 2.52177 3.21573 2.52177C3.17662 2.45463 3.18777 2.43225 3.08146 2.43783C2.9867 2.44288 0.588699 2.65684 0.033543 2.70319C0.0171555 2.82058 0.00693699 2.93874 0.00292969 3.0572C0.56652 4.21101 3.8013 10.8823 3.81943 10.9366C3.83915 10.9959 3.83915 11.0156 4.01174 10.9761Z" fill="#F35045"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "JuanD MeGon",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful Build a RESTful API for a market system using Laravel and dominates the challenging RESTful …",
      progress: 10,
      status: "Ongoing",
      action: "Continue",
      rating: 4,
    },

    {
      id: 3,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      technology: {
        name: "Bootsrap",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Antony Alicea",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites",
      progress: 85,
      status: "Paused",
      action: "Continue",
      rating: 4,
    },

    {
      id: 4,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      technology: {
        name: "Angular Js",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Brad Traversy",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as Realtime database.",
      progress: 65,
      status: "Ongoing",
      action: "Continue",
      rating: 3,
    },

    {
      id: 5,
      name: "Sketch from A to Z (2019): Become an app designer",
      type: "UI/UX Design",
      price: "993.23",
      technology: {
        name: "Sketch",
        icon: `<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48555 8.62354L13.4719 23.9724L0.048317 8.62354H5.48555Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4605 8.62354L13.4741 23.9724L26.8977 8.62354H21.4605Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48526 8.62354H21.4579L13.4716 23.9724L5.48526 8.62354Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.90561 0.90249L5.48526 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L21.0375 0.90249L21.4579 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8977 8.62349L21.0401 0.902466L21.4605 8.62349H26.8977Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.048317 8.62349L5.9059 0.902466L5.48555 8.62349H0.048317Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.48526 8.62351H21.4579L13.4716 0.117188Z" fill="#FEEEB7"/>
        </svg>
        `,
        smallIcon: `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8602 6.10828L9.4802 16.9804L0.0339966 6.10828H3.8602Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1018 6.10828L9.48178 16.9804L18.928 6.10828H15.1018Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85999 6.10828H15.1L9.47999 16.9804L3.85999 6.10828Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L4.15579 0.639264L3.85999 6.10832L9.47999 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47998 0.0830078L14.8042 0.639264L15.1 6.10832L9.47998 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.928 6.10834L14.806 0.639282L15.1018 6.10834H18.928Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0339966 6.10834L4.156 0.639282L3.8602 6.10834H0.0339966Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L3.85999 6.10832H15.1L9.47999 0.0830078Z" fill="#FEEEB7"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Inside Code Media",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A.",
      progress: 29,
      status: "Done",
      action: "Get Reward",
      rating: 3,
    },

    {
      id: 6,
      name: "Laravel 2019, the complete guide with real world projects",
      type: "Backend Development",
      price: "993.23",
      technology: {
        name: "Laravel",
        icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3747 10.1143C22.5767 10.0875 25.8551 9.49499 26.0031 9.46135C26.0086 9.46011 26.014 9.45887 26.0194 9.45763C26.1608 9.42523 26.286 9.39654 26.461 9.63648C26.6018 9.82925 28.1283 11.7648 28.8545 12.6855C28.9076 12.7528 28.9563 12.8146 29 12.87V13.3941C28.9834 13.3983 28.9662 13.4024 28.9488 13.4063C28.7333 13.4534 25.2059 14.3285 25.2059 14.3285L22.3209 10.3701C22.2402 10.2557 22.1729 10.1413 22.3747 10.1143ZM29 19.3841V14.5812C27.9192 14.8692 26.5521 15.2333 26.0124 15.3768C26.8266 16.4661 28.0994 18.1709 29 19.3841ZM18.1754 23.5625C18.402 23.8898 18.5404 23.8646 18.7166 23.789C18.823 23.7434 22.1713 22.6095 24.8675 21.6964C26.6352 21.0978 28.1225 20.5941 28.2322 20.5543C28.4865 20.4618 28.4329 20.3799 28.3543 20.2597C28.3473 20.2491 28.3402 20.2382 28.333 20.2269C28.2954 20.1679 27.7253 19.3889 27.0716 18.4958C26.1914 17.293 25.1596 15.8833 25.0729 15.7461C24.9342 15.5265 24.8592 15.5509 24.6627 15.6149C24.6452 15.6206 24.6268 15.6266 24.6072 15.6328L15.0004 18.1326C15.0004 18.1326 17.9489 23.2351 18.1754 23.5625Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.37588 3.2437C6.08581 3.21141 6.15061 3.37295 6.46247 3.83548L14.2981 16.9355L24.1507 14.5753C23.6048 13.8015 21.1266 10.2881 20.887 9.95278C20.6179 9.57578 20.8938 9.40076 21.3314 9.32679C21.7689 9.2527 25.5387 8.61991 25.8618 8.57279C26.185 8.52566 26.4409 8.41125 26.9658 9.04403C27.2345 9.36779 28.1453 10.502 29 11.5651V5.4375C29 3.9397 28.4681 2.65894 27.4047 1.59534C26.3411 0.531855 25.0603 0 23.5625 0H5.4375C3.9397 0 2.65894 0.531855 1.59534 1.59534C0.985325 2.20559 0.551118 2.8872 0.291138 3.64018C2.06716 3.49427 4.87914 3.26635 5.37599 3.2437H5.37588Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.064 25.3256C18.2332 25.5773 17.8606 25.7022 17.3195 24.947C16.9141 24.3814 14.7223 20.4335 13.6476 18.4874C11.6136 19.02 7.89128 19.9915 6.81783 20.2495C5.77021 20.5012 5.32275 19.873 5.15067 19.4859C5.03003 19.2143 1.95852 12.5921 0 8.34314V23.5625C0 25.0604 0.531855 26.3409 1.59534 27.4046C2.65894 28.4681 3.9397 29 5.4375 29H23.5625C25.0603 29 26.3411 28.4681 27.4047 27.4046C28.4681 26.3409 29 25.0604 29 23.5625V21.7748C26.7752 22.5886 19.6237 25.156 19.064 25.3256Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84354 18.724C7.13807 18.6566 12.6563 17.336 12.7741 17.3107C12.892 17.2854 12.9676 17.2181 12.8414 16.9995C12.7152 16.7809 5.48563 4.30181 5.48563 4.30181C5.41891 4.18728 5.43794 4.14911 5.25658 4.15862C5.09493 4.16723 1.00423 4.53222 0.057197 4.6113C0.0292419 4.81154 0.0118104 5.01312 0.00497437 5.2152C0.966392 7.18346 6.48455 18.5639 6.51547 18.6566C6.54912 18.7576 6.54912 18.7913 6.84354 18.724Z" fill="#F35045"/>
        </svg>
        `,
        smallIcon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1162 5.92908C13.2347 5.91334 15.1564 5.56603 15.2432 5.54631C15.2464 5.54559 15.2496 5.54486 15.2528 5.54413C15.3357 5.52514 15.4091 5.50832 15.5117 5.64898C15.5942 5.76198 16.4891 6.89673 16.9148 7.43641C16.9459 7.47581 16.9744 7.51205 17 7.54448V7.85174C16.9903 7.85419 16.9802 7.85659 16.97 7.85884C16.8437 7.88647 14.7759 8.39946 14.7759 8.39946L13.0847 6.07902C13.0374 6.01195 12.9979 5.94488 13.1162 5.92908ZM17 11.3631V8.54761C16.3664 8.71641 15.565 8.92984 15.2487 9.01398C15.7259 9.65254 16.4721 10.6519 17 11.3631ZM10.6546 13.8125C10.7874 14.0043 10.8685 13.9896 10.9718 13.9453C11.0342 13.9186 12.9969 13.2539 14.5774 12.7186L14.5774 12.7186C15.6137 12.3677 16.4856 12.0724 16.5499 12.0491C16.699 11.9948 16.6676 11.9468 16.6215 11.8764L16.609 11.8572C16.587 11.8226 16.2529 11.3661 15.8698 10.8426L15.8696 10.8423C15.3536 10.1373 14.7487 9.31091 14.6979 9.23046C14.6166 9.10175 14.5726 9.11608 14.4575 9.15356L14.4249 9.16406L8.79333 10.6294C8.79333 10.6294 10.5218 13.6206 10.6546 13.8125Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15137 1.90148C3.56753 1.88255 3.60552 1.97725 3.78833 2.24838L8.38165 9.92773L14.1573 8.54416C13.8373 8.09054 12.3846 6.03095 12.2441 5.83439C12.0863 5.61339 12.2481 5.51079 12.5046 5.46743C12.7611 5.424 14.9709 5.05305 15.1603 5.02543C15.3498 4.9978 15.4998 4.93073 15.8075 5.30168C15.965 5.49146 16.499 6.15632 17 6.77955V3.1875C17 2.30948 16.6882 1.55869 16.0648 0.935199C15.4413 0.311777 14.6905 0 13.8125 0H3.18749C2.30947 0 1.55868 0.311777 0.935189 0.935199C0.577592 1.29293 0.323057 1.6925 0.170654 2.1339C1.21177 2.04837 2.86017 1.91476 3.15143 1.90148H3.15137Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1754 14.6449C10.6884 14.7925 10.47 14.8657 10.1528 14.423C9.91518 14.0914 8.63029 11.7772 8.00029 10.6363C6.80797 10.9486 4.62593 11.5181 3.99666 11.6693C3.38254 11.8168 3.12023 11.4486 3.01936 11.2217C2.94864 11.0624 1.1481 7.18046 0 4.6897V13.6114C0 14.4895 0.311777 15.2401 0.935199 15.8637C1.55869 16.4871 2.30948 16.7989 3.1875 16.7989H13.8125C14.6905 16.7989 15.4413 16.4871 16.0648 15.8637C16.6882 15.2401 17 14.4895 17 13.6114V12.5634C15.6958 13.0405 11.5036 14.5455 11.1754 14.6449Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.01174 10.9761C4.1844 10.9366 7.41925 10.1625 7.48831 10.1477C7.55737 10.1329 7.60173 10.0934 7.52775 9.96524C7.45378 9.83708 3.21573 2.52177 3.21573 2.52177C3.17662 2.45463 3.18777 2.43225 3.08146 2.43783C2.9867 2.44288 0.588699 2.65684 0.033543 2.70319C0.0171555 2.82058 0.00693699 2.93874 0.00292969 3.0572C0.56652 4.21101 3.8013 10.8823 3.81943 10.9366C3.83915 10.9959 3.83915 11.0156 4.01174 10.9761Z" fill="#F35045"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "JuanD MeGon",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful Build a RESTful API for a market system using Laravel and dominates the challenging RESTful …",
      progress: 10,
      status: "Ongoing",
      action: "Continue",
      rating: 4,
    },

    {
      id: 7,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      technology: {
        name: "Bootsrap",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Antony Alicea",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites",
      progress: 85,
      status: "Paused",
      action: "Continue",
      rating: 2,
    },

    {
      id: 8,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      technology: {
        name: "Angular Js",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Brad Traversy",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as Realtime database.",
      progress: 65,
      status: "Ongoing",
      action: "Continue",
      rating: 4,
    },

    {
      id: 9,
      name: "Sketch from A to Z (2019): Become an app designer",
      type: "UI/UX Design",
      price: "993.23",
      technology: {
        name: "Sketch",
        icon: `<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48555 8.62354L13.4719 23.9724L0.048317 8.62354H5.48555Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4605 8.62354L13.4741 23.9724L26.8977 8.62354H21.4605Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48526 8.62354H21.4579L13.4716 23.9724L5.48526 8.62354Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.90561 0.90249L5.48526 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L21.0375 0.90249L21.4579 8.62351L13.4716 0.117188Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8977 8.62349L21.0401 0.902466L21.4605 8.62349H26.8977Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.048317 8.62349L5.9059 0.902466L5.48555 8.62349H0.048317Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4716 0.117188L5.48526 8.62351H21.4579L13.4716 0.117188Z" fill="#FEEEB7"/>
        </svg>
        `,
        smallIcon: `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8602 6.10828L9.4802 16.9804L0.0339966 6.10828H3.8602Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1018 6.10828L9.48178 16.9804L18.928 6.10828H15.1018Z" fill="#EA6C00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85999 6.10828H15.1L9.47999 16.9804L3.85999 6.10828Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L4.15579 0.639264L3.85999 6.10832L9.47999 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47998 0.0830078L14.8042 0.639264L15.1 6.10832L9.47998 0.0830078Z" fill="#FDD231"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.928 6.10834L14.806 0.639282L15.1018 6.10834H18.928Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0339966 6.10834L4.156 0.639282L3.8602 6.10834H0.0339966Z" fill="#FDAD00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47999 0.0830078L3.85999 6.10832H15.1L9.47999 0.0830078Z" fill="#FEEEB7"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Inside Code Media",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A.",
      progress: 29,
      status: "Done",
      action: "Get Reward",
      rating: 4,
    },

    {
      id: 10,
      name: "Laravel 2019, the complete guide with real world projects",
      type: "Backend Development",
      price: "993.23",
      technology: {
        name: "Laravel",
        icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3747 10.1143C22.5767 10.0875 25.8551 9.49499 26.0031 9.46135C26.0086 9.46011 26.014 9.45887 26.0194 9.45763C26.1608 9.42523 26.286 9.39654 26.461 9.63648C26.6018 9.82925 28.1283 11.7648 28.8545 12.6855C28.9076 12.7528 28.9563 12.8146 29 12.87V13.3941C28.9834 13.3983 28.9662 13.4024 28.9488 13.4063C28.7333 13.4534 25.2059 14.3285 25.2059 14.3285L22.3209 10.3701C22.2402 10.2557 22.1729 10.1413 22.3747 10.1143ZM29 19.3841V14.5812C27.9192 14.8692 26.5521 15.2333 26.0124 15.3768C26.8266 16.4661 28.0994 18.1709 29 19.3841ZM18.1754 23.5625C18.402 23.8898 18.5404 23.8646 18.7166 23.789C18.823 23.7434 22.1713 22.6095 24.8675 21.6964C26.6352 21.0978 28.1225 20.5941 28.2322 20.5543C28.4865 20.4618 28.4329 20.3799 28.3543 20.2597C28.3473 20.2491 28.3402 20.2382 28.333 20.2269C28.2954 20.1679 27.7253 19.3889 27.0716 18.4958C26.1914 17.293 25.1596 15.8833 25.0729 15.7461C24.9342 15.5265 24.8592 15.5509 24.6627 15.6149C24.6452 15.6206 24.6268 15.6266 24.6072 15.6328L15.0004 18.1326C15.0004 18.1326 17.9489 23.2351 18.1754 23.5625Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.37588 3.2437C6.08581 3.21141 6.15061 3.37295 6.46247 3.83548L14.2981 16.9355L24.1507 14.5753C23.6048 13.8015 21.1266 10.2881 20.887 9.95278C20.6179 9.57578 20.8938 9.40076 21.3314 9.32679C21.7689 9.2527 25.5387 8.61991 25.8618 8.57279C26.185 8.52566 26.4409 8.41125 26.9658 9.04403C27.2345 9.36779 28.1453 10.502 29 11.5651V5.4375C29 3.9397 28.4681 2.65894 27.4047 1.59534C26.3411 0.531855 25.0603 0 23.5625 0H5.4375C3.9397 0 2.65894 0.531855 1.59534 1.59534C0.985325 2.20559 0.551118 2.8872 0.291138 3.64018C2.06716 3.49427 4.87914 3.26635 5.37599 3.2437H5.37588Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.064 25.3256C18.2332 25.5773 17.8606 25.7022 17.3195 24.947C16.9141 24.3814 14.7223 20.4335 13.6476 18.4874C11.6136 19.02 7.89128 19.9915 6.81783 20.2495C5.77021 20.5012 5.32275 19.873 5.15067 19.4859C5.03003 19.2143 1.95852 12.5921 0 8.34314V23.5625C0 25.0604 0.531855 26.3409 1.59534 27.4046C2.65894 28.4681 3.9397 29 5.4375 29H23.5625C25.0603 29 26.3411 28.4681 27.4047 27.4046C28.4681 26.3409 29 25.0604 29 23.5625V21.7748C26.7752 22.5886 19.6237 25.156 19.064 25.3256Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84354 18.724C7.13807 18.6566 12.6563 17.336 12.7741 17.3107C12.892 17.2854 12.9676 17.2181 12.8414 16.9995C12.7152 16.7809 5.48563 4.30181 5.48563 4.30181C5.41891 4.18728 5.43794 4.14911 5.25658 4.15862C5.09493 4.16723 1.00423 4.53222 0.057197 4.6113C0.0292419 4.81154 0.0118104 5.01312 0.00497437 5.2152C0.966392 7.18346 6.48455 18.5639 6.51547 18.6566C6.54912 18.7576 6.54912 18.7913 6.84354 18.724Z" fill="#F35045"/>
        </svg>
        `,
        smallIcon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1162 5.92908C13.2347 5.91334 15.1564 5.56603 15.2432 5.54631C15.2464 5.54559 15.2496 5.54486 15.2528 5.54413C15.3357 5.52514 15.4091 5.50832 15.5117 5.64898C15.5942 5.76198 16.4891 6.89673 16.9148 7.43641C16.9459 7.47581 16.9744 7.51205 17 7.54448V7.85174C16.9903 7.85419 16.9802 7.85659 16.97 7.85884C16.8437 7.88647 14.7759 8.39946 14.7759 8.39946L13.0847 6.07902C13.0374 6.01195 12.9979 5.94488 13.1162 5.92908ZM17 11.3631V8.54761C16.3664 8.71641 15.565 8.92984 15.2487 9.01398C15.7259 9.65254 16.4721 10.6519 17 11.3631ZM10.6546 13.8125C10.7874 14.0043 10.8685 13.9896 10.9718 13.9453C11.0342 13.9186 12.9969 13.2539 14.5774 12.7186L14.5774 12.7186C15.6137 12.3677 16.4856 12.0724 16.5499 12.0491C16.699 11.9948 16.6676 11.9468 16.6215 11.8764L16.609 11.8572C16.587 11.8226 16.2529 11.3661 15.8698 10.8426L15.8696 10.8423C15.3536 10.1373 14.7487 9.31091 14.6979 9.23046C14.6166 9.10175 14.5726 9.11608 14.4575 9.15356L14.4249 9.16406L8.79333 10.6294C8.79333 10.6294 10.5218 13.6206 10.6546 13.8125Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15137 1.90148C3.56753 1.88255 3.60552 1.97725 3.78833 2.24838L8.38165 9.92773L14.1573 8.54416C13.8373 8.09054 12.3846 6.03095 12.2441 5.83439C12.0863 5.61339 12.2481 5.51079 12.5046 5.46743C12.7611 5.424 14.9709 5.05305 15.1603 5.02543C15.3498 4.9978 15.4998 4.93073 15.8075 5.30168C15.965 5.49146 16.499 6.15632 17 6.77955V3.1875C17 2.30948 16.6882 1.55869 16.0648 0.935199C15.4413 0.311777 14.6905 0 13.8125 0H3.18749C2.30947 0 1.55868 0.311777 0.935189 0.935199C0.577592 1.29293 0.323057 1.6925 0.170654 2.1339C1.21177 2.04837 2.86017 1.91476 3.15143 1.90148H3.15137Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1754 14.6449C10.6884 14.7925 10.47 14.8657 10.1528 14.423C9.91518 14.0914 8.63029 11.7772 8.00029 10.6363C6.80797 10.9486 4.62593 11.5181 3.99666 11.6693C3.38254 11.8168 3.12023 11.4486 3.01936 11.2217C2.94864 11.0624 1.1481 7.18046 0 4.6897V13.6114C0 14.4895 0.311777 15.2401 0.935199 15.8637C1.55869 16.4871 2.30948 16.7989 3.1875 16.7989H13.8125C14.6905 16.7989 15.4413 16.4871 16.0648 15.8637C16.6882 15.2401 17 14.4895 17 13.6114V12.5634C15.6958 13.0405 11.5036 14.5455 11.1754 14.6449Z" fill="#F35045"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.01174 10.9761C4.1844 10.9366 7.41925 10.1625 7.48831 10.1477C7.55737 10.1329 7.60173 10.0934 7.52775 9.96524C7.45378 9.83708 3.21573 2.52177 3.21573 2.52177C3.17662 2.45463 3.18777 2.43225 3.08146 2.43783C2.9867 2.44288 0.588699 2.65684 0.033543 2.70319C0.0171555 2.82058 0.00693699 2.93874 0.00292969 3.0572C0.56652 4.21101 3.8013 10.8823 3.81943 10.9366C3.83915 10.9959 3.83915 11.0156 4.01174 10.9761Z" fill="#F35045"/>
        </svg>
        `,
      },
      catagory: "Web Development",
      instructor: {
        name: "JuanD MeGon",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful Build a RESTful API for a market system using Laravel and dominates the challenging RESTful …",
      progress: 10,
      status: "Ongoing",
      action: "Continue",
      rating: 4,
    },

    {
      id: 11,
      name: "Learn Angular js to build beautifull landingpage for your business",
      type: "Frontend Development",
      price: "993.23",
      technology: {
        name: "Bootsrap",
        icon: `<svg
        width="27"
        height="29"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0105591 4.85348L13.2794 0.0743408L26.9055 4.7685L24.6992 22.515L13.2794 28.9084L2.0382 22.6L0.0105591 4.85348Z"
          fill="#E23237"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9055 4.7685L13.2794 0.0743408V28.9084L24.6992 22.5257L26.9055 4.7685Z"
          fill="#B52E31"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03235 22.0372L13.3004 3.44104L21.9677 22.0903L19.0156 22.0372L17.1981 17.789H9.78097L8.121 21.9841L5.03235 22.0372ZM16.116 15.3039L13.3215 9.39905L10.863 15.3039H16.116Z"
          fill="white"
        />
      </svg>`,
        smallIcon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00744629 3.34723L9.34476 0.0512695L18.9335 3.28862L17.3809 15.5276L9.34476 19.9369L1.4343 15.5862L0.00744629 3.34723Z" fill="#E23237"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9336 3.28862L9.34479 0.0512695V19.9369L17.381 15.5349L18.9336 3.28862Z" fill="#B52E31"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54132 15.198L9.35955 2.37305L15.4588 15.2346L13.3814 15.198L12.1024 12.2682H6.88295L5.71482 15.1614L3.54132 15.198ZM11.3409 10.5543L9.37439 6.48202L7.64436 10.5543H11.3409Z" fill="white"/>
      </svg>
      `,
      },
      catagory: "Web Development",
      instructor: {
        name: "Antony Alicea",
        img: "https://www.adobe.com/express/create/media_11f42b2626858bd6f2636614d6e6d9420187dcbe5.jpeg?width=400&format=jpeg&optimize=medium",
      },
      description:
        "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites",
      progress: 85,
      status: "Paused",
      action: "Continue",
      rating: 4,
    },
  ],
});

export const mutations = {};
