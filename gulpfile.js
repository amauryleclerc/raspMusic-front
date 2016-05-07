var gulp = require('gulp');
var server = require('gulp-server-livereload');
// Création d'une task.
// Paramètre : - nom de la task (ici webserver)
//             - fonction correspondant à la task   
         
gulp.task('serve',function() {
    // src définit une source et pipe les actions à définir sur cette source.
    // public : dossier vu par l'exterieur équivalent au www.
    gulp.src('public').pipe(server({
        livereload : true,
        open : true,
        port : 3000
    }));
});