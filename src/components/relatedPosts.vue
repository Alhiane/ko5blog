<template>
  <div class="rows">
    <relatedPostItem
      v-for="rec in record.belongsTo.edges"
      :key="rec.node.id"
      :data="rec"
      :catname="record.title"
      :author="author"
    />
  </div>
</template>

<script>
import relatedPostItem from "./relatedPostItem";
export default {
  props: ["record", "author"],
  name: "relatedPosts",
  components: {
    relatedPostItem,
  },
};
</script>

<style lang="scss" scoped>
.rows {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  $maxMobille: "(max-width :767px)";
  @media #{$maxMobille} {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
