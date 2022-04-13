<template>
  <div class="home">
    <SiteBanner />
    <Announcement />
    <EventSection />
    <OnlineGiving />
    <BlogSection />
    <Testimony />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteBanner from '@/components/SiteBanner.vue'
import Announcement from '@/components/Announcement.vue'
import OnlineGiving from '@/components/OnlineGiving.vue'
import EventSection from '@/components/EventSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import Testimony from '@/components/Testimony.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    SiteBanner,
    Announcement,
    OnlineGiving,
    EventSection,
    BlogSection,
    Testimony,
    Footer,
  },


}
</script>


<style lang="scss" scoped>

</style>