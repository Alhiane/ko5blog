<template>
  <Layout>
    <h2>
      جميع منشورات وسم : <span> {{ this.$page.category.title }} </span>
    </h2>
    <hr class="line-green-right">
    <div class="wrap">
      <postItem
        v-for="post in $page.category.belongsTo.edges"
        :key="post.node.id"
        :record="post.node"
        class="item"
      />
    </div>
    <Pager
      class="pager"
      :info="$page.category.belongsTo.pageInfo"
      linkClass="pager__link"
    />
  </Layout>
</template>

<page-query>
query($id:ID!,$page:Int) {
    category(id:$id){
        title
        path
        belongsTo(order:ASC,perPage:2,page:$page) @paginate {
          totalCount
          pageInfo{
            totalPages
            currentPage
            isFirst
            isLast
          }
          edges {
            node{
             ... on Post {
                title
                image
                id
                path
                excerpt    
                category {
                  path
                  title
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
      title: this.$page.category.title
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
    box-shadow: 9px 8px 16px 0px #2222221c, 4px -11px 16px #2222221a;
    &:hover {
      transform: scale(1.04);
      transition: all 0.2s ease-in;
    }
  }
}
</style>
