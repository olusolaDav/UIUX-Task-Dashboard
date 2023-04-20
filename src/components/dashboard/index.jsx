import Header from "./header/Header";
import NavBar from "./navBar/NavBar";
import Task from "./task/TaskComponent";
function Dashboard() {
  return (
    <main className="md:flex-2 w-full  space-y-2 overflow-y-scroll ">
      <div className="w-full bg-white">
        <Header />
      </div>
      <NavBar />
      <Task />
    </main>
  );
}

export default Dashboard;
