jQuery(document).ready(function() {
    // Instantiate Create
    jQuery('body').midgardCreate({
        url: function() {
            if (this.id) {
                if (this.id.charAt(0) == "<") {
                    return cmfCreatePutDocument + this.id.substring(1, this.id.length - 1);
                }
                return cmfCreatePutDocument + "/" + this.id;
            }
            return cmfCreatePutDocument;
        },
        stanbolUrl: cmfCreateStanbolUrl,
        tags: true,
        // Use Aloha for all text editing
        editorWidgets: {
            'default': 'aloha'
        },
        editorOptions: {
            aloha: {
                widget: 'alohaWidget'
            }
        },
        collectionWidgets: {
            'default': null,
            'feature': 'midgardCollectionAdd'
        }
    });
});
