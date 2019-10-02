// let mix = require('laravel-mix');


// mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// mix.webpackConfig({
//     resolve: {
//         modules: [
//             path.resolve('./resources/assets'),
//             path.resolve('./node_modules')
//         ]
//     }
// });

// mix.less('resources/less/index.less', 'public/css/index.css');
// mix.less('resources/less/home1.less', 'public/css/home1.css');
// mix.less('resources/less/home2.less', 'public/css/home2.css');


// mix.scripts([
//     'node_modules/swiper/dist/js/swiper.min.js'
// ], 'public/js/vendor.js');
// mix.styles([
//     'node_modules/swiper/dist/css/swiper.min.css'
// ], 'public/css/vendor.css');


let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve('./resources/assets'),
            path.resolve('./node_modules')
        ]
    }
});

mix.less('resources/less/index.less', 'public/css/index.css');
mix.less('resources/less/about.less', 'public/css/about.css');
mix.less('resources/less/contact.less', 'public/css/contact.css');
mix.less('resources/less/quote.less', 'public/css/quote.css');
mix.less('resources/less/service.less', 'public/css/service.css');

mix.copy('resources/images', 'public/images');

