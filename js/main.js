  
        var API_KEY = 'YOUR_API_KEY';
        
        $(document).ready(function() {
            var dataObj = {
                api_key : API_KEY,
                method : 'flickr.photos.search',
                tags: 'shiba inu',  //what do you want to search for?
                sort: 'relevance',
                media: 'photos',
                format: 'json',
                content_type: 1,
                nojsoncallback: 1
            };
        
            $.ajax({
                url: 'http://api.flickr.com/services/rest/',
                data: dataObj,
                dataType: 'json',
                success: function(data) {
                    var photos = data.photos.photo;
                    for (var i = 0; i < 15; i++) {
                        var photo = photos[i];
                        var link = buildLink(photo.farm, photo.server, photo.id, photo.secret);
                        var div = buildDiv(link, photo.title, photo.id);
                        $('#gallery').append(div);                                    
                    }
                    
                }, 
                error: function(xhr, e) {
                    console.log(e);
                }
            });
          
        });
        
            
 
        
        function buildLink(farm, server, id, secret) {
          return 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'    
        }
        
        function buildDiv(linkToPhoto, photoTitle, photoId) {
           var div = $('<div class="image-wrapper"></div>')
                        .append('<img src="' + linkToPhoto + '" alt="gallery image" id="' + photoId + '">')
                        .append('<p class="caption">' + photoTitle + '</p>');
           return div;
        }