MyApp.getVendors = async function() {
  const URL = 'https://gist.githubusercontent.com/MartaAG/7b7573c8e0fc063180d2d7451b4353fa/raw/21bc65a5892ab4762aa1faa7bd15d7e94f52a07b/vendors.json';

  let fetchLink = await fetch(URL);
  let data = await fetchLink.json();

  console.log(data);
  MyApp.displayVendor(data)
}
