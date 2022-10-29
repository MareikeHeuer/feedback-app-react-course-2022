import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // set button disabled default state (yes)
  // enable from 10 characters on in input field
  // if there is message display div with className of message (Yes)

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Your message must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review here"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
