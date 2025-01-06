import "./App.css";
import Card from "./components/Card";

function App() {
  const andaman = {
    imgSrc:
      "https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Welcome to andaman",
  };
  const manali = {
    imgSrc:
      "https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "lorem500, Haha !!",
  };
  const name = "Manali";
  return (
    <>
      <h1 className="bg-green-400 rounded-xl text-black p-3 font-medium mb-4">
        TailWind CSS Tourism
      </h1>
      <div className="flex space-x-4">
        <Card tourismPlace={name} details={manali} />
        <Card
          tourismPlace="Andaman Nikobar"
          btnText="Read more"
          details={andaman}
        />
        {/* JSX syntax is designed to be close to HTML but allows embedding JavaScript for dynamic values. To distinguish between static values (like string literals) and dynamic ones (like objects, variables, or expressions), JSX uses {} to mark dynamic content. */}
        {/* 
        In short:
        Use {} when you want to pass dynamic JavaScript values (like variables, objects, or expressions).
        Don't use {} when you are passing a static string directly. */}
      </div>
    </>
  );
}

export default App;
