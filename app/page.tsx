import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar/page';
export default function Home() {
  return (
    <main className="container">
      <div className="row"> 
        <div className="col-md-4"> 
     <Navbar/>
        </div>
        
      </div>
   </main>
  );
}
