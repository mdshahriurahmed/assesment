import React from 'react';
import s1 from '../../Assets/s1.webp';
import s2 from '../../Assets/s2.webp';
import s3 from '../../Assets/s3.webp';

const Banner = () => {
    return (
        <div >
            <div class="carousel w-full ">
                <div id="item1" class="carousel-item w-full">
                    <img src={s2} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={s1} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={s3} class="w-full" />
                </div>

            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs btn-primary">1</a>
                <a href="#item2" class="btn btn-xs btn-primary">2</a>
                <a href="#item3" class="btn btn-xs btn-primary">3</a>

            </div>
        </div>
    );
};

export default Banner;