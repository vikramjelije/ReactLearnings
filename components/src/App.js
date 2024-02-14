import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use a React on a Project?",
      content:"You can use React on any project that you want."
    },
    {
      id: 2,
      label: "Can I use a Tailwind css on a Project?",
      content:"You can use Tailwind css  on any project that you want."
    },
    {
      id: 3,
      label: "Can I use a Next js on a Project?",
      content:"You can use Next js on any project that you want."
    }
  ]
  return (
    <Accordion items={items}/>
  );
}

export default App;
