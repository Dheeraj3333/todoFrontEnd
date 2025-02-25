import TrackHolder from "./components/TrackHolder";
import TaskHolder from "./components/TaskHolder";

const App = () => {
  return (
    <main className="max-w-[800px] min-w-[300px] max-md:m-2 m-auto">
      <TrackHolder />
      <TaskHolder />
    </main>
  );
};

export default App;
