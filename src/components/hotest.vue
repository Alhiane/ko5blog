<template>
  <div class="hotest">
    <div class="heading">
      <h3 class="hot">الأكثر شيوعا</h3>
    </div>

    <div class="items">
      <article
        v-for="post in $static.posts.edges"
        :key="post.node.id"
        v-if="post.node.hotest == 1"
      >
        <div class="thumbnail">
          <g-link :to="post.node.path" class="thumb__link">
            <g-image :src="post.node.image" class="thumb" />
          </g-link>
        </div>
        <div class="detail">
          <span class="badge-fire">
            <font-awesome-icon :icon="['fas', 'fire']" /> شائع
          </span>
          <span class="badge-class">
            <font-awesome-icon :icon="['fas', 'paperclip']" />
            {{ post.node.category.title }}
          </span>
          <h4>
            <g-link :to="post.node.path" class="post__link">
              {{ post.node.title }}
            </g-link>
          </h4>
        </div>
      </article>
    </div>
  </div>
</template>

<static-query>
query{
  posts: allPost(sortBy: "created") {    
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
</static-query>

<script>
export default {
  // props: ["record"],
  name: "hotest",
};
</script>

<style lang="scss" scoped>
$maxMobille: "(max-width :767px)";
.items {
  display: flex;
  flex-wrap: wrap;
  // overflow: hidden;

  @media #{$maxMobille} {
    flex-direction: column;
  }

  article {
    flex: 0 0 45%;
    margin-top: 70px;
    padding: 0 20px;
    display: flex;

    .thumbnail {
      flex: 1;

      width: 100%;

      height: 153px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px dashed #ff9800;

      @media #{$maxMobille} {
        height: 100%;
        border-radius: 0;
        border: none;
      }

      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
      }
    }

    .detail {
      flex: 2;
      padding: 0 20px 0 0px;
    }

    .post__link {
      text-decoration: none;
      color: var(--titles);
    }

    // badge
    .badge-fire {
      // background: #fae791;
      margin: 24px 1px 0;
      display: inline-block;
      width: max-content;
      padding: 2px 10px;
      color: #ff9800;
      border: 1px dashed;
      border-radius: 12px;
      font-size: 13px;
    }

    .badge-class {
      // background: #c6ff84;
      margin: 24px 10px 0 0;
      display: inline-block;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      padding: 2px 10px;
      color: #009688;
      border: 1px dashed;
      border-radius: 12px;
      font-size: 13px;
    }
  }
}
</style>
