module.exports = function(grunt) {


/* Configuring Grunt task options
   ========================================================================== */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     // -- Styling Tasks ----------------------------------------------------

    less: {
      development: {
        options: {
          paths: ["app/assets/theme/styles"],
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "app/assets/theme/styles/application.css": "app/assets/theme/styles/application.less",
        }
      }
    },


    hologram: {
       generate: {
           options: {
               config: 'hologram_config.yml'
           }
       }
   },
        

  });


/* Loading in Grunt tasks
   ========================================================================== */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-hologram');

 
/* Registered Grunt tasks
   ========================================================================== */
  grunt.registerTask('default', ['less']);
  grunt.registerTask('docs', ['hologram']);
};