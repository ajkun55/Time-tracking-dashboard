
const $title =document.getElementsByClassName("data-title");
const $current =document.getElementsByClassName("current-data");

$.getJSON( "./data.json", function() {
    
}).done(function(data){
    
    for (let i = 0; i < 6; i++){
        $($title[i]).text(data[i].title);
        $($current[i]).text(data[i].timeframes.weekly.current);
        $($('.previous-data')[i]).text(data[i].timeframes.weekly.previous);
        $('.time').text('Last Week');
    }

    $("#daily").click(function(){
        for (let i = 0; i < 6; i++){
            $($current[i]).text(data[i].timeframes.daily.current);
            $($('.previous-data')[i]).text(data[i].timeframes.daily.previous)
            $('.time').text('Last Day');
        }
      });

      $("#monthly").click(function(){
        for (let i = 0; i < 6; i++){
            $($current[i]).text(data[i].timeframes.monthly.current);
            $($('.previous-data')[i]).text(data[i].timeframes.monthly.previous)
            $('.time').text('Last Month');
        }
      });

      $("#weekly").click(function(){
        for (let i = 0; i < 6; i++){
            $($current[i]).text(data[i].timeframes.weekly.current);
            $($('.previous-data')[i]).text(data[i].timeframes.weekly.previous)
            $('.time').text('Last Week');
        }
      });
});