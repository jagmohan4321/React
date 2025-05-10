import UtilCard from "./components/UtilCard";
import MainCard from "./components/MainCard";
function App() {
  const obj = {
    id: 10,
    course: ['B.Tech', 'M.Tech', 'PHD'],
    percentageCriteria: 80,
    studentList: {
      name: 'ABC',
      age: 20,
      year: 2025
    },
    info: "This object store array, object, and normal values ",
    demo: function () {
      console.log("This is function inside obj");
    }
  }


  // aap ko hamesa array me kuch esa milega 
  const obj2 = [
    {
      id: 10,
      course: ['B.Tech', 'M.Tech', 'PHD'],
      percentageCriteria: 80,
      studentList: {
        name: 'ABC',
        age: 20,
        year: 2025,
        subjects: ['Maths', 'Physics', 'Chemistry'],
        grades: {
          maths: 'A',
          physics: 'B+',
          chemistry: 'A-'
        }
      },
      info: "This object stores arrays, objects, and normal values.",
      demo: function () {
        console.log("This is a function inside obj.");
      },
      address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
      },
      isActive: true,
      hobbies: ['Reading', 'Traveling', 'Photography']
    },
    {},
    {},
    10,
    true
  ];

  // esa nhi hota hai 
  // const obj3 = [
  //   id: 10,
  //   course: ['B.Tech', 'M.Tech', 'PHD'],
  //   percentageCriteria: 80,
  //   studentList: {
  //     name: 'ABC',
  //     age: 20,
  //     year: 2025,
  //     subjects: ['Maths', 'Physics', 'Chemistry'],
  //     grades: {
  //       maths: 'A',
  //       physics: 'B+',
  //       chemistry: 'A-'
  //     }
  //   },
  //   info: "This object stores arrays, objects, and normal values.",
  //   demo: function () {
  //     console.log("This is a function inside obj.");
  //   },
  //   address: {
  //     city: 'New York',
  //     state: 'NY',
  //     country: 'USA'
  //   },
  //   isActive: true,
  //   hobbies: ['Reading', 'Traveling', 'Photography']

  // ];

  console.log(obj2?.studentList?.grades?.physics);

  return (
    <div className="App">
      <h1>APp</h1>
      <UtilCard complexCard={obj} />
      <MainCard ob={obj2} />
    </div>
  );
}

export default App;
