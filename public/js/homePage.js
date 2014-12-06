/**
 * Created by austin on 4/29/14.
 */

var HomePage = function(){};

HomePage.prototype.init = function() {

    this.setSocial();
    this.setFrame();

    var _this = this;
    $(window).resize(function() {
        _this.setFrame();
    });
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $('#professional').position().top/2;

        if(y_scroll_pos > scroll_pos_test) {
            _this.animateSkills();
        }
    });

    this.generic();
};

//TODO move this to a generic 'Page::init' function when we move to multiple pages
HomePage.prototype.generic = function() {

    //set same page anchor clicks for smooth scroll
    $('a[href*=#]').on('click', function(event){
        event.preventDefault();

        var href = $.attr(this, 'href');
        $('html,body').animate(
            {scrollTop:$(this.hash).offset().top}
            , 500
            , function() {
                window.location.hash = href;
            });
    });

    //set show menu
    $('#show_menu').click(function() {

        var pos = $('.menu').position().left
            , width = $('.menu').width()*1.5;

        if(pos > 0)
            $('.menu').css('left','-' + width + 'px');
        else
            $('.menu').css('left','1px');
    });

    //remove loading display
    setTimeout(function(){
        $('#loading-overlay').fadeOut(function(){
            $('#loading-overlay').remove();
        });
    },500);
};

HomePage.prototype.setSocial = function() {

    $('.homepage-social img').each(function(i,e){

        var _this = $(this);

        _this.mouseover(function(){
            var newLeft = _this.position().left - 50;
            _this.css('left',newLeft+'px');
        });

        _this.mouseout(function(){
            var newLeft = _this.position().left + 50;
            _this.css('left',newLeft+'px');
        });
    });
};

HomePage.prototype.setFrame = function() {

    var docHeight = $(window).height();

    //set all sections to default height if needed
    $('.homepage-section').each(function() {

        var secHeight = $(this).height();
        if(secHeight < docHeight)
            $(this).css('height',docHeight+'px');
    });

    //set the initial location card to center of its container
    var locSecHeight = $('#location .row').height()
        , locSecMargin = (docHeight - locSecHeight)/2;

    $('#location .row').css('margin-top',locSecMargin+'px');
};

HomePage.prototype.animateSkills = function() {

    $('.homepage-skill-border-solid').each(function(){

        var classList =$(this).attr('class').split(/\s+/)
            , width = classList[classList.length-1];

        $(this).css('width',width+'%');
    });

    setTimeout(function(){

        $('.homepage-skill-border-dashed').each(function(){

            var classList =$(this).attr('class').split(/\s+/)
                , width = classList[classList.length-1];

            $(this).css('width',width+'%');
        });
    },300);
};

new HomePage().init();
