
import './App.css';
import 'bulma/css/bulma.css';
import Course  from './Course';
import Anguler from './images/angular.jpg';
import Bootsrap5 from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';


function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Skill</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
            <div className='column'>
              <Course 
              image={Anguler}
              title='JS' 
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus 
              ipsum, a reiciendis error eaque aliquam. Praesentium, veniam!'/>
            </div>
            <div className='column'>
                <Course 
                image={Bootsrap5}
                title='Bootstrap 5' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
                a reiciendis error eaque aliquam. Praesentium, veniam!'/>
            </div>
            <div className='column'>
                <Course 
                 image={Ccsharp}
                  title='Frontend' 
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
                  a reiciendis error eaque aliquam. Praesentium, veniam!'/>

            </div>
            <div className='column'>
                <Course
                image={Kompleweb}
                title='SQL' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Harum autem consequatur ipsa maiores cumque ab libero expedita dignissimos culpa cum accusamus ipsum, 
                a reiciendis error eaque aliquam. Praesentium, veniam!'/>
            </div>
        </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;
