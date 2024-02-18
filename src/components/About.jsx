import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
         text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 
                    border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni deserunt sapiente nemo qui repellat! Tempore eius
                    officia reiciendis quaerat similique optio quidem nobis
                    vel animi hic nisi necessitatibus, quo ducimus quibusdam
                    doloribus. Voluptas molestias, labore a vitae et cumque
                    iste, hic iure aspernatur suscipit voluptate id
                    reiciendis, error exercitationem Lorem ipsum, 
                    <br /> 
                    <br />
                    dolor sit amet consectetur adipisicing elit. Nihil eius ea 
                    corporis recusandae cumque perspiciatis, velit 
                    reprehenderit ratione facilis ipsum. Aliquam saepe 
                    blanditiis maxime illo minima pariatur adipisci quam 
                    amet facilis perspiciatis soluta, ipsa iusto ex dolor 
                    officiis eveniet, placeat laborum consequuntur quasi 
                    libero optio. Facilis, reiciendis ea. Nostrum, ducimus.</p>
            </div>

        </div>
    )
}

export default About