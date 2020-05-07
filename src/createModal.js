MyApp.createModal = function() {
    const body = document.getElementsByTagName('BODY')[0];

    const mainDiv = MyApp.createNode('div');
    mainDiv.classList.add('modal');
    mainDiv.id = 'popup';

    MyApp.append(body, mainDiv)

    const modalContent = MyApp.createNode('div');
    modalContent.classList.add('modal-content');

    MyApp.append(mainDiv, modalContent)

    const h2 = MyApp.createNode('h2');
    h2.classList.add('headline');
    h2.textContent = 'GDPR consent';

    MyApp.append(modalContent, h2)

    const legalText = MyApp.createNode('div');
    legalText.id = 'legal';

    MyApp.append(modalContent, legalText);

    const list = MyApp.createNode('div');
    list.id = 'listOfVendors';

    MyApp.append(modalContent, list);

    const btns = MyApp.createNode('div');
    btns.classList.add('buttons');

    MyApp.append(modalContent, btns);

    const acceptButton = MyApp.createNode('button');
    const rejectButton = MyApp.createNode('button');

    acceptButton.id = 'accept';
    rejectButton.id = 'reject';

    acceptButton.textContent = 'Accept';
    rejectButton.textContent = 'Reject';

    MyApp.append(btns, acceptButton);
    MyApp.append(btns, rejectButton);

    MyApp.getVendors();
}
