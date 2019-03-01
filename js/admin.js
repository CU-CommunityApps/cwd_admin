/* CKEditor Custom Config */

(function ($, Drupal) {
  Drupal.behaviors.customCKEditorConfig = {
    attach: function (context, settings) {
      if (typeof CKEDITOR !== "undefined") {
        CKEDITOR.dtd.$removeEmpty.span = 0;
        //CKEDITOR.config.height = 500;
        //CKEDITOR.config.indentClasses = ['indent1', 'indent2', 'indent3', 'indent4'];
        //CKEDITOR.config.justifyClasses = [ 'text-left', 'text-center', 'text-right', 'text-justify' ];
        //CKEDITOR.config.image2_alignClasses = [ 'align-left', 'align-center', 'align-right' ];
        //CKEDITOR.config.image2_disableResizer = true;
        //CKEDITOR.config.image2_prefillDimensions = false;
        //CKEDITOR.config.templates_files = ['/sites/all/themes/cornell_itc/style/ckeditor/ckeditor.templates.js'];
        //CKEDITOR.config.templates_replaceContent = false;
        CKEDITOR.config.skin = 'cwd-moono-lisa,/themes/custom/cwd_admin/css/ckeditor/cwd-moono-lisa/'; // allows CSS customization of the editor skin
        CKEDITOR.config.pasteFilter = 'semantic-content'; // reduces pasted clutter (excessive spans, non-breaking spaces, etc...)
        //CKEDITOR.config.fillEmptyBlocks = false;
        //CKEDITOR.config.filebrowserImageBrowseUrl = true;
      }
    }
  }
})(jQuery, Drupal);
