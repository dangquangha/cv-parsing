const mix = require("laravel-mix");
const path = require('path');

let directory_bundle = path.normalize("public/");
mix.setPublicPath(directory_bundle);

let build_scss = [
    {
        from: '/resources/sass/pages/home.scss',
        to: 'css/home.css'
    }
];

let build_js = [
    {
        from: '/resources/js/pages/home.js',
        to: 'js/home.js'
    }
];

build_scss.map((index) => {
    let from = __dirname + index.from;
    let to = index.to;
    mix.sass(from, to);
});

build_js.map((index) => {
    let from = __dirname + index.from;
    let to = index.to;
    if (Array.isArray(index.from)) {
        from = [];
        index.from.forEach(file => {
            from.push(__dirname + file);
        });
    }
    mix.js(from, to)
});

mix.options({
    processCssUrls: false,
}).autoload({
    jquery: ["$", "window.jQuery", "jQuery"],
});

if (mix.inProduction()) {
    mix.version();
}

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: path.join(__dirname, "node_modules/jquery/src/jquery"),
        },
    },
});
