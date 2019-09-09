import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt3obeninAHbTFsPZLGrw4c4BwGzUZmgo",
  authDomain: "suggest-bc3de.firebaseapp.com",
  databaseURL: "https://suggest-bc3de.firebaseio.com",
  projectId: "suggest-bc3de",
  storageBucket: "",
  messagingSenderId: "1035735767450",
  appId: "1:1035735767450:web:ad84267ac38c845b920223"
};

class Fire {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async signup(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  logout() {
    return this.auth.signOut();
  }
}

export default new Fire();
