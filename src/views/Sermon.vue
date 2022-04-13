<template>
  <header class="sermonHero">
      <h2 class="sermonText">Sermon</h2>
  </header>

  <section class="sermonBody">
      <img src="" alt="" class="sermonVideo">
      <div class="sermonTxt">
          <p>
            Lorem ipsum dolor sit amet conect aicing elit. 
            oremque...
          </p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .sermonHero{
        //border: 2px solid red;
        height: 100%;
        background-color: $primaryColor;
        margin-bottom: 30px;

        .sermonText{
            padding: 50px 0px;
            text-align: center;
            color: $defaultWhite;
            font-size: 1.7rem;
            letter-spacing: 0.3ch;
            font-family: $heroText;
        }
    }

    
    .sermonBody{
        margin-top: 30px;
        border-bottom: 2px solid rgba(133, 2, 2, 0.438);
        display: flex;
        justify-content: space-between;
        padding: 5px;


        .sermonVideo{
           // border: 2px solid blue;
            height: 100%;
            width: 50%;
            padding: 10px;
        }

        .sermonTxt{
            //border: 2px solid green;
            padding: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            font-family: $paragraphText;
            width: 290px;
            margin-left: 10px;
            letter-spacing: 0.04ch;
            word-spacing: 2px;
        }
    }
</style>