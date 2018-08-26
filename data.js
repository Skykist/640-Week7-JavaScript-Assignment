$(document).ready(function(){
    var template = $("#itemList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        item: [
            {
                name: "Bananas",
                img: "https://africa-me.com/wp-content/uploads/2015/12/somalia-banana-643x371.jpg"
            },
            {
                name: "Bell Peppers",
                img: "http://www.pictorem.com/collection/900_2384656HighRes.jpg"
            },
            {
                name: "Onions",
                img: "https://cdn1.medicalnewstoday.com/content/images/articles/276/276714/red-and-white-onions.jpg"
            },
            {
                name: "Lettuce",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMryvUqv7W0GlhLdb2_NIXkXopTrGQ1SRVVM_4PoS0P8uw8bNw6Q"
            },
            {
                name: "Spinach",
                img: "https://www.bbcgoodfood.com/sites/default/files/spinach.jpg"
            },
            {
                name: "Nectarines",
                img: "http://wallpapers4screen.com/Uploads/26-5-2016/31073/thumb2-fruit-apricots-nectarines-peaches-fruit-plate.jpg"
            },
            {
                name: "Apples",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWfZ1MCw3e8KkJfRDEdKbEz6UNb9I5KrvnezCg9gU09i8xrdKFA"
            },
            {
                name: "Grapes",
                img: "http://prasadimpex.com/wp-content/uploads/2018/02/Black-Grapes-2.jpg"
            },
            {
                name: "Pears",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61w64eKsWPHfBGjU92OIVRn-79wltLv7EswpOJ_gJQqv5_saj"
            },
            {
                name: "Celery",
                img: "http://yesofcorsa.com/wp-content/uploads/2018/04/Celery-Wallpaper-Full-HD-1024x680.jpg"
            },
            {
                name: "Potatoes",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg"
            },
            {
                name: "Kale",
                img: "https://www.yesmagazine.org/issues/how-to-eat-like-our-lives-depend-on-it/one-diet-to-rule-them-all/shutterstock_135308252.jpg/image"
            }
        ],

        show: false
    })
    $("#target").html(rendered);
});