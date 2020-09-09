<template>
  <Layout>
      <bannerAbout />
  </Layout>
</template>

<page-query>
query Author ($id: ID!){
    author:author(id: $id){        
        name
    }

}
</page-query>

<script>
export default {
metaInfo(){
    return {
        title: this.$page.author.name
    }
}
}
</script>

<style>

</style>