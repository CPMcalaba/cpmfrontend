<template>
    <header class="header-text">
        <h1>Bible Study Manual</h1>
    </header>

    <!--h2 class="">Year: <time datetime="2021">2021</time></!--h2-->

    <section class="sunday__school container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <div class="sunday__school--content">
                    <router-link to="/"> 
                        <header class="sunday__school--lesson">
                            <h2>Topic</h2>
                            <h3>Hardwork</h3>
                        </header>  
                            <div class="date" ><time datetime="2021-12-01">2021/12/01</time></div>     
                    </router-link>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="sunday__school--content">
                    <router-link to="/"> 
                        <header class="sunday__school--lesson">
                            <h2>Topic</h2>
                            <h3>Techniques Of Passing</h3>
                        </header>
                        <div class="date" ><time datetime="2021-12-01">2021/12/01</time></div>        
                    </router-link>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>


</style>