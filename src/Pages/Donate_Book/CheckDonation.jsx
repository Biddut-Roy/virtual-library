import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CheckDonationCard from "./CheckDonationCard";


const CheckDonation = () => {
    const { isPending, error, refetch, data } = useQuery({
        queryKey: ['Donate-books'],
        queryFn: async () => {
            const res = await axios.get('https://virtual-library-eight.vercel.app/donate' , { withCredentials: true })
            return res.data
        }
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    refetch()

    return (
        <div className=" my-5">
            {
                data.map(book =><CheckDonationCard key={book._id} refetch={refetch} book={book}></CheckDonationCard>)
            }
        </div>
    );
};

export default CheckDonation;