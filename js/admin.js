/* CKEditor Custom Config */

(function ($, Drupal) {
	Drupal.behaviors.customCKEditorConfig = {
		attach: function (context, settings) {
			if (typeof CKEDITOR !== "undefined") {
				CKEDITOR.dtd.$removeEmpty.span = 0;
				CKEDITOR.config.fillEmptyBlocks = false;
				CKEDITOR.config.basicEntities = false;
				CKEDITOR.config.removePlugins = 'pastefromword';
				CKEDITOR.config.skin = 'cwd-moono-lisa,/themes/custom/cwd_admin/css/ckeditor/cwd-moono-lisa/'; // allows CSS customization of the editor skin
				CKEDITOR.config.pasteFilter = 'h2 h3 h4 h5 h6 ul ol li tr caption thead tbody b strong i em sup sub; p(intro); table(table,bordered,flat,striped,colored,rainbow,compact,sectioned); th[*]; td[*]; div(*); a[!href]'; // reduces pasted clutter (only retains basic headings, paragraphs, lists, links, tables, and divs)
			}
		}
	}
})(jQuery, Drupal);
