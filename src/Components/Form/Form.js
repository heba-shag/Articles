import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './formStyle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticles, saveArticles } from '../DatabaseFile';

export default function Form(props){
    let [author,setAuthor]=useState('');
    let [article,setArticle]=useState('');
    let [title,setTitle]=useState('');
    let [accept,setAccept]=useState(false);
    let navigate=useNavigate();
    let {id}=useParams();

   //load the data in case the update
   useEffect(() => {
        if (id) {
            const savedArticles = getArticles();
            const articleToEdit = savedArticles.find(article => article.ID === parseInt(id));
            if (articleToEdit) {
                setTitle(articleToEdit.Title);
                setAuthor(articleToEdit.AutherName);
                setArticle(articleToEdit.Article);
            }
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAccept(true);

        // check the required feilds
        if (!title || !author || !article) {
            return;
        }

        const savedArticles = getArticles();
        
        if (id) {
            // update
            const updatedArticles = savedArticles.map(item => {
                if (item.ID === parseInt(id)) {
                    return { 
                        ...item, 
                        Title: title,
                        AutherName: author,
                        Article: article 
                    };
                }
                return item;
            });
            saveArticles(updatedArticles);
        } else {
            // add 
            const newId = savedArticles.length + 1;
            const newArticle = {
                ID: newId,
                Title: title,
                AutherName: author,
                Article: article
            };
            saveArticles([...savedArticles, newArticle]);
        }

        navigate('/');
    };

    return(
        <div className="form-container flex">
            <Navbar/>
            <div className='form flex'>
                <h1 className='flex'>{props.FormTitle}</h1>
                <form onSubmit={handleSubmit}>
                    <div className='boxes-container flex'>
                        <div className="box flex">
                            <label>Article Title:</label>
                            <input type="text" value={title} placeholder="Enter Article Title.." onChange={(e)=>setTitle(e.target.value)}/>
                            {title==='' && accept &&(<p className='error'>empty field!</p>)}
                        </div>

                        <div className="box flex">
                            <label>Article:</label>
                            <input className='article' value={article} type="text" placeholder="Enter Your Article.." onChange={(e)=>setArticle(e.target.value)}/>
                            {article==='' && accept &&(<p className='error'>empty field!</p>)}

                        </div>

                        <div className="box flex">
                            <label>Auther:</label>
                            <input type="text" value={author} placeholder="Enter Article Title.." onChange={(e)=>setAuthor(e.target.value)}/>
                            {author==='' && accept &&(<p className='error'>empty field!</p>)}

                        </div>
                    </div>

                    <button className="btn" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}