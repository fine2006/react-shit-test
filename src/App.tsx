import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          You Clicked the Button!{" "}
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>
    </div>
  );
}

export default App;
