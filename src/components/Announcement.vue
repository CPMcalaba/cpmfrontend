<template>
  <div class="announcement container-fluid">
      <div class="announcement__wrap">
          <h5>Child dedication next Sunday</h5>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/rootstyle.scss";

    .announcement{
        max-height: 50vh !important;
        background-color: lighten($secondaryColor, 47%);
    }

    .announcement__wrap{
        height: 100%;
        display: flex;
        justify-content: center;

        h5{
            letter-spacing: .07ch;
            word-spacing: .3ch;
            font-weight: bold;
            font-family: $heroText;
            margin-top: 8px;
        }
    }

</style>