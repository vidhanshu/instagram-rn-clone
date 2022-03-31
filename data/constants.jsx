//all the current stories
export const STORIES = [
  {
    user: "vid.dev",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidhanshu_borade_5hzTEMI.png",
    owner: true,
  },
  {
    user: "Artist.Vidit",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidit_chawda_xF1lkmH.png",
  },
  {
    user: "Sobhan",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/sobhan_bera_ASJaCFd.png",
  },
  {
    user: "Laksh",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/laksh_samdariya_uCzjpQN.jpg",
  },
  {
    user: "Shivam",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/shivam_kumar_dmPclVA.png",
  },
  {
    user: "Aniket",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aniket_singh_yUCwxqL.png",
  },
  {
    user: "Neenad",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/neenad_sahasrabuddhe_7ixCyoS.png",
  },
  {
    user: "Khushboo.21",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/khushboo_agnihotri_tnZ8u5n.jpeg",
  },
  {
    user: "aliya",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aaliya_ali_ZSRi28h.png",
  },
  {
    user: "Vbhav",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vaibhav_pathak_ALg8niN.png",
  },
  {
    user: "Ayon",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ayon_moitra_EaN2T8C.jpg",
  },
  {
    user: "Roshan",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/roshan_paturkar_HLmKFbh.png",
  },
];

//home screen posts along with comments and everything
export const POSTS = [
  {
    imgUrl: STORIES[0].image,
    user: STORIES[0].user,
    likes: "8,000",
    caption:
      "Stress less and enjoy the best 😍, Whatever is good for your soul, do that. I’m not gonna sugar coat the truth, I’m not Willy Wonka",
    profile_picture: STORIES[0].image,
    comments: [
      {
        user: "khushboo",
        comment: "Wow! This build looks fire.",
      },
      {
        user: "vidit",
        comment: "Once i wake up, i'll finally be ready to code this up.",
      },
    ],
  },
  {
    imgUrl: STORIES[1].image,
    user: STORIES[1].user,
    likes: "7,900",
    caption: "Whatever is good for your soul, do that",
    profile_picture: STORIES[1].image,
    comments: [
      {
        user: "khushboo.21",
        comment: "Wow! This build looks fire.",
      },
      {
        user: "vidit",
        comment: "Once i wake up, i'll finally be ready to code this up.",
      },
    ],
  },
  {
    imgUrl: STORIES[2].image,
    user: STORIES[2].user,
    likes: "7,872",
    caption: "I’m not gonna sugar coat the truth, I’m not Willy Wonka",
    profile_picture: STORIES[2].image,
    comments: [
      {
        user: "khushboo.21",
        comment: "Wow! This build looks fire.",
      },
      {
        user: "vidit",
        comment: "Once i wake up, i'll finally be ready to code this up.",
      },
    ],
  },
  {
    imgUrl: STORIES[3].image,
    user: STORIES[3].user,
    likes: "7,873",
    caption: "Get out there and live a little",
    profile_picture: STORIES[3].image,
    comments: [
      {
        user: "khushboo.21",
        comment: "Wow! This build looks fire.",
      },
      {
        user: "vidit",
        comment: "Once i wake up, i'll finally be ready to code this up.",
      },
    ],
  },
];

//BottomTabIcons

export const BOTTOM_TAB_ICONS = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reel",
    active: "https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Like",
    active: "https://img.icons8.com/ios-filled/144/ffffff/like.png",
    inactive: "https://img.icons8.com/ios/48/ffffff/like.png",
  },
  {
    name: "Profile",
    active:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidhanshu_borade_5hzTEMI.png",
    inactive:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidhanshu_borade_5hzTEMI.png",
  },
];
