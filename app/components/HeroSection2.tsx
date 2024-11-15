import Image from "next/image"

export default function HeroSection2() {
    return(
        <div>
            <section className="flex flex-col lg:flex-row justify-around gap-10 xl:gap-0 px-7 xl:pr-2 py-7">
                <div className="flex flex-col w-full lg:w-1/2 gap-3 px-3 pt-3 lg:py-3 ">
                    <h1 className="font-bold text-3xl md:text-4xl ">Sample Heading's 1</h1>
                    <p className="text-base justify-self-center pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Impedit magnam reprehenderit cum sint totam ex quisquam! 
                        Eligendi provident velit odit deleniti maiores optio cum 
                        odio. Quasi sint officia animi illum. Lorem ipsum, dolor 
                        sit amet consectetur adipisicing elit. Vitae cupiditate 
                        facere ut. Blanditiis nisi eos dolor ea, consequatur officiis 
                        corrupti soluta dolores incidunt ad velit enim voluptatem rem, 
                        libero totam. Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit.  
                    </p>
                    <div className="flex justify-center w-full">
                        <button className="border-2 border-black bg-blue-500  w-2/5 md:w-1/3 h-10 rounded-lg text-white text-lg">
                            Press ME
                        </button>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 xl:w-[38%] justify-center items-center rounded-xl ">
                    <Image 
                        src = "/placeholder.png"
                        alt = "Placeholder Image"
                        width={800}
                        height={200}
                    />
                </div>
            </section>
            
            <section className="flex flex-col lg:flex-row justify-around gap-10 xl:gap-0 px-7 xl:pr-2 py-7">
                <div className="flex flex-col w-full lg:w-1/2 gap-3 px-3 pt-3 lg:py-3 ">
                    <h1 className="font-bold text-3xl md:text-4xl ">Sample Heading 2</h1>
                    <p className="text-base justify-self-center pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Impedit magnam reprehenderit cum sint totam ex quisquam! 
                        Eligendi provident velit odit deleniti maiores optio cum 
                        odio. Quasi sint officia animi illum. Lorem ipsum, dolor 
                        sit amet consectetur adipisicing elit. Vitae cupiditate 
                        facere ut. Blanditiis nisi eos dolor ea, consequatur officiis 
                        corrupti soluta dolores incidunt ad velit enim voluptatem rem, 
                        libero totam. Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit.  
                    </p>
                    <div className="flex justify-center w-full">
                        <button className="border-2 border-black bg-blue-500  w-2/5 md:w-1/3 h-10 rounded-lg text-white text-lg">
                            Press ME
                        </button>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 xl:w-[38%] justify-center items-center rounded-xl ">
                    <Image 
                        src = "/placeholder.png"
                        alt = "Placeholder Image"
                        width={800}
                        height={200}
                    />
                </div>
            </section>
        </div>
    )
}