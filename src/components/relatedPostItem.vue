<template>
  <article>
    <div class="thumb">
      <g-image :src="data.node.image" :alt="data.node.title"></g-image>
      <span class="overlay">
        <font-awesome-icon :icon="['fas', 'book-reader']" />
      </span>
      <span class="cat"> {{ catname }} </span>
    </div>
    <div class="detail">
      <div class="title">
        <g-link :to="data.node.path">
          <h2>{{ data.node.title }}</h2>
        </g-link>
      </div>
      <!-- title -->
      <div class="author">
        <div class="av">
          <g-image :src="author.image"></g-image>
        </div>
        <!-- author avatar -->
        <div class="name">
          <span> {{ author.name }} </span>
        </div>
        <!-- author name -->
      </div>
      <!-- /.author-->
      <div class="excerpt">
        <p>{{ data.node.excerpt }}</p>
      </div>
      <!-- excerpt -->
    </div>
    <div class="read-more">
      <g-link :to="data.node.path">
        <button>قراءة المزيد</button>
      </g-link>
    </div>
    <!-- readmore -->
  </article>
</template>

<script>
export default {
  props: ["data", "catname", "author"],
  name: "relatedPostItem",
};
</script>

<style lang="scss" scoped>
$bg: var(--titles);
article {
  overflow: hidden;
  border-radius: 6px;
  background: var(--bg-sec);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #009aea;

  &:hover {
    .read-more button {
      background: #009aea;
      color: #fff;
    }
    .thumb .overlay {
      opacity: 0.5;
    }
  }

  .thumb {
    height: 200px;
    overflow: hidden;
    position: relative;

    img {
      max-width: 100%;
      min-width: 100%;
      min-height: 100%;
    }

    .overlay {
      height: 100%;
      width: 100%;
      background: #009aea;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      svg {
        font-size: 64px;
      }
    }
  }
  .detail {
    padding: 8px 15px;

    .title {
      a {
        color: #009aea;
        text-decoration: none;
      }
    }

    .author {
      display: flex;
      .av {
        width: 25px;
        height: 25px;
        overflow: hidden;
        border-radius: 50%;
        margin-left: 5px;

        img {
          width: 100%;
        }
      }
      .name {
        color: var(--titles);
      }
    }

    .excerpt {
      color: var(--titles);
      font-size: 14px;
    }
  }
  .read-more {
    padding: 8px 15px;
    font-size: 16px;
    margin-bottom: 12px;
    button {
      cursor: pointer;
      width: 100%;
      background: var(--bg);
      border-radius: 5px;
      padding: 12px 0;
      color: var(--titles);
      border: 1px solid var(--bd);
    }
  }
}
</style>
