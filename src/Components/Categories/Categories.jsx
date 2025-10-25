import React, { use } from 'react';
import { NavLink } from 'react-router';
import "./Categories.css"

const categoryPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    // console.log(categories)

    return (
        <div>
            <h2 className='font-bold'>AllCategory {categories.length}</h2>

           <div className="grid grid-cols-1 gap-2 my-5">
           {
                categories.map(category => <NavLink to={`/category/${category.id}`} className="btn bg-white text-accent hover:bg-base-300">{category.name}</NavLink>)
            }
           </div>


        </div>
    );
};

export default Categories;