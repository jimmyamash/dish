$.ajax({
    type: "POST",
    url: "https://api.intercom.io/contacts",
    data: {
      api_key: "xxxxxxxx"
    },
    success: function(data) {
      console.log(data);
      //do something when request is successfull
    },
    dataType: "json"
  });

  