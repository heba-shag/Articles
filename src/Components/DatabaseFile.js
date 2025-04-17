if (!localStorage.getItem('articlesData')) {
   const initialData  = [
    { 
        ID:1,
        AutherName: 'Sameer',
        Title: 'HTML',
        Article: 'HTML (HyperText Markup Language) is the backbone of web development, used to structure content on web pages. It defines elements such as headings, paragraphs, links, and multimedia through tags. HTML5, the latest version, introduced semantic elements (<header>, <footer>, <article>), native multimedia support (<video>, <audio>), and improved accessibility. While HTML provides the skeleton of a webpage, it requires CSS for styling and JavaScript for interactivity.',
    },
    {
        ID:2, 
        AutherName: 'Ali',
        Title: 'CSS',
        Article: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML elements, enabling responsive and aesthetically pleasing designs. Modern CSS features include:Flexbox & Grid for advanced layouts Animations & Transitions for dynamic effects Media Queries for responsive design CSS frameworks like Bootstrap and Tailwind streamline development, while preprocessors like SASS enhance maintainability.',
    },
    { 
        ID:3,
        AutherName: 'Ola',
        Title: 'JavaScript',
        Article: 'JavaScript (JS) is a scripting language for dynamic web content. Key features: DOM Manipulation (changing webpage content) Asynchronous Programming (Promises, async/await) Event Handling (clicks, form submissions) Modern JS frameworks (React, Angular, Vue) simplify complex UI development. Node.js extends JS to server-side programming.',
    },
    {
        ID:4,
        AutherName: 'Hla',
        Title: 'C++',
        Article: 'C++ is a high-performance, object-oriented language used in:Game Development (Unreal Engine) System Software (OS kernels, drivers) Embedded Systems It supports manual memory management, templates, and multi-threading, making it powerful but complex.',
    },
    {
        ID:5,
        AutherName: 'Seba',
        Title: 'C#',
        Article: 'C# (C Sharp) is a Microsoft-developed language for:Windows Applications (WPF, UWP) Game Development (Unity) Backend Services (ASP.NET) It features garbage collection, LINQ, and strong integration with the .NET ecosystem.',
    },
    { 
        ID:6,
        AutherName: 'Omar',
        Title: 'Python',
        Article: 'Python is a versatile, high-level language known for: Web Development (Django, Flask) Data Science (Pandas, NumPy) AI/ML (TensorFlow, PyTorch) Its simple syntax and large standard library make it ideal for beginners and experts alike.',
    },
    { 
        ID:7,
        AutherName: 'Rami',
        Title: 'PHP',
        Article: 'PHP is a server-side scripting language for: Dynamic Websites (WordPress, Laravel) E-commerce (Magento) APIs Though declining in popularity, it powers 78% of all websites using server-side code.',
    },
    { 
        ID:8,
        AutherName: 'Aseel',
        Title: 'Java',
        Article: 'Java is a class-based, object-oriented language used in: Enterprise Applications (Spring Boot) Android Development Big Data (Hadoop) Its "Write Once, Run Anywhere" (WORA) principle relies on the JVM for cross-platform compatibility.',
    },
  ];
  localStorage.setItem('articlesData', JSON.stringify(initialData));
}

  export const getArticles = () => {
    return JSON.parse(localStorage.getItem('articlesData')) || [];
  };
  
  export const saveArticles = (articles) => {
    localStorage.setItem('articlesData', JSON.stringify(articles));
  };