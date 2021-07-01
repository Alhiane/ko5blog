<template>
  <div class="layout">
    <span v-if="overlay" class="overlay">
      <img src="../KO5LOGO.png" alt="ko5blog" srcset="" />
    </span>
    <header class="header">
      <div class="container">
        <div class="wrap">
          <strong>
            <g-link class="brand__link" to="/">
              <img src="../KO5LOGO.png" alt="" srcset="" />
            </g-link>
            <!-- <slot name="span" /> -->
          </strong>
          <nav class="nav" id="nav">
            <g-link class="nav__link" to="/" rel="canonical">
              <font-awesome-icon :icon="['fas', 'home']" />
              <span>الرئيسية</span>
            </g-link>
            <!-- <g-link class="nav__link" to="/About">
              <font-awesome-icon :icon="['fas', 'info-circle']" />
              <span>تعرف علينا</span>
            </g-link> -->
            <g-link class="nav__link" to="/blog">
              <font-awesome-icon :icon="['fas', 'circle-notch']" />
              <span>المنشورات</span>
            </g-link>
            <font-awesome-icon
              class="mode nav__link"
              v-if="themelight"
              @click="toggle"
              :icon="['fas', 'moon']"
            />
            <font-awesome-icon
              class="mode nav__link"
              v-if="!themelight"
              @click="toggle"
              :icon="['fas', 'sun']"
            />
          </nav>
          <font-awesome-icon
            :icon="['fas', 'bars']"
            id="mbmn"
            @click="toggleMobieMenu"
          />
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
    <footer>
      <div class="footer">
        <div class="container">
          <div class="wrap">
            <div class="author">
              <h1>
                أفضل طريقة لصقل المعارف هي بمشاركتها , ومدونة كوخ تجسد طريقة
                لمشاركة المعلومة , لإثراء المحتوى العربي ليرتقي لمصاف المحتويات
                الرائدة
              </h1>

              <div class="link">
                <ul>
                  <!-- <li> <a href=""> عن مدونة كوخ </a> </li> -->
                  <li><a href=""> سياسة الخصوصية </a></li>
                  <li>
                    <a href="https://ko5.netlify.app/rss.xml">
                      <font-awesome-icon :icon="['fas', 'rss']" /> خلاصة RSS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="build">
              <ul>
                <li><img src="../favicon.png" alt="gidsome" /></li>
                <li><img src="../netlify.png" alt="netlify" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      themelight: true,
      overlay: true,
    };
  },
  mounted() {
    this.themeLoad();
    this.overlay = false;
  },
  methods: {
    toggle: function() {
      this.themelight = !this.themelight;
      if (this.themelight) {
        localStorage.setItem("mode", "light");
      } else {
        localStorage.setItem("mode", "dark");
      }
      this.themeLoad();
    },
    themeLoad() {
      if (localStorage.getItem("mode") === "light") {
        document.documentElement.style.setProperty("--bg", "#fff");
        document.documentElement.style.setProperty("--bg-sec", "#ddd4");
        document.documentElement.style.setProperty("--hd-bg", "#ffffff");
        document.documentElement.style.setProperty("--icon", "#007bb6");
        document.documentElement.style.setProperty("--titles", "#2c3e50");
        document.documentElement.style.setProperty("--bg-th", "#007bb6");
        document.documentElement.style.setProperty("--bd", "#f3f3f3");
        this.themelight = true;
      } else if (localStorage.getItem("mode") === "dark") {
        document.documentElement.style.setProperty("--bg", "#202020");
        document.documentElement.style.setProperty(
          "--bg-sec",
          "rgba(0,0,0,.2)"
        );
        document.documentElement.style.setProperty("--hd-bg", "var(--bg-sec)");
        document.documentElement.style.setProperty("--icon", "#fdfdfd");
        document.documentElement.style.setProperty("--titles", "#b3b9c5");
        document.documentElement.style.setProperty("--bg-th", "var(--bg-titles)");
        document.documentElement.style.setProperty("--bd", "var(--bg-sec)");
        this.themelight = false;
      } else {
      }
    },
    toggleMobieMenu() {
      document.getElementById("nav").classList.toggle("mobile-menu");
    },
  },
};
</script>
