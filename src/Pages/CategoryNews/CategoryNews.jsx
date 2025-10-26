import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoryNews = () => {
    const {id} = useParams();
    const allData = useLoaderData();
    const [categoriesNews, setCategoriesNews] = useState([])
    // console.log(categoriesNews);

    useEffect(() =>{
        if(id == "0"){
            setCategoriesNews(allData);
            return;
        }
        else if(id == "1"){

            const filteredNews = allData.filter((news) => news.others.is_today_pick == true)
            setCategoriesNews(filteredNews)
        }
        else{
            const filteredNews = allData.filter((item) => item.category_id == parseInt(id));
           setCategoriesNews(filteredNews);
        }
    }, [id, allData])


    // useEffect(() => {
    //     fetch("/categoriesnews.json")
    //       .then(res => res.json())
    //       .then(allData => {
    //         const filteredNews = allData.filter((item) => item.category_id == parseInt(id));
    //         setNews(filteredNews);
    //       });
    //   }, [id]);


    return (
        <div>
            {/* <h2 className='font-bold'>Categories News ID : {id}</h2> */}
            <h2 className='font-bold'>Total  <span className="text-red-600">{categoriesNews?.length}</span> News Found</h2>

           <div className="grid grid-cols-1">
            {
                categoriesNews.map((news) => <NewsCard news={news} id={news.id}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;