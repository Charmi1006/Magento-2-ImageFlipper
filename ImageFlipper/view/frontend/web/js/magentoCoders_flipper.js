define([
    "jquery",
    "jquery-ui-modules/core",
	"jquery-ui-modules/widget"
], function ($,core,ui) {

    $.widget('magentoCoders.magentoCodersFlipper', {
        options: {},

        _create: function (options) {
            this._initialize();
        },
        _initialize: function () {
            var self = this;
            var options=self.options;
            var mainclass=options['mainclass'];
            var imageclass=options['imageclass'];
            var imageflip=options['imageflip'];
            $(document).on({
             mouseenter: function () {
                var base = $(this).find(imageclass).attr('src');
                var flipper = $(this).find("#magentoCoders_fliper_img").text();
                if (flipper !='') {
                    $(this).find("#magentoCoders_fliper_img").text(base);
                    if (imageflip != 0) {
                      if (imageflip == 'X') {
                      if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(-360deg)','transform-	style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                      }
                      if (imageflip == 'Y') {
                      if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(180deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(180deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                      }
                      if (imageflip == '1') {
                      if (imageflip == 1) {
                         $(this).find(imageclass).css({'transform':'rotate(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                       }
                    }
                    $(this).find(imageclass).attr('src', flipper);
                }
    },
    mouseleave: function () {
       var base = $(this).find(imageclass).attr('src');
                var flipper = $(this).find("#magentoCoders_fliper_img").text();
                if (flipper !='') {
                   $(this).find("#magentoCoders_fliper_img").text(base);
                   if (imageflip != 0) {
                        if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(0deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(0deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                    }
                   $(this).find(imageclass).attr('src', flipper);
                }
    },
				  touchstart: function () {
					   var base = $(this).find(imageclass).attr('src');
                var flipper = $(this).find("#magentoCoders_fliper_img").text();
                if (flipper !='') {
                    $(this).find("#magentoCoders_fliper_img").text(base);
                    if (imageflip != 0) {
                      if (imageflip == 'X') {
                      if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(-360deg)','transform-	style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                      }
                      if (imageflip == 'Y') {
                      if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(180deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(180deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                      }
                      if (imageflip == '1') {
                      if (imageflip == 1) {
                         $(this).find(imageclass).css({'transform':'rotate(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(-360deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                       }
                    }
                    $(this).find(imageclass).attr('src', flipper);
                }
				  },
				 touchend: function () {
					 var base = $(this).find(imageclass).attr('src');
                var flipper = $(this).find("#magentoCoders_fliper_img").text();
                if (flipper !='') {
                   $(this).find("#magentoCoders_fliper_img").text(base);
                   if (imageflip != 0) {
                        if (imageflip == 1) {
                        $(this).find(imageclass).css({'transform':'rotate(0deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        } else {
                            $(this).find(imageclass).css({'transform':'rotate'+imageflip+'(0deg)','transform-style':'preserve-3d','transition':'all 0.5s ease-out 0s'});
                        }
                    }
                   $(this).find(imageclass).attr('src', flipper);
                }
				 },
}, mainclass);
        }
    });
    return $.magentoCoders.magentoCodersFlipper;
});
