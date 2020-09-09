<template>
  <Layout>
    <h2>
      جميع منشورات وسم : <span> {{ this.$page.tag.title }} </span>
    </h2>
    <hr class="line-green-right">
    <div class="wrap">
      <postItem
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        :record="post.node"
        :hotestActive="0"
        class="item"
      />
    </div>
    <Pager
      class="pager"
      :info="$page.tag.belongsTo.pageInfo"
      linkClass="pager__link"
    />
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    tag(id: $id) {
      title
      path
      belongsTo(perPage: 5, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Post {
              title
              excerpt
              image(width:800)
              path
              timeToRead
              category {
                id
                title
              }
              author {
                id
                name
                image(width:24, height:24, fit:inside)
                path
              }
            }
          }
        }
      }
    }  
  }
</page-query>


<script>
import postItem from "../components/postItem";
import { Pager } from "gridsome";
export default {
  components: {
    postItem,
    Pager
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: var(--titles);
  margin-top: 50px;

  span {
    color:#00BCD4;
    text-decoration: underline;
  }
}
hr.line-green-right {
  margin-bottom: 25px;
}
.wrap {
  flex-wrap: wrap;

  .item {
    //box-shadow: 9px 8px 16px 0px #2222221c, 4px -11px 16px #2222221a;
    &:hover {
      transform: scale(1.04);
      transition: all 0.2s ease-in;
    }
  }
}
</style>
