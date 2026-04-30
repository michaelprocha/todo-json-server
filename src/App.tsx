import Header from "./components/layouts/Header";
import Fotter from "./components/layouts/Fotter";
import Tasks from "./components/layouts/Tasks";

function App() {
  return (
    <div className="bg-blue-background min-h-dvh flex flex-col items-center gap-10 justify-center py-8">
      <Header />
      <main className="w-md">
        <Tasks />
      </main>
      <Fotter />
    </div>
  );
}

export default App;
