describe('Modal', function() {
  let Dom;
  beforeEach(() => {
    Dom = new createModal();
  })


  it('should initialize', () => {
    const body = document.getElementsByTagName('BODY')[0];

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('modal');
    mainDiv.id = 'popup';

    body.appendChild(mainDiv);

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

    expect(Dom.init().mainDiv).toEqual(mainDiv);
    expect(Dom.init().modalContent).toEqual(modalContent);
    expect(Dom.init().h2).toEqual(h2);
    expect(Dom.init().legalText).toEqual(legalText);
    expect(Dom.init().list).toEqual(list);
    expect(Dom.init().btns).toEqual(btns);
    expect(Dom.init().acceptButton).toEqual(acceptButton);
    expect(Dom.init().rejectButton).toEqual(rejectButton);
  })

  it("should block scrolling", () => {
    const body = document.createElement('body');
    // body.className = 'noscroll';
    expect(body).toHaveClass('noscroll');
  })



})
