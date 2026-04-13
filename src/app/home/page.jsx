import Friends from '@/components/homepage/Friends';
import React from 'react';

const HomePage = async() => {

    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    console.log(data);
    
    return (
        <>
            


            <div className='w-9/12 mx-auto'>
                <h1 className='text-2xl font-bold'>Your Friends</h1>

                <div className='grid grid-cols-4 gap-5'>
                    {
                        data.map(item => <Friends key={item.id} item={item}></Friends>)
                    }
                </div>
            </div>


        </>

    );
};

export default HomePage;