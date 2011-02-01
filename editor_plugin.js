function emptyp() {
    return "<p>&#xFEFF;&nbsp;</p>";
}

(function() {

    tinymce.create('tinymce.plugins.emptyp', {

        init : function(ed, url){
            ed.addButton('emptyp', {
                title : 'Insert Emptyp',
                onclick : function() {
                    ed.execCommand(
                        'mceInsertContent',
                        false,
                        emptyp()
                        );
                },
                image: url + "/emptyp.png"
            });
        },

        getInfo : function() {
            return {
                longname : 'emptyp',
                author : 'Kevin Brubeck Unhammer',
                authorurl : 'http://unhammer.wordpress.com',
                infourl : '',
                version : "0.9.0"
            };
        }
    });

    tinymce.PluginManager.add('emptyp', tinymce.plugins.emptyp);
    
})();
