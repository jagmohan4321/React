import Card from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
function App() {
  const myObj = {
    id: 803,
    description: "this is the image data ",
    title: "This is the card title",
    completed: false,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
  }


  const twoLevelObj = {
    userId: 2,
    id: 24,
    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false,
    two: {
      userId: 2,
      id: 25,
      title: "voluptas quo tenetur perspiciatis explicabo natus",
      completed: true
    },
  };


  const threeLevelObj = {
    userId: 211876,
    age: 240,
    two: {
      profile: "FSD Trainer",
      three: {
        name: "Jagmohan",
        kaam: "Instructor"
      }
    },
  };


  // console.log(twoLevelObj);


  return (
    <div className="App">
      <Card obj={myObj}></Card>
      <Card1 two={twoLevelObj} />
      <Card2 three={threeLevelObj}/>
    </div>
  );
}

export default App;
