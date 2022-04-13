<template>
  <footer class="container-fluid footer mt-auto">
      <div class="row">
          <div class="col-sm">
              <h2 class="footer-brand">CPM Calabar</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, sed?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio debitis dolores neque saepe hic?
              </p>
          </div>
          <div class="col-sm">
              <h3>Resources</h3>
              <ul>
                  <router-link to=""><li>Sermon</li></router-link>
                  <router-link to=""><li>Videos</li></router-link>
                  <router-link to=""><li>Study Bible</li></router-link>
                  <router-link to=""><li>Sunday School</li></router-link>
              </ul>
          </div>
          <div class="col-sm">
              <h3>Services</h3>
                <ul>
                  <router-link to=""><li>Blog</li></router-link>
                  <router-link to=""><li>Prayer</li></router-link>
                  <router-link to=""><li>Counselling</li></router-link>
              </ul>
          </div>
          <div class="col-sm">
              <h3>About</h3>
                <ul>
                  <router-link to=""><li>About Us</li></router-link>
                  <router-link to=""><li>Contact</li></router-link>
              </ul>
          </div>
      </div>

      <hr class="hr">

      <div class="footer-two">
          <p>Copyright reserved 2021</p>
          <p>Idimita Layout behind Crutech Staff Quarters</p>

      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer{
        background: lighten($defaultBlack, 25%);
        margin-top: 70px !important;
        padding: 20px;

        .col-sm{
            margin-top: 20px;
            h2,h3{
                color: $defaultWhite;
                font-weight: 500;
                font-family: $heroText;
                letter-spacing: .07ch;
                opacity: .7;
            }

            p,a{
                color: lighten($defaultWhite, 7%);
                font-family: $buttonCta;
                font-size: 1rem;
                letter-spacing: .07ch;
                line-height: 1.5rem;
            }

            p{
                line-height: 2rem;
            }

            ul{
                text-decoration: none;
                border: 2x solid red !important;
            }

            li{
                padding: 7px;
            }
        }

        .hr{
            color: lighten($defaultWhite, 7%);
            height: 3px;
        }

        .footer-two{
            display: flex;
            justify-content: space-between;
            color: $defaultWhite;
            font-family: $paragraphText;
            font-size: 3ch;
        }
    }
</style>