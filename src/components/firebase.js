import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
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
