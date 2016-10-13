 var token = '[YOUR_ACCESS_TOKEN]', // get yours here http://instagram.pixelunion.net/
        num_photos = 4; // number of post

    $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
            console.log(data);
            for( x in data.data ){
                $('div#instagram-feed').append('<div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 insta-item"><a href="'+data.data[x].link+'" target="_blank"><img src="'+data.data[x].images.low_resolution.url+'" class="img-responsive"></a></div>');
                // data.data[x]images.low_resolution.url- URL of image 150х150
                // data.data[x].images.thumbnail.url - URL of image 150х150
                // data.data[x].images.standard_resolution.url - URL of image 612х612
                // data.data[x].link - Instagram post URL
            }
        },
        error: function(data){
            console.log(data);
        }
    });
