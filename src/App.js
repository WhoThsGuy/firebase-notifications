import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import Button from "./Button";

import "./app.css";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const messaging = getMessaging(firebase);

    onMessage(messaging, (payload) => {
      const { notification } = payload;
      const { title, body } = notification;
      const options = {
        body,
      };
      alert(`Message received.: ${JSON.stringify(payload)}`);
      alert(
        `window.Notification: ${typeof window.Notification !== "undefined"}`
      );
      alert(
        `Notification.permission === 'granted': ${
          Notification.permission === "granted"
        }`
      );

      return new Notification(title, options);
    });

    getToken(messaging, {
      vapidKey:
        "BK3ajb82EOS0lhHQwJc5R8OWNbPJ1B8lPZ1zqAqKS9r96Dit8F4AbZL5a2z8mScVffjh9JRPOBruA4zqxUs-H1U",
    })
      .then((currentToken) => {
        if (!currentToken) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              console.log("granted");
            } else {
              console.log("Unable to get permissions to notify");
            }
          });

          return console.log(
            "No registration token available. Request permission to generate one."
          );
        }

        setToken(currentToken);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="App">
      <p>{token}</p>
      <Button token={token} />
    </div>
  );
}

export default App;
