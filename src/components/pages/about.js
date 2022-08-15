import React from 'react';

import profilePicture from "../../../static/assets/images/bio/profile-picture.jpg"

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div 
                className='left-column'
                style={{
                    background: `url(${profilePicture}) no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>
            <div className='right-column'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi quod officia impedit temporibus ratione quidem totam fuga veritatis 
                adipisci libero deserunt aliquid porro accusantium iste vitae 
                dignissimos obcaecati ipsa cupiditate, minima explicabo recusandae
                maiores. Consequuntur excepturi tenetur tempore mollitia maxime
                praesentium quod magnam voluptatibus rem possimus reiciendis voluptas 
                hic minima dolore aspernatur atque, quos distinctio voluptatem et commodi
                harum deleniti rerum quae. Provident quod eos repellendus consequuntur
                ab eius laboriosam enim quo vero inventore odio praesentium dolores possimus 
                numquam quisquam sint, voluptatem non quasi ex impedit? Harum, iste minus 
                dignissimos, omnis sed eveniet cumque, molestias veniam et saepe quae nobis?
            </div>
        </div> 
    )
}