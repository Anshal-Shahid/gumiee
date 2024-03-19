const input = document.querySelector("input")
const btn=document.querySelector("#search")
const answer=document.querySelector("#result")

btn.addEventListener(  "click",async ()=>{
    let result=await fetch('/walletchecker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ walletaddress: input.value }) 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

      
      let data = await result.json();

      if(data.response){
        console.log("good");
        answer.innerHTML="You are on the wallet list"
     }
      else{
        console.log("bad");
        answer.innerHTML="You are not on the wallet list"

      }


})




