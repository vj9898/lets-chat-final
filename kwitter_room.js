const firebaseConfig = {
      apiKey: "AIzaSyCOnGap2mZOchhfkrzS2b8pGoyv1vfB38k",
      authDomain: "lets-chat-9bc60.firebaseapp.com",
      databaseURL: "https://lets-chat-9bc60-default-rtdb.firebaseio.com",
      projectId: "lets-chat-9bc60",
      storageBucket: "lets-chat-9bc60.appspot.com",
      messagingSenderId: "328360644985",
      appId: "1:328360644985:web:d71557e96d1d1ab4665fa8"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

     function addroom()
     {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

localStorage.setItem("room_name",room_name);
window.location = ("kwitter_page.html");

     } 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
 console.log("room name -" + Room_names);
 row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });
});
}


getData();

function redirectToRoomName(name)
{

console.log(name)

localStorage.setItem("room name", name);
window.location = "kwitter_page.html";
}
function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html" ;

}