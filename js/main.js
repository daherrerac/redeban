

$(window).on('load', function() {
    $(".loader").fadeOut(2000);    
    //$('#modalCookies').modal('show');
    $('#modalPuntos').modal('show');
});


$(document).ready(function () {
    $("#contactenos1").on( "click", function() {
        $("#Contact").toggle("slow"); //formulario de contacto
    });    
    $(function() {
        $("#navigation").load("nav.html");
    });
    $(function() {
        $("#footer").load("footer.html");
    });
 
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    
        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);

                if (bodyWidth >= 1600) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 1599) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 992) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });

                $(".leftLst").addClass("over");
                $(".rightLst").removeClass("over");

            });
        }
    


    //this function used to move the items
    if($('.MultiCarousel')[0]){ 
        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLst');
            var rightBtn = ('.rightLst');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);
            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            }
            else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
    
    $('#submit-button').on('submit', function(e){
        $('#modalContacto').modal('show');
        e.preventDefault();
    });
    $('#modalProductos').modal('show');
});




//Test

var meta = document.createElement('meta');
meta.name  ='robots';
meta.setAttribute('content', 'noindex');
document.getElementsByTagName('head')[0].appendChild(meta);



//Produccion

// var meta = document.createElement('meta');
// var meta2 = document.createElement('meta');
// var meta3 = document.createElement('meta');
// var meta4 = document.createElement('meta');
// var link = document.createElement('link');
// var twitter = document.createElement('meta');
// var twitter2 = document.createElement('meta');
// var twitter3 = document.createElement('meta');
// var twitter4 = document.createElement('meta');
// var twitter5 = document.createElement('meta');
// var twitter6 = document.createElement('meta');

// meta.name  ='og:image';
// meta2.name ='og:url';
// meta3.name ='og:type';
// meta4.name ='og:title';
// twitter.name ='twitter:card';
// twitter2.name ='twitter:site';
// twitter3.name ='twitter:title';
// twitter4.name ='twitter:description';
// twitter5.name ='twitter:image';
// twitter6.name ='twitter:url';

// descripcion = document.querySelector('meta[name="description"]').content;

// link.rel   ='canonical';
// url_host   = window.location.origin;
// url_rel    = window.location.href;
// if(url_rel.includes("index.html")){
//     url_rel = window.location.origin;
// }

// meta.setAttribute('content', url_rel+'/img/img-redes.jpg');
// meta2.setAttribute('content', url_rel);
// meta3.setAttribute('content', 'business.business');
// meta4.setAttribute('content', document.title);
// link.setAttribute('href', url_rel);

// twitter.setAttribute('content','Somos facilitadores de medios de pago, desarrollando soluciones innovadoras que revolucionan la forma en la que se realizan los pagos en Colombia.');
// twitter2.setAttribute('content', '@RedebanM');
// twitter3.setAttribute('content', 'Redeban');
// twitter4.setAttribute('content', descripcion);
// twitter5.setAttribute('content',  url_rel+'/img/img-redes.jpg');
// twitter6.setAttribute('content', url_rel);


// document.getElementsByTagName('head')[0].appendChild(meta);
// document.getElementsByTagName('head')[0].appendChild(meta2);
// document.getElementsByTagName('head')[0].appendChild(meta3);
// document.getElementsByTagName('head')[0].appendChild(meta4);
// document.getElementsByTagName('head')[0].appendChild(twitter);
// document.getElementsByTagName('head')[0].appendChild(twitter2);
// document.getElementsByTagName('head')[0].appendChild(twitter3);
// document.getElementsByTagName('head')[0].appendChild(twitter4);
// document.getElementsByTagName('head')[0].appendChild(twitter5);
// document.getElementsByTagName('head')[0].appendChild(twitter6);
// document.getElementsByTagName('head')[0].appendChild(link);
// var meta5 = document.createElement('meta');
// meta5.name  ='robots';
// meta5.setAttribute('content', 'index');
// document.getElementsByTagName('head')[0].appendChild(meta5);
