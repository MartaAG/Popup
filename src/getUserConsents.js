MyApp.getUserConsents = function() {
  //get names of the company and then save it to the cookie
    let companiesId = [];
    let vendors = document.querySelectorAll(".vendorList");

    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].querySelector('.switch-input').checked) {
        companiesId.push(parseInt((vendors[i].id), 10))
      }
    }

    MyApp.setCookieExpirationDate('VendorList', JSON.stringify(companiesId), 1)

    MyApp.closeModal();
}
