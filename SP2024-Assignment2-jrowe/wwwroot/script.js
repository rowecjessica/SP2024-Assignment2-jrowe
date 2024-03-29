var len;
var results = '';
var curBackground = 1;

function apiSearch() {

  var results = '';
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };


  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "9b36fa6526ff420f97526ddac2ac1199");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
       
        $('#searchResults').html(results);
        $('#searchResults').removeClass('hidden');
        $('#searchResults').dialog();
        $('#query').val('');
    })
    .fail(function () {
      alert("error");
    });
}

function changeBackground() {
    if (curBackground === 1) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D')"
        curBackground = 2;
    } else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1707136507220-6e8e19fe0ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D')";
        curBackground = 1;
    }
}

function getCurTime() {
    $('time').html('');
    $('#time').removeClass('hidden');

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var finalTime = hour + ":" + (minute < 10 ? "0" : "") + minute

    $('#time').show();
    $('#timeHeader').text('The current time is ' + finalTime);
    $('#time').dialog();
}