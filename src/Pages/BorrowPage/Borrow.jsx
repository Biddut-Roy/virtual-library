import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loading from "../../../public/animation/loading.json"
import Borrowedcard from "./Borrowedcard";


const Borrow = () => {

    const { isPending, error, data: borrowed} = useQuery({
        queryKey: ['writer'],
        queryFn: () =>
            fetch("http://localhost:5000/borrow")
            .then((res) => res.json())
    })

    if (isPending) return <Lottie className=" mx-auto h-24 md:h-32 lg:h-96 w-10/12" animationData={loading} loop={true} />
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className=" w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-7">
            {
                borrowed?.map(borrow => <Borrowedcard borrowed={borrow} key={borrow._id}></Borrowedcard>)
            }
        </div>
    );
};

export default Borrow;