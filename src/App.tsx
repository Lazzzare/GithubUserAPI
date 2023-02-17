import Header from "./components/Header";
import Input from "./components/Input";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="w-full max-w-[573px] m-auto min-h-screen flex flex-col px-6">
      <Header />
      <Input />
      <UserInfo />
    </div>
  );
}

export default App;
