import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Fotter from "./components/layouts/Fotter";
import TasksProvider from "./provider/TasksProvider";

function App() {
  return (
    <TasksProvider>
      <div className="bg-blue-background min-h-dvh flex flex-col items-center gap-10 justify-center py-8">
        <Header />
        <Main />
        <Fotter />
      </div>
    </TasksProvider>
  );
}

export default App;
