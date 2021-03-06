MyApp.createModal = function() {
    const body = document.getElementsByTagName('BODY')[0];

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('modal');
    mainDiv.id = 'popup';

    body.appendChild(mainDiv)

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    mainDiv.appendChild(modalContent);

    const h2 = document.createElement('h2');
    h2.classList.add('headline');
    h2.textContent = 'GDPR consent';

    modalContent.appendChild(h2);

    const legalText = document.createElement('div');
    legalText.id = 'legal';

    modalContent.appendChild(legalText);

    const list = document.createElement('div');
    list.id = 'listOfVendors';

    modalContent.appendChild(list);

    const btns = document.createElement('div');
    btns.classList.add('buttons');

    modalContent.appendChild(btns);

    const acceptButton = document.createElement('button');
    const rejectButton = document.createElement('button');

    acceptButton.id = 'accept';
    rejectButton.id = 'reject';

    acceptButton.textContent = 'Accept';
    rejectButton.textContent = 'Reject';

    btns.appendChild(acceptButton);
    btns.appendChild(rejectButton);

    MyApp.getVendors();

    //closing the modal does not save vendors:
    document.getElementById('reject').onclick = function() {
      MyApp.setCookieExpirationDate('VendorList', '', 1);
      MyApp.closeModal();
    }
    //clicking accept saves vendors
    document.getElementById('accept').addEventListener('click', MyApp.getUserConsents)
}
