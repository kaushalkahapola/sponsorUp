import React, { useEffect, useState } from "react";
import Message from "../components/Message";
import { Button, ButtonsGroup } from "../components/Buttons";

function Test() {
  const [selectedButtons, setSelectedButtons] = React.useState([]);
  const btns = ["Music", "Auto", "Meka"];

  return (
    <div className="h-screen font-poppins font-bold flex flex-col items-center justify-center text-3xl">
      <Message
        text={
          selectedButtons.length > 0
            ? `Selected: ${
                selectedButtons.map((i) => btns[i]).join(", ") || "None"
              }`
            : "No buttons selected"
        }
      />
      <br />
      <Button
        text="Click Me!"
        id="btn2"
        onClick={() => {
          console.log("clicked1");
        }}
        //variant="gray"
      />
      <br />
      <ButtonsGroup
        texts={btns}
        selectable_number={2}
        selected={selectedButtons}
        setSelected={setSelectedButtons}
      />
    </div>
  );
}

export default Test;
