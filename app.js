  var config = {
    apiKey: "AIzaSyCjakwu2GekBJq-CIuNwSvsRuWdsis6ocg",
    authDomain: "duckfathers-quacks.firebaseapp.com",
    databaseURL: "https://duckfathers-quacks.firebaseio.com",
    projectId: "duckfathers-quacks",
    storageBucket: "duckfathers-quacks.appspot.com",
    messagingSenderId: "640595631598",
    appId: "1:640595631598:web:626c5e98ee2ea5210542ff",
    measurementId: "G-9518WDLB9K"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

const docRef = firestore.doc("samples/duckQuackData";)
// idk if that semicolon is right, directly above. try putting it after the parentheses.
const outputHeader = document.querySelector("#duckQuackOutput");
const inputTestfield = document.querySelector("#latestDuckQuack");
const saveButton = document.QuerySelector("#saveButton");

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("I am going to save " + textToSave + " to Firestore);
  docRef.set({
    duckQuackStatus: textToSave
              }).then(function() {
    console.log("St
})
