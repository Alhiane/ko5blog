<template>
  <Layout>
    <div class="search-area">
      <div class="input-search">
        <input
          type="text"
          id="myInput"
          @keyup="myFunction"
          placeholder="أكتب هنا ليدأ البحث"
        />
        <font-awesome-icon :icon="['fas', 'search']" />
      </div>
      <div class="result-posts scrollbar" id="style-4">
        <ul id="myUL">
          <li v-for="item in $page.posts.edges" :key="item.node.title">
            <g-link :to="item.node.path">
              <article>
                <div class="img">
                  <g-image :src="item.node.image"></g-image>
                </div>
                <div class="detail">
                  <h4>{{ item.node.title }}</h4>
                  <p class="excerpt">
                    {{ item.node.excerpt }}
                  </p>
                </div>
              </article>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts{
  posts : allPost(sortBy:"created"){
    edges {
      node {
        id
        created
        title
        path
        excerpt                
        image(width:150)     
        category {
          id
          title
          path
        }    
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "المواضيع",
  },
  methods: {
    myFunction: function() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$maxMobille: "(max-width :767px)";
$minSmall: "(min-width:768px)";
.search-area {
  margin: 50px auto;
  .input-search {
    width: 50%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-shadow: 9px 8px 16px 0px #2222221c, 0px 2px 16px #2222221a;
    border-bottom: 2px solid #00bcd4;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    #myInput {
      width: 100%;
      border: 0;
      height: 50px;
      border-radius: 5px;
      background: var(--bg-sec);
      padding-right: 20px;
      font-size: 15px;
      color: var(--titles);
    }
    svg {
      position: absolute;
      left: 21px;
      font-size: 21px;
      top: 50%;
      transform: translate(-50%, -50%);
      color: var(--icon);
    }
  }
  .result-posts {
    width: 50%;
    margin: 20px auto;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 9px 8px 16px 0px #2222221c, 0px 2px 16px #2222221a;
    background: var(--bg-sec);
    padding: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 500px;

    @media #{$maxMobille} {
      min-width: 80%;
    }
    @media #{$minSmall} {
      max-width: 80%;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        text-decoration: none;
        color: var(--titles);

        article {
          display: flex;
          overflow: hidden;
          margin-bottom: 20px;
          transition: all 0.2s ease-in-out;
          padding: 8px 5px;
          border-radius: 5px;
          &:hover {
            background: var(--bg);
            transition: all 0.2s ease-in-out;
          }
          .img {
            img {
              border-radius: 5px;
              height: 100%;
            }
          }

          .detail {
            padding-right: 8px;

            h4 {
              margin: 0;
              font-size: 15px;
              text-decoration: underline;
            }

            p.excerpt {
              margin-bottom: 0;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--bg-sec);
}

#style-4::-webkit-scrollbar {
  width: 10px;
  background-color: var(--bg-sec);
}

#style-4::-moz-scrollbar-thumb {
  background-color: var(--titles);
  // border: 2px solid #555555;
}
#style-4::-moz-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--bg-sec);
}

#style-4::-moz-scrollbar {
  width: 10px;
  background-color: var(--bg-sec);
}

#style-4::-webkit-scrollbar-thumb {
  background-color: var(--titles);
  // border: 2px solid #555555;
}
</style>
