<template>
  <article>
    <g-link :to="record.path" class="thumb__link">
      <g-image :src="record.image" class="thumb" />
    </g-link>
    <div class="detail">
      <g-link :to="record.path" class="post__link">
        <h3>{{ record.title }}</h3>
      </g-link>
      <div class="excerpt">{{ record.excerpt }}</div>
      <span v-if="hotestActive == 0 && diff() > -3">
        <span class="new">
          جديد !!
        </span>
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: ["record", "hotestActive"],
  methods: {
    diff: function() {
      let date = new Date();
      let cdate = date.getTime();
      let ppdate = new Date(this.record.datetime);

      return parseInt((ppdate - cdate) / (24 * 3600 * 1000));
    },
  },
};
</script>

<style lang="scss" scoped>
$maxMobille: "(max-width :767px)";
article {
  margin-bottom: 100px;
  flex: 0 0 48%;
  justify-content: center;
  margin: 1%;
  display: flex;
  // flex-direction: column;
  align-items: center;
  margin-top: 70px;

  border-radius: 5px;

  .thumb__link {
    text-align: center;
    flex: 1;
    height: 141px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px dashed #00bcd4;

    @media #{$maxMobille} {
      height: 100%;
      border-radius: 0;
      border: none;
    }
  }

  .thumb {
    // width: 89%;
    border-radius: 8px;
    // transform: translateY(-40px);
    // box-shadow: 0 2px 5px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.05);
    // border: 3px dashed #caff8c;
    // border-radius: 8px;

    width: 100%;
    min-height: 100%;
  }
  .detail {
    padding: 0 20px;
    flex: 2;

    .post__link {
      text-decoration: none;
      color: var(--titles);
    }

    .category {
      color: #009aea;
      text-decoration: none;
    }
    .excerpt {
      font-size: 14px;
      color: var(--titles);
    }
  }
  span.new {
    color: #ff9800;
    padding: 12px;
    display: block;
    font-weight: bold;
  }
}
</style>
