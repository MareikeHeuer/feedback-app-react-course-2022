import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [Feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  return (
    // value = state or functions that are used
    <FeedbackContext.Provider value={{ Feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
