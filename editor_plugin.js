function emptyp() {
    return "\n<p class='empty-paragraph'>&#xFEFF;&nbsp;<span style='font-size:1px;color:transparent;'>.</span></p>\n";
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
                infourl : 'http://wordpress.org/extend/plugins/empty-paragraph-for-tinymce-editor/',
                version : "0.9.2"
            };
        }
    });

    tinymce.PluginManager.add('emptyp', tinymce.plugins.emptyp);
    
})();
