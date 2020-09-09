<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" :v-bind="settings">
      <article
        v-for="post in $static.posts.edges"
        :key="post.node.id"        
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
    </VueSlickCarousel>
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
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "slideposts",
  cat: "ali",
  settings: {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 5,
  },
  components: { VueSlickCarousel },
};
</script>
