async function fetchAndSetUser(){
  const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
  const json = await response.json();
  dispatch(updateUser(json));
}