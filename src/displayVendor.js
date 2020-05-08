MyApp.displayVendor = function(data) {

    let outputText = '';
    //get text
    data.purposes.map(function(purpose) {
      outputText += `<h3>${purpose.name}</h3>
            <p class="legal-text">
            ${purpose.description} <br> <br>
            </p>`;
    })
    document.getElementById('legal').innerHTML = outputText;

    //get vendors
    let vendorList = '<ul id="parent-list">';
    data.vendors.map(function(vendor) {
      vendorList += `
      <li class='vendorList'>
      ${vendor.name}
      <a href='${vendor.policyUrl}'
      class='companyLink'
      target="_blank"
      >${vendor.policyUrl}</a>
          <label class='switch'>
            <input
            type='checkbox'
            class='switch-input'>
            <span class='switch-handle'></span>
          </label>
      </li>
    `;
    })
    vendorList += '</ul>';
    document.getElementById('listOfVendors').innerHTML = vendorList

}
