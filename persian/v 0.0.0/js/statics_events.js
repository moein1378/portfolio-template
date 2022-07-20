$(document).ready(function() {
    //====== this function convert numbers to persian ======//
    function ConvertNumberToPersion() {
        persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };

        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
        traverse(document.body);
    }
    ConvertNumberToPersion();
    //====== this function convert numbers to persian end ======//

    //nav bar section
    function navbarItem_hover(child_number) {
        $(".navbar_grid:nth-child(" + child_number + ") .navbar_link").mouseenter(function() {
            $(".navbar_grid:nth-child(" + child_number + ") .underline").removeClass("animate__zoomOut").addClass("animate__zoomIn").css('opacity', '1');
        });

        $(".navbar_grid:nth-child(" + child_number + ")").mouseleave(function() {
            $(".navbar_grid:nth-child(" + child_number + ") .underline").removeClass("animate__zoomIn").addClass("animate__zoomOut").css('opacity', '0');
        });
    }

    for (let index = 1; index <= 7; index++) {
        navbarItem_hover(index);
    }
    //nav bar section end

    //rsp nav bar section
    $("#rsp_menu_box").click(function() {
        $("#rsp_menu_box .first_line").animate({
            width: '44px',
        }, 200);
        $("#rsp_menu_box .second_line").animate({
            width: '26px',
        }, 200);
        $("#navbar").fadeIn("slow");
        $("body").css({
            'z-index': '-1',
            'position': 'absolute',
        });
    });
    $(".resp_closeIcon i").click(function() {
        $("body").css({
            'z-index': '0',
            'position': 'static',
        });
        $("#navbar").fadeOut("slow");
        $("#rsp_menu_box .first_line").animate({
            width: '24px',
        }, 200);
        $("#rsp_menu_box .second_line").animate({
            width: '16px',
        }, 200);
    });
    //rsp nav bar section end

});