import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {

    const [content, setContent] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/event`)
            .then((response) => {
                console.log("API Response:", response.data);
                setContent(Array.isArray(response.data?.data) ? response.data.data : []);
            })
            .catch((err) => console.error("Error fetching events:", err));
    }, []);


    return content
}