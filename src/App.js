import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AddForm from './Forms/AddForm';
import ArticlePage from './ArticlePage/ArticlePage';
import UpdateForm from './Forms/UpdateForm';

export default function App() {
  return (
    <div className="container">
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-article" element={<AddForm/>}/>
        <Route path="/update-article/:id" element={<UpdateForm/>}/>
        <Route path="/read-article/:id" element={<ArticlePage/>}/>

      </Routes>
    </div>
  );
}

