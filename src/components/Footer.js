import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {

  // Get the history object
  const history = useHistory();

  const goBack = () => {
    // imperatively redirect back

  }

  const goForward = () => {
    // imperatively redirect forward
    
  }

  return (
    <footer>
      <button onClick={() => history.goBack()}>Back</button>
      <button onClick={() => history.goForward()}>Forward</button>
    </footer>
  );
}
