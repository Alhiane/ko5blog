<template>
  <Layout>
    <!-- title -->
    <div class="title">
      <div class="da">
        <div class="thumbnail">
          <g-image :src="$page.post.image"></g-image>
        </div>
        <div class="detaily">
          <h1>{{ $page.post.title }}</h1>
          <p>{{ $page.post.excerpt }}</p>

          <!-- author -->
          <div class="auth">
            <div class="avatar">
              <g-image :src="$page.post.author.image" class="av-img"></g-image>
            </div>
            <div class="linkAndName">
              <!-- name -->
              <g-link :to="$page.post.author.path" class="__link">
                {{ $page.post.author.name }}
              </g-link>
              <!-- links -->
              <span>
                <g-link :to="$page.post.author.facebook" class="__link_soc">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </g-link>

                <g-link :to="$page.post.author.twitter" class="__link_soc">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </g-link>

                <g-link :to="$page.post.author.linkedin" class="__link_soc">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </g-link>

                <g-link :to="$page.post.author.github" class="__link_soc">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </g-link>                               
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <time :datetime="$page.post.datetime">{{ $page.post.humanTime }}</time> -->
    </div>
    <!-- row -->
    <div class="row">
      <!-- article -->
      <article>
        <div class="metacover">
          <!-- cover image -->
          <!-- <div class="thumbnail">
            <g-image :src="$page.post.image"></g-image>
          </div> -->
          <!-- content -->
          <div class="content">
            <!-- tags -->
            <div class="tags">
              <!-- <font-awesome-icon :icon="['fas', 'tags']" /> -->
              <g-link
                v-for="tag in $page.post.tags"
                :key="tag.id"
                :to="tag.path"
                class="tag"
              >
                {{ tag.title }}
              </g-link>
            </div>
            <div class="markdown-body" v-html="$page.post.content" />
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fweb.facebook.com%2FKo5Blog%2F&width=132&layout=button&action=like&size=large&share=true&height=65&appId"
              width="132"
              height="65"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <!-- comment disqus -->
            <vue-disqus
              shortname="alhiane"
              class="comments-disqus"
              :identifier="$page.post.title"
            ></vue-disqus>
          </div>

          <!-- by me a coffe -->
          <byMeCoffe />
        </div>
      </article>
    </div>

    <!-- related posts -->
    <related-posts
      :record="$page.post.category"
      class="relatedPosts"
      :author="$page.post.author"
    />
  </Layout>
</template>

<page-query>
query Post ($id: ID!){
    post(id: $id){  
      title
      image(width:800, height:800)       
      excerpt     
      content         
      path 
      datetime : created(format:"d m YYYY hh:mm:ss zZ")
      humanTime : created(format:"DD MM YYYY")   
      tags {
        id
        title
        path
      }   
      author {
        id
        image(width:70, height:70)
        name
        path
        facebook
        twitter
        linkedin
        github
      }
      category{
        id
        title
        path 
        belongsTo(order:ASC,limit:3,filter: {id:{ne:$id}}){
          edges{
            node {
              ... on Post {
                id
                title
                path  
                image  
                excerpt              
              }
            }
          }
        }
      }
    }
}
</page-query>
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
<script>
import byMeCoffe from "../components/byMeCoffe";
export default {
  components: {
    byMeCoffe,
  },
  mounted() {
    let arr = [];
    let tagss = this.$page.post.tags;
    for (let index = 0; index < tagss.length; index++) {
      arr += "," + tagss[index].title;
    }

    console.log(arr);
    consoe.log(this.$page.post.image)
  },
  metaInfo() {
    return {
      script: [{ src: "https://platform.twitter.com/widgets.js", body: true }],
      title: this.$page.post.title,
      tags: this.$page.post.tags,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt,
        },
        {
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$page.post.path,
        },
        {
          property: "og:description",
          cotent: this.$page.post.excerpt,
        },
        {
          property: "og:image",
          content: this.$page.post.image,
        },
        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:image", content: this.$page.post.image },
        { name: "twitter:description", content: this.$page.post.excerpt },
      ],
      //Some ld+json tags
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.excerpt,
            datePublished: this.$page.post.datetime,
            author: {
              name: this.$page.post.author,
            },
            headline: this.$page.post.title,
            image: this.$page.post.image,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$maxMobille: "(max-width :767px)";
.title {
  color: var(--titles);
  margin-top: 50px;
  // text-align: center;
  // padding: 0px 120px;

  .da {
    display: flex;
    align-items: center;

    background: var(--hd-bg);
    padding: 0 10px;

    @media #{$maxMobille} {
      padding: 10px;
      flex-direction: column-reverse;
    }

    .thumbnail {
      flex: 1;
      overflow: hidden;

      img {
        width: 100%;
      }
    }
    .detaily {
      padding: 0 28px;
      flex: 3;
    }
  }

  .__link {
    padding: 3px 10px;
    border-radius: 5px;
    color: var(--titles);
    background: var(--bg);
    font-size: 12px;
    margin: 10px auto;
    text-decoration: none;
    color: var(--titles);
    margin-left: 7px;
    display: inline-block;

    time {
      margin-right: 3px;
    }
  }
}

