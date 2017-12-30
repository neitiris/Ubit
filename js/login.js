'use strict'; // use strict - says to javascript to be presice in checks and do not allow small mistakes

var credentials = {
  email: '',
  password: ''
};

$(function() {
  
  $('#email').keyup(function(event) {
    credentials.email = event.target.value; // user@mail.com    
    console.log('email credentials: ', credentials);
  });

  $('#password').keyup(function(event) {
    credentials.password = event.target.value; // 123123
    console.log('password credentials: ', credentials);
  });

  $('#submitBtn').click(function(event) {
    console.log('submitBtn credentials: ', credentials);
    tryLoginToServer(credentials);
  });

function tryLoginToServer(userCredentials) {
    // Request types
    // GET - used for retreiving/getting data from server
    // POST - used for writing/creating data on server with some response
    // PUT - used for updating data on server
    // DELETE - used for removing data on server
    $.ajax({
      type: "POST",
      url: "https://progress-board-server.herokuapp.com/api/v1/signin",
      data: userCredentials,
      success: userAuthorised
    });
  }
           
  function userAuthorised(data) {
    console.log('userAuthorised data: ', data);
  }

});
