import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/users'); // Replace with the correct API endpoint
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error || "Failed to fetch conversations");
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
                console.error("Error fetching conversations:", error); // Log error for debugging
            } finally {
                setLoading(false);
            }
        };

        getConversation();
    }, []); // Empty dependency array ensures this runs only once on mount

    return { loading, conversations };
};

export default useGetConversation;
