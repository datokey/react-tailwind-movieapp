const Detail = () => {
    return (
        <div>
            <div className=" flex items-center justify-center lg:p-44 md:p-32 p-3" >
                <div className=" bg-gray-200 items-end relative rounded-2xl shadow-2xl">
                    <div className="rounded-xl bg-yellow-800 text-left text-xs md:text-xs py-3 p-3 md:pl-36 md:pt-3 lg:pl-80 lg:text-base ">
                        {/* small to medium screen gambar */}
                       <div>
                            <div className="flex md:hidden 
                         p-2 bg-gray-900
                         -top-10
                         rounded-xl shadow-lg hover:shadow-2xl 
                         transition duration-500
                         w-32 justify-center
                         ">
                            <img src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" alt=""
                                className="
                                max-w-screen-sm w-32 h-32 object-cover" />
                                
                        </div>
                       </div>

                        {/* end gambar */}
                        <div className="top-2 right-3 
                         left-14 flex lg:hidden
                         justify-end 
                         "> 
                         <div className="w-1/2">
                         <h1 className="text-right items-end
                         font-bold text-lg mb-35 ">Nama Animenya diatas muncul adwdaw a awdaa awaawa a </h1>

                         </div>
                        
                         </div>
                         
                       <p className="pt-7">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                       .</p>
                       <p className="pt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                       
                       </p>
                   </div>

                    {/* gambar */}
                  <div className="grid grid-4">
                        <div className="col-span-2 hidden md:flex lg:-top-32 lg:left-12 md:-top-11 md:-left-7 -top-7 -left-5 p-2 bg-gray-200 absolute rounded-xl shadow-lg hover:shadow-2xl 
                    transition duration-500">
                            <img src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" alt=""
                                className="lg:w-full lg:h-72 md:w-36 md:h-44 sm:w-20 sm:h-32  w-20 h-32 " />


                        </div>
                        {/* end gambar */}
                        <div>Nama anime medium screen</div>   
                  </div>
                 </div>
               
               </div>

              
        </div>
    );
}

export default Detail;

// src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" 
