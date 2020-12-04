$("#get-quote").click(function(){

    var $quotes = $('#quotes-container');
$.ajax({
    type:'GET',
    url: 'https://los-simpsons-quotes.herokuapp.com/v1/quotes',
    success: function(quotes){
        $.each(quotes, function(i, quote){
            $quotes.append('<div class="alert alert-primary alert-dismissible fade show" role="alert">'+
            quote.quote+"<br/>~"+quote.author+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
        });
    }
});
});