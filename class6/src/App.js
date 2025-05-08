import Card from "./components/Card";
import ArrayCard from "./components/ArrayCard";
function App() {
  const nestedObject = {
    user: {
      id: 101,
      name: "Alice",
      contact: {
        email: "alice@example.com",
        phone: "123-456-7890",
        address: {
          street: "123 Main St",
          city: "Metropolis",
          country: {
            name: "Wonderland",
            code: "WL",
            timezone: "UTC+3"
          }
        }
      }
    }
  };

  let array = [12, "ramesh", true, 'S', 8.9];
  console.log(array);
  console.log(array[0]);
  console.log(JSON.stringify(nestedObject, null, 2));

  const twoLevelArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const threeLevelArray = [
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ]
  ];


  return (
    <div className="App">
      <Card obj={nestedObject} />
      <ArrayCard arr={array} />
    </div>
  );
}

export default App;
