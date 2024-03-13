const getTextFile = () => {
  fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("Error", error));
};
getTextFile();
// // Response ==>
// // [{"id":"TboUiIDUO","url":"https://cdn2.thecatapi.com/images/TboUiIDUO.jpg","width":1200,"height":804}]

const getTextFile2 = async () => {
  const response1 = await fetch(
    `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`,
    {
      method: "get",
      headers: {
        "X-RapidAPI-Key": "your-rapid-key",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    }
  );
  const res = await response1.json();
  console.log(res);
};

// getTextFile2();
// // Response ==>
// // {
// //   message: "Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info.";
// // }

const callAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
    method: "get",
  });
  const data = await response.json();
  console.log(data);
};
callAPI();
// // Response ==> {
// //   userId: 1,
// //   id: 2,
// //   title: 'quis ut nam facilis et officia qui',
// //   completed: false
// // }

const callApiBored = async () => {
  const resp = await fetch("https://www.boredapi.com/api/", {
    method: "GET",
  });
  const data2 = await resp.json();
  console.log(data2);
};
callApiBored();

//Response ==>
//{ message: 'Bored API' }

const calllApiRandomUser = async () => {
  const respo = await fetch("https://randomuser.me/api/", {
    method: "Get",
  });
  const data3 = await respo.json();
  console.log(data3);
};
calllApiRandomUser();

const callApiPoke = async () => {
  const respon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "Get",
  });
  const datta = await respon.json();
  console.log(datta);
};
callApiPoke();

const callApiOneCall = async () => {
  const responnse = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}",
    {
      method: "Get",
    }
  );
  const dataa = await responnse.json();
  console.log(dataa);
};
callApiOneCall();