.auth {
  display: flex;
  padding: 40px 0;
  .avatar {
    img {
      width: 66%;
      border-radius: 50%;
      padding: 4px;
      border: 2px solid #ff9800;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }
  }

  .linkAndName {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: center;
    color: var(--titles);

    a {
      font-size: 19px;
      color: var(--titles);
      text-decoration: none;
      margin: 0;
      padding: 0;

      &.__link_soc {
        margin-left: 10px;
      }
    }
  }
}

.row {
  margin: 20px auto;
  display: flex;

  @media #{$maxMobille} {
    flex-direction: column;
  }

  article {
    flex: 1;
    // overflow: hidden;

    .thumbnail {
      img {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      }
    }
  }

  aside {
    // flex: 1;
    overflow: hidden;
    padding: 0px 10px;
    @media #{$maxMobille} {
      display: none;
    }

    .heading {
      text-align: right;
      color: #fff;
      margin-top: 0px;

      h3 {
        margin: 0;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        background: #009aea;
        padding: 6px 19px;
        border: 1px solid #009aea;
        border-bottom: none;
        font-weight: 400;
      }
    }

    .follow {
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;

        li {
          flex: 1;
          padding: 16px;
          text-align: center;
          color: #fff;
          font-size: 27px;

          &.facebook {
            background: #3b5998;
          }

          &.twitter {
            background: #00acee;
          }
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }

    .support-us {
      margin-top: 50px;
      .paypal {
        display: flex;

        a {
          flex: 1;
          padding: 16px;
          text-align: center;
          color: #fff;
          font-size: 27px;
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #3b7bbf;
        }
      }
    }
  }
}
.content {
  padding: 0 10px;

  @media #{$maxMobille} {
    padding: 0 0px;
  }
}
.markdown-body {
  margin-top: 50px;
  box-sizing: border-box;
  padding: 25px 15px 45px;
  color: var(--titles);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-right: 0.25em solid #00bcd4;
  }

  img {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  h1,
  h2 {
    padding-bottom: 0.8em;
    border-bottom: 2px dashed #009aea;
    padding-right: 5px;
    margin: 50px auto;
  }
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
.tags {
  // padding: 15px;

  svg {
    color: var(--icon);
    margin-left: 11px;
    border-radius: 50%;
  }
  a {
    text-align: center;
    text-decoration: none;
    padding: 5px 10px;
    background: var(--bd);
    color: var(--titles);
    border-radius: 3px;
    margin-left: 11px;
    font-size: 12px;
    border: 1px dashed;
    display: inline-block;

    &:hover:not(.active) {
      color: #00bcd4;
      // color: var(--titles);
    }
  }
}
.comments-disqus {
  margin: 0 auto;
  background: var(--hd-sec);
  margin-bottom: 50px;
  padding: 50px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  border-top: 1px solid #eee;
}
.relatedPosts {
  margin-bottom: 50px;
}
</style>
