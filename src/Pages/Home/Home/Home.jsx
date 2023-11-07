import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import SwiperSlider from "./SwiperSlider";
import Writer from "./Writer/Writer";
import Library from "./Library_list/Library";


const Home = () => {
    const categoryData = useLoaderData()
    return (
        <div>
            <div className=" w-11/12 mx-auto">
                <SwiperSlider></SwiperSlider>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-5 lg:gap-5 w-11/12 mx-auto my-10">
                {
                    categoryData?.map(category => <Category item={category} key={category._id}></Category>)
                }
            </div>
            <div>
                <Writer></Writer>
            </div>
            <div className=" my-7">
                <h1 className=" mb-5 text-3xl font-bold text-cyan-500 text-center">Digital e-Book Library</h1>
                <Library></Library>
            </div>
        </div>
    );
};

export default Home;