MyApp.setCookieExpirationDate = function(name, value, days) {
  //takes cookie of accepted vendors and set expiration days
  let expires = '';

  if(days) {
    let date = new Date();
    data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + "=" + value + expires + '; path=/';
}
