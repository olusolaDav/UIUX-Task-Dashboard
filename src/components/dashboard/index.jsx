import Header from "./header/Header";
import NavBar from "./navBar/NavBar";
import Task from "./task/Task";
function Dashboard() {
  return (
      <main className="md:flex-2 w-full lg:space-y-0 space-y-6 overflow-y-scroll ">
        <Header />
        <NavBar />
        <Task />
      </main>
  );
}

export default Dashboard;
