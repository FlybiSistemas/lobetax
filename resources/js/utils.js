const Utils = {
    ajustarColunas: function(alvo = '') {
        let ths = $(alvo+' .titulos>th');
        let tds = $(alvo+' tbody>tr:first>td');
        
        ths.each(function(index) {
            let tdWidth = $(tds[index]).outerWidth();
            if(tdWidth < 20)
                tdWidth = 20;
            if ($(this).hasClass('ac'))
                tdWidth = 65;
            $(this).css('width', tdWidth);
        });
        $(alvo+' tbody>tr>td').each(function() {
            let tdWidth = $(this).outerWidth();
            if(tdWidth < 20) {
                $(this).css('width', '20px');
            }
        });

        let telaWidth = $(window).width();
        let sidebarWidth = $('.sidebar').width();
        let contentWidth = telaWidth - sidebarWidth;
        $('.container').css('width', contentWidth-20);
        // $(alvo+' tbody').css('display', 'contents');
    },
}

export default Utils;