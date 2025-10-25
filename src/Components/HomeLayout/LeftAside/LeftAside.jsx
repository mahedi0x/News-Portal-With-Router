import React, { Suspense } from 'react';
import Loading from '../../utils/loading';
import Categories from '../../Categories/Categories';


const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
            <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;