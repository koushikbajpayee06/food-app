import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [OnlineStatus, SetOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            SetOnlineStatus(false);
        });

        window.addEventListener("online", (event) => {
            SetOnlineStatus(true);
        });
    },[]);

    return OnlineStatus;
}
export default useOnlineStatus;