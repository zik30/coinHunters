import React, {useEffect} from 'react';
import style from "./doneModal.module.scss";
import { useNavigate } from "react-router-dom";


const DoneModal = ({ background,message,caption }) => {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    useEffect(()=>{
        if (background === "red"){
            setTimeout(()=>navigate("/"), 2000)
        }
    },[background])

    return (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={`${style.modalSignal} ${style[background]}`}></div>
               <div className={style.modalMessage}>
                   <p>{message}</p>
                   <p  className={style.modalMessageCaption}>{caption}</p>
               </div>
            </div>
        </div>
    );
};

export default DoneModal;
