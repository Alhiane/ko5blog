<template>
  <div class="bannerAbout">
    <div class="row">
      <div class="avatar-bio">
        <div class="wrap">
          <g-link :to="$static.author.path" class="nav__link ">
            <div class="avatar">
              <div class="img">
                <g-image :src="$static.author.image"></g-image>
              </div>
              <div class="fullname">
                {{ $static.author.name }}
              </div>
              <div class="social-link">
                <div class="icons">
                  <!-- <font-awesome-icon icon="user-secret" /> -->                  

                  <g-link :to="$static.author.twitter" class="__link_soc">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </g-link>

                  <g-link :to="$static.author.linkedin" class="__link_soc">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </g-link>

                  <g-link :to="$static.author.github" class="__link_soc">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </g-link>
                  
                  <g-link :to="www.alhiane.com" class="__link_soc">
                    <font-awesome-icon :icon="['fab', 'wordpress-simple']" />
                  </g-link>
                  
                  <!-- <font-awesome-icon icon="user-secret" /> -->
                </div>
              </div>
            </div>
          </g-link>
          <div class="bio">
            {{ $static.author.bio }}
          </div>
          <div class="linkedin-btn">
            <a
              href="https://www.linkedin.com/in/lahcenalhiane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <font-awesome-icon :icon="['fab', 'linkedin']" /> حسابي على
                لينكدإن
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="newsletter">
        <div class="row">
          <font-awesome-icon :icon="['fab', 'php']" />
          <font-awesome-icon :icon="['fab', 'js']" />
          <font-awesome-icon :icon="['fab', 'sass']" />
          <font-awesome-icon :icon="['fab', 'vuejs']" />
          <font-awesome-icon :icon="['fab', 'wordpress']" />
          <font-awesome-icon :icon="['fab', 'laravel']" />
          <font-awesome-icon :icon="['fab', 'css3']" />
          <font-awesome-icon :icon="['fab', 'html5']" />
          <font-awesome-icon :icon="['fab', 'android']" />
          <font-awesome-icon :icon="['fab', 'node-js']" />
          <font-awesome-icon :icon="['fas', 'database']" />
          <font-awesome-icon :icon="['fab', 'git-alt']" />
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  author(id: "1") {
    name
    bio
    image
    path
  }
}
</static-query>

<script>
export default {
  name: "bannerAbout",
};
</script>
<style lang="scss" scoped>
$maxSmall: "(max-width:991px)";
$twitter: #00aced;
$linkedin: #007bb6;
$fb: #3b5998;
.row {
  padding: 50px 20px;

  div {
    overflow: hidden;

    &.social-link {
      height: max-content;
      background: var(--bg-sec);
      margin-right: 8px;

      .icons {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 38px;
        padding: 8px 0px;
        width: max-content;
        height: 100%;

        svg {
          margin: 0 20px;
          &:hover {
            transform: scale(0.9);
            transition: all 0.2s ease-in-out;
          }
          &:not(:last-of-type) {
            // margin-bottom: 8px;
          }

          &.fa-twitter {
            color: $twitter;
          }
          &.fa-linkedin {
            color: $linkedin;
          }
          &.fa-github {
            color: #495057;
          }
        }
      }
    }
    &.avatar-bio {
      grid-column: 1 / span 7;
      // background: #fdfdfd;
      background: var(--bg-sec);
      @media #{$maxSmall} {
        grid-column: 1 / span 12;
      }

      .wrap {
        flex-direction: column;
        align-items: flex-start;

        .avatar {
          display: flex;
          height: 54px;
          width: max-content;
          align-self: center;
          background: var(--bg);
          box-shadow: 20px 20px 60px var(--bg-sec), -20px -20px 60px var(--bg);
          border-radius: 5px;
          margin: 20px;
          border-left: 1px solid teal;

          .img {
            overflow: hidden;
            width: 70px;
            height: 70px;

            img {
              width: 120%;
              transform: scale(1.5) translateY(8px);
            }
          }

          .fullname {
            align-self: center;
            padding-right: 20px;
            font-size: 18px;
            color: #5a5a5a;
          }
        }

        .bio {
          margin: 10px 20px 20px;
          font-weight: bold;
          color: var(--titles);
          font-size: 16px;
        }
        .linkedin-btn {
          width: 100%;
          background: var(--bg-th);
          text-align: center;
          padding: 16px 0;

          button {
            background: var(--bg);
            border: 0;
            color: #007bb6;
            padding: 8px 41px;
            font-size: 15px;
            cursor: pointer;
            box-shadow: 20px 20px 60px var(--bg-sec), -20px -20px 60px var(--bg);
          }
        }
      }
    }
    &.newsletter {
      grid-column: 8 / span 12;
      @media #{$maxSmall} {
        grid-column: 1 / span 12;
      }
      .row {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 65px);
        padding: 0;
        overflow: hidden;
        height: 100%;

        & > * {
          &:nth-child(even) {
            background: var(--bg-sec); /* fallback for old browsers */
          }
          color: var(--icon);
          padding: 21px 0;
          width: 100%;
          font-size: 24px;
          text-align: center;
          &:hover {
            background: transparent; /* fallback for old browsers */
            transform: scale(1.3);
            transition: all 0.2 cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }

        .hireme {
          // grid-column: 2/4;
          display: flex;
          padding: 0;
        }
      }
    }
  }
}
</style>
