
import './App.css';
import Course  from './Course';
import Anguler from './images/angular.jpg';
import Bootsrap5 from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';


function App() {
  return (
    <div className="App">
      {/* <img src={Anguler} alt=''/> */}
      <Course 
      image={Anguler}
      title='JS' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus 
      ipsum, a reiciendis error eaque aliquam. Praesentium, veniam!'/>

      <Course 
         image={Bootsrap5}
      title='Bootstrap 5' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
       a reiciendis error eaque aliquam. Praesentium, veniam!'/>

      <Course 
         image={Ccsharp}
        title='Frontend' 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
        a reiciendis error eaque aliquam. Praesentium, veniam!'/>

      <Course
         image={Kompleweb}
       title='SQL' 
       description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
      a reiciendis error eaque aliquam. Praesentium, veniam!'/>
      
    </div>
  );
}

export default App;
