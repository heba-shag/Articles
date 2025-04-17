import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import './articleStyle.css';
import { getArticles } from "../Components/DatabaseFile";
import { useEffect, useState } from "react";

export default function ArticlePage(){
    let [article,setArticle]=useState([]);
    let {id}=useParams();

    //get the data 
    useEffect(() => {
        const loadedArticles = getArticles();
        setArticle(loadedArticles);
    }, []);
    
    return(
        <div className="articlePage-container flex">
            <Navbar/>

            <div className="article-page flex">
                {article.map((item)=>(
                    item.ID===parseInt(id)&&
                        <>
                            <div className="article flex">
                                <h1>{item.Title}</h1>
                                <p>{item.Article}</p>
                                <h2>{item.AutherName}</h2>
                            </div>
                            <Link className="btn" to={`/update-article/${id}`}>Edit</Link>
                        </>
                    )   
                )}
            </div>
        </div>
    )
}