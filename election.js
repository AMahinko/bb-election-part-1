$(document).ready(

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'get',
    data: {},
    datatype: 'json'
  }).done(function(responseData){
    candidates = responseData['candidates']
    arrayLength = responseData["candidates"].length;
    counter = 0;
    while (counter < arrayLength) {
      current_candidate = candidates[counter];
      $('#tracker').append('<li>' + current_candidate['name'] + '</li>');
      $('#tracker').append('<li>' + current_candidate['votes'] + '</li>');
      $('#tracker').append('--------------------------------------');
      counter++;
    }
  })

);
