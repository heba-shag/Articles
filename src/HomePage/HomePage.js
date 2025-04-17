import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { getArticles, saveArticles } from "../Components/DatabaseFile";
import './homeStyle.css';
import { useEffect, useState } from "react";

export default function HomePage(){
    const [articles, setArticles] = useState([]);
    let [run,setRun]=useState(0);//to refresh the page after delete
    
    //get the data 
    useEffect(() => {
        const loadedArticles = getArticles();
        setArticles(loadedArticles);
      }, [run]);
    
    
    const deleteFunction = async(id)=> {
        console.log(id);

        //save all articles except the deleted one
        const updatedArticles = articles.filter(article => article.ID !== id);

        //refresh the Ids
        const reindexedArticles = updatedArticles.map((article, index) => ({
            ...article,
            ID: index + 1
        }));
        
        saveArticles(reindexedArticles);
        setRun(prev => prev + 1); // refresh the page
        alert('deleted');
    }

    return(
        <div className="home-container flex">
            <Navbar/>
            <div className="main-section flex">
                <h1>Our Articles</h1>

                <div className="articles-container flex">
                {articles.map((item,)=>(

                    <div  className="article-card grid">
                            <div className="article-box grid">
                                <h2>{item.Title}</h2>
                                <p>{item.Article.substring(0, 100)}...</p>
                                <h3>{item.AutherName}</h3>
                            </div>


                        <div className="buttons flex">
                            <button className="btn" onClick={()=>deleteFunction(item.ID)}>Delete</button>
                            <Link to={`/read-article/${item.ID}`} className="btn">Read</Link>
                        </div>
                    </div>
                )) }
                </div>
            </div>
        </div>
    )
}