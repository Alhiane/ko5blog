// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//layouts
import DefaultLayout from "~/layouts/Default.vue";
// components
import BannerAbout from "~/components/bannerAbout";
import postsGrid from "~/components/postsGrid";
import relatedPosts from "~/components/relatedPosts";
// font awsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faAmazon,
  faGithub,
  faLinkedin,
  faPhp,
  faJs,
  faSass,
  faVuejs,
  faWordpress,
  faLaravel,
  faCss3,
  faHtml5,
  faAndroid,
  faNodeJs,
  faGitAlt,
  faFacebook,
  faCcPaypal,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faMoon,
  faEnvelope,
  faHome,
  faInfoCircle,
  faSun,
  faCircleNotch,
  faUserCircle,
  faClock,
  faBookReader,
  faTags,
  faSearch,
  faBars,
  faFlag,
  faFire,
  faPaperclip,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faTwitter,
  faAmazon,
  faGithub,
  faGitAlt,
  faLinkedin,
  faPhp,
  faJs,
  faSass,
  faVuejs,
  faWordpress,
  faLaravel,
  faCss3,
  faHtml5,
  faAndroid,
  faNodeJs,
  faDatabase,
  faMoon,
  faEnvelope,
  faHome,
  faInfoCircle,
  faSun,
  faCircleNotch,
  faUserCircle,
  faClock,
  faBookReader,
  faTags,
  faSearch,
  faBars,
  faUserCircle,
  faFacebook,
  faFlag,
  faFire,
  faPaperclip,
  faPaypal,
  faRss
);

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./asset/main.scss";
import "prismjs/themes/prism.css";

// markdown
// import "github-markdown-css";
import "./asset/github-markdown.css";
// for disqus
import VueDisqus from "vue-disqus";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  //layouts
  Vue.component("Layout", DefaultLayout);
  // disqus Pluging
  Vue.use(VueDisqus);
  // components
  Vue.component("bannerAbout", BannerAbout);
  Vue.component("postsGrid", postsGrid);
  Vue.component("related-posts", relatedPosts);
  // icons
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  // for progress
  NProgress.configure({ showSpinner: false });

  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    NProgress.done();
  });

  head.meta.push({
    name: "google-site-verification",
    content: "KBfz5jUQa2gBjuNpvVDz58-e-705Uo67ilSrwvX_QSc",
  });

  head.meta.push({
    name: "title",
    content: "كوخ",
  });

  head.meta.push({
    name: "description",
    content : "مدونة كوخ نافذتك التقنية نحو عالم البرمجة , شرح وتعلم",
  });

  head.meta.push({
    name: "keywords",
    content: "ko5Blog,مدونة كوخ,تقنية,تطوير الويب,البرمجة",
  });

  head.meta.push({
    name: "robots",
    content: "index,follow",
  });

head.meta.push({
    name: "HandheldFriendly",
    content: "True",
  });


head.meta.push({
    name: "MobileOptimized",
    content: "width",
  });
  
  head.meta.push({
    name: "clckd",
    content: "e255774363b4b0ebd98f5b25e887eacf",
  });  

head.link.push({
    rel: 'canonical',
    href: 'https://ko5.netlify.app/'
  })
  


}
