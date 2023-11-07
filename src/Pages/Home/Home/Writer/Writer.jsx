import { useQuery } from "@tanstack/react-query";
import WriterCard from "./WriterCard";
import Lottie from "lottie-react";
import loading from "../../../../../public/animation/loading.json"


const Writer = () => {
    const { isPending, error, data: writers } = useQuery({
        queryKey: ['writer'],
        queryFn: () =>
            fetch('https://virtual-library-eight.vercel.app/writer')
            .then((res) => res.json())
    })

    if (isPending) return <Lottie className=" mx-auto h-24 md:h-32 lg:h-96 w-10/12" animationData={loading} loop={true} />
    if (error) return 'An error has occurred: ' + error.message
    return (
     <div>
        <h1 className=" text-center my-5 text-3xl font-bold text-cyan-500 border-b-2 border-teal-500">WRITERS</h1>
        {
            writers.map(writer=><WriterCard writer={writer} key={writer._id}></WriterCard>)
        }
     </div>
    );
};

export default Writer;