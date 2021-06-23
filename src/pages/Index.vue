<template>
  <Layout>    
    <!-- hotest -->
    <hotest class="hotest" />
    <!-- POSTS GRID -->
    <div class="posts" id="posts">
      <div class="heading">
        <h3 class="last">آخر التدوينات</h3>
      </div>

      <div class="wrap">
        <postItem
          v-for="post in $page.posts.edges"
          :key="post.node.id"
          :record="post.node"
          :hotestActive="0"          
        />
      </div>

      <Pager
        class="pager"
        :info="$page.posts.pageInfo"
        linkClass="pager__link"
      />
    </div>
  </Layout>
</template>
<page-query>
query Posts($page:Int){
  posts: allPost(perPage: 9, page: $page,sortBy: "created") @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        image
        id
        path
        excerpt
        hotest
        datetime : created(format:"DD MMM YYYY")

        category {
          id
          title
        }

      }
    }
  }
}
</page-query>
<script>
import postItem from "../components/postItem";
import hotest from "../components/hotest";
import slideposts from "../components/slideposts";

import { Pager } from "gridsome";

// import Flexsearch from "flexsearch";

export default {
  metaInfo: {
    title: "الرئيسية",
  },
  components: {
    postItem,
    Pager,
    hotest,
    slideposts,
  },
};
</script>

<style lang="scss" scoped>
$maxMobille: "(max-width :767px)";

.home-links a {
  margin-right: 1rem;
}

.posts {
  border-radius: 10px;
  padding: 20px 0;
  margin-bottom: 50px;
}

.wrap {
  // flex-wrap: wrap;
  @media #{$maxMobille} {
    flex-direction: column;
  }
}
</style>
