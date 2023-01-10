import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://bd-tools-server-side.vercel.app/tools')
            .then(res => res.json())
            .then(data => setTools(data)
            )
    }, []);
    return [tools, setTools];
}

export default useTools;