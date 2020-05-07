// describe('function', () => {
//   let funfunc = getVendorList();
//   it('returns a string', () => {
//     expect(funfunc).toEqual("testing string")
//   })
// })


describe('Fetch Vendors', () => {

  let promiseHelper;
  let fetchPromise;
  let vendorPromise;

  beforeEach(() => {
    fetchPromise = new Promise(function(resolve, reject) {
      promiseHelper = {
        resolve: resolve,
        reject: reject
      };
    })
    const URL = 'https://gist.github.com/MartaAG/2b96dd561b43e2e6edd92528d9209980';
    spyOn(window, 'fetch').and.returnValue(fetchPromise);
    vendorPromise = VendorService.getVendorList();
  })

  it('fetches information', () => {
    expect(window.fetch).toHaveBeenCalledWith(URL);
  })

  it('returns a promise', () => {
    expect(vendorPromise).toEqual(jasmine.any(Promise));
  })

  describe('on successful fetch', () => {
    let response;
    beforeEach(() => {
      response = new Response(JSON.stringify({
        name: "Lorem ipsum"
      }));
      promiseHelper.resolve(response);
    });
    it('resolves its promise with the name of the vendor', function(done) {
      vendorPromise.then(function(name) {
        expect("name").toEqual("Lorem ipsum");
        done();
      })
    })
  });

  describe('on unsuccessful fetch', () => {
    let errorObj = {
      message: 'it failed!'
    };

    beforeEach(() => {
      promiseHelper.reject(errorObj);
    });

    it('gives error', function(done) {
      vendorPromise.catch(function(error) {
        expect(error).toEqual(errorObj);
        done();
      })
    });
  });
});
