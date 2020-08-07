/* Custom expandable paragraphs */
(function($, Drupal) {
  "use strict"
  var debug = false;
  var accordion = {
    count: 0,
    last:0,
  };
  var para = {
    count: 0,
    last:0,
  };
  var tab = {
    count: 0,
    last:0,
  };
  function doExpand(parent, rowTarget, buttonTarget, settings ){
    var firstRows = $(parent).find(rowTarget);
    if (settings.count===0){
      settings.count = firstRows.length;
    }
    var buttons = $(firstRows).get(settings.last);
    var tarBtn = $(buttons).find(buttonTarget).get(0);
    settings.last = settings.last+1;
    if (tarBtn && 'id' in tarBtn && tarBtn.id.includes('links-edit-button')){
      $(tarBtn).mousedown();
    }
  }

  Drupal.behaviors.customaccordionExpand = {
    attach: function(context, settings) {
      const rowTarget = 'tbody > tr > td > div:nth-child(1):contains("Accordion Section")';
      const buttonTarget = 'ul > li.edit.dropbutton-action input[id^=edit-field-paragraphs]';

      $('table[id^=bp-accordion-section-values]').once('customaccordionExpand').each(function(){
        var that = this;
        const expandButton = $('<button class="btn cd-expand-all" type="button">Expand All</button>');
        expandButton.on('click', function(e){
          accordion.last = 0;
          accordion.count = 0;
          doExpand(that, rowTarget, buttonTarget, accordion);
        });

        $(this).find('thead > tr > th.field-label').first().append(expandButton);
        setTimeout(function(){
          if(accordion.last > 0 && accordion.count > accordion.last) {
            log("accordion expand "+ accordion.last + ' ' + accordion.count);
            doExpand(that, rowTarget, buttonTarget, accordion);
          } else if (accordion.count > 0)  {
            log('setting interval');
            var interval_counter = 0;
            var interval_id = setInterval(() => {
              var region_edit_buttons = $(that).find('table ul > li.edit.dropbutton-action input[id^=edit-field-paragraphs]');
              if (region_edit_buttons.length > 0 && interval_counter < 100){
                log('expanding ' + region_edit_buttons.length + ' accordion section bodies '+interval_counter );
                interval_counter += 1;
                $(region_edit_buttons[0]).mousedown();
              } else{
                clearInterval(interval_id);
              }
            }, 1000);
          }
        }, 100);
      })

    }
  }

  Drupal.behaviors.customParagraphExpand = {
    attach: function(context, settings) {
      const rowTarget = 'tbody:first > tr > td:nth-child(2) > div > div > div.paragraph-type-top.js-form-wrapper.form-wrapper';
      const buttonTarget = 'ul > li.edit.dropbutton-action input[id^=edit-field-paragraphs]';
      const parentTarget = 'table[id^=field-paragraphs-values]';

      $(parentTarget).once('customParagraphExpand').each(function(){
        var that = this;
        const expandButton = $('<button class="btn cd-expand-all" type="button">Expand All</button>');
        expandButton.on('click', function(e){
          para.count = 0;
          para.last = 0;
          doExpand(that, rowTarget, buttonTarget, para);
        });

        $(this).find('thead > tr > th.field-label > h4').first().append(expandButton);
        setTimeout(function(){
          if(para.last>0 && para.count>para.last) {
            log('paragraph expand '+ para.last + ' ' + para.count);
            doExpand(that, rowTarget, buttonTarget, para);
          }
        }, 100);
      })
    }
  }

  Drupal.behaviors.customTabExpand = {
    attach: function(context, settings) {
      const rowTarget = 'tbody:first > tr > td:nth-child(2) > div > div > div.paragraph-type-top.js-form-wrapper.form-wrapper';
      const buttonTarget = 'ul > li.edit.dropbutton-action input[id^=edit-field-paragraphs]';
      const parentTarget = 'table[id^=bp-tab-section-values]';

      $(parentTarget).once('customTabExpand').each(function(){
        var that = this;
        const expandButton = $('<button class="btn cd-expand-all" type="button">Expand All</button>');
        expandButton.on('click', function(e){
          tab.count = 0;
          tab.last = 0;
          doExpand(that, rowTarget, buttonTarget, tab);
        });

        $(this).find('thead > tr > th.field-label > h4').first().append(expandButton);
        setTimeout(function(){
          if(tab.last>0 && tab.count>tab.last) {
            log('tab expand '+ tab.last + ' ' + tab.count);
            doExpand(that, rowTarget, buttonTarget, tab);
          }
        }, 100);
      })
    }
  }

  function log(msg){
    if (debug){
      console.log(msg);
    }
  }

})(jQuery, Drupal);
