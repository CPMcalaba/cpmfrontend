module.exports = {
    css: {
        loaderOptions: {
            sass:{
                prependData: `@import "@/assets/scss/rootstyle.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/CPM-frontend/'
    : '/'
}