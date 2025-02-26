import "./App.css";
import GradientAvatar from "./components/GradientAvatar";

function App() {
  return (
    <div className="container">
      <GradientAvatar />
      <GradientAvatar
        avatarSize={{ width: 140, height: 140 }}
        borderWidth={5}
        padding={5}
      />
    </div>
  );
}

export default App;
