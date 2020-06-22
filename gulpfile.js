const { watch, src, dest } = require("gulp");
const _sass = require("gulp-sass");
const _browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");

function sass() {
  src("app/scss/**/*.scss")
    .pipe(_sass())
    .pipe(cleanCSS()) // TODO: do this only on build
    .pipe(dest("app/css"))
    .pipe(_browserSync.stream());
}

function serve() {
  _browserSync.init({
    server: "./app",
  });

  watch("app/scss/*.scss", sass);
  watch(["app/*.html", "app/*.js"]).on("change", _browserSync.reload);
}

function images() {
  src("app/images/**/*.+(png|jpg|gif|svg)")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
        })
      )
    )
    .pipe(dest("dist/images"));
}

function fonts() {
  return src("app/fonts/**/*").pipe(dest("dist/fonts"));
}

function build() {
  src("app/scss/**/*.scss").pipe(_sass()).pipe(cleanCSS()).pipe(dest("dist"));
}

exports.sass = sass;
exports.serve = serve;
exports.images = images;
exports.fonts = fonts;

exports.build = build;
