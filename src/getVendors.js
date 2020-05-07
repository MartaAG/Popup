MyApp.getVendors = async function() {
  const URL = 'https://gist.github.com/MartaAG/2b96dd561b43e2e6edd92528d9209980';

  let fetchLink = await fetch(URL);
  let data = await fetchLink.json();

  console.log(data);
  MyApp.displayVendor(data)
}
