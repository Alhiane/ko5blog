<template>
  <div class="posts">
    <div class="heading">
      <h3>آخر التدوينات</h3>
      <hr class="line-orange-center" />
    </div>
    <div class="wrap">
      <postItem
        v-for="post in $static.posts.edges"
        :key="post.node.id"
        :record="post.node"
      />
    </div>    
  </div>
</template>

<static-query>
query Posts{
  posts: allPost(perPage: 3, page: 1) @paginate{
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
      }
    }
  }
}
</static-query>

<script>
import postItem from "../components/postItem";
import { Pager } from "gridsome";
export default {
  name: "postsGrid",
  components: {
    postItem,
    Pager
  }
};
</script>

<style lang="scss">
$maxMobille: "(max-width :767px)";
.posts {  
  border-radius: 10px;
  padding: 20px 0;

  .heading {
    text-align: center;

  }

  .wrap {
    flex-wrap: wrap;
    @media #{$maxMobille} {
      flex-direction: column;
    }
  }
}
</style>
