/****************featured news********************/
$('#myCarousel1').carousel({
    interval: 4000
});

var clickEvent = false;
$('#myCarousel1').on('click', '.nav-pills a', function () {
    clickEvent = true;
    $('.nav-pills li').removeClass('active');
    $(this).parent().addClass('active');
}).on('slid.bs.carousel', function (e) {
    if (!clickEvent) {
        var count = $('.nav-pills').children().length - 1;
        var current = $('.nav-pills li.active');
        current.removeClass('active').next().addClass('active');
        var id = parseInt(current.data('slide-to'));
        if (count == id) {
            $('.nav-pills li').first().addClass('active');
        }
    }
    clickEvent = false;
});
/*********************news slider*******************/
$('#myCarousel').carousel({
    interval: 4000
});
/********************articles*********************/
$('#myCarousel2').carousel({
    interval: 40000
});
/******************survey**********************/
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
$('#displayResult').click(function () {
    $(this).hide()
});
/*********************date and time**********************/


        (function ($) {
            $.clock = { version: "2.0.1", locale: {} }; t = []; $.fn.clock = function (d)
            {
                var c = {
                    it: { weekdays: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"], months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"] },
                    en: { weekdays: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sunday"], months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octoner", "november", "decimber"] }, es: { weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], months: ["Enero", "Febrero", "Marzo", "Abril", "May", "junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] }, de: { weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "könnte", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, fr: { weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], months: ["Janvier", "Février", "Mars", "Avril", "May", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"] }, ar: { weekdays: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] }
                }; return this.each(function () { $.extend(c, $.clock.locale); d = d || {}; d.timestamp = d.timestamp || "z"; y = new Date().getTime(); d.sysdiff = 0; if (d.timestamp != "z") { d.sysdiff = d.timestamp - y } d.langSet = d.langSet || "ar"; d.format = d.format || ((d.langSet != "ar") ? "24" : "12"); d.calendar = d.calendar || "true"; if (!$(this).hasClass("jqclock")) { $(this).addClass("jqclock"); } var e = function (g) { if (g < 10) { g = "0" + g } return g; }, f = function (j, n) { var r = $(j).attr("id"); if (n == "destroy") { clearTimeout(t[r]); } else { m = new Date(new Date().getTime() + n.sysdiff); var p = m.getHours(), l = m.getMinutes(), u = m.getDay(), i = m.getDate(), k = m.getMonth(), q = m.getFullYear(), o = "", z = "", w = n.langSet; if (n.format == "12") { o = "ص "; if (p > 11) { o = "م " } if (p > 12) { p = p - 12 } if (p === 0) { p = 12 } } p = e(p); l = e(l); if (n.calendar != "false") { z = ((w == "en") ? "<span class='clockdate'>" + c[w].weekdays[u] + ", " + c[w].months[k] + " " + i + ", " + q + "</span>" : "<span class='clockdate'>" + c[w].weekdays[u] + ", " + i + " " + c[w].months[k] + " " + q + "</span>"); } $(j).html(z + "<span class='clocktime'>" + p + ":" + l + ":" + o + "</span>"); t[r] = setTimeout(function () { f($(j), n) }, 1000); } }; f($(this), d); });
            }; return this;
        })(jQuery);

/* Now apply on document ready to jsbin page */
$(document).ready(function(){

    $.clock.locale = { "ar": { "weekdays": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], "months": ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] } };

    $("#clock1").clock();

    customtimestamp = new Date().getTime() + 1123200000+10800000+14000;

    $("#destroyclock1").click(function(){ $("#clock1").clock("destroy");});
});
/*******************tooltip*********************/
$(function () {
    $('.social-network a').tooltip();
});
/***************Android stock browser****************/
$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
})