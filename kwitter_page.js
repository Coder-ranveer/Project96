//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDGugHQn6NA548v4nbynZ3iomK_Gs-fzC4",
      authDomain: "kwitter-76b83.firebaseapp.com",
      databaseURL: "https://kwitter-76b83-default-rtdb.firebaseio.com",
      projectId: "kwitter-76b83",
      storageBucket: "kwitter-76b83.appspot.com",
      messagingSenderId: "437176650649",
      appId: "1:437176650649:web:39ce3d9b1c82aa5eee2108"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("input1"); console.log(username);
 roomname = localStorage.getItem("roomname"); console.log(roomname);
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

 

function send()
{
   msg = document.getElementById("inputsend").value;
   console.log(msg)
   firebase.database().ref(roomname).push(
         {
               name:username,
               message:msg,
               like:0
         }
   );
   document.getElementById("inputsend").value ="";
}

function logout()
{
  window.location="index.html"
  localStorage.removeItem("username")
  localStorage.removeItem("roomname")
}