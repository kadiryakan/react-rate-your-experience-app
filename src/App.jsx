import Rating from "./components/Rating.jsx"

const App = () => {
  return (
    <>
      <Rating heading="How do you feel about React?" feedbackMessages={[
        "Hate it",
        "Dislike",
        "Meh",
        "Like it",
        "Love it"
        ]}/>
    </>
  );
};

export default App;