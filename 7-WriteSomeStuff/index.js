async function submit() {
    let input = document.getElementById("myinput").value;
    let url;
    if(input === ""){
        url = "https://cat-fact.herokuapp.com/facts/random";
    }else{
        url = "https://cat-fact.herokuapp.com/facts/" + input;
    }
    console.log(url);
    await fetch(url, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("cat-fact").innerHTML = data["text"];
    });
}