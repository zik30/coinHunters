import style from "./RegistrationPage.module.scss";
import { useForm } from "react-hook-form";
import closeIcon from "/icons/x.svg";
import {useEffect,  useState} from "react";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router-dom";
import DoneModal from "../../shared/doneModal/DoneModal.jsx";


const RegistrationModal = () => {
    const [message,setMessage]= useState(null)
    const regExpName = /([а-яА-ЯёЁ]|[a-zA-Z]){2}/;
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);


    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm({ mode: "all" });

    const checkUserExists = async (phone) => {
        try {
            const response = await fetch("https://66a8b255e40d3aa6ff5902eb.mockapi.io/players");
            const result = await response.json();
            const userExists = result.some(user => user.phone === phone);
            console.log("Пользователь найден:", userExists);
            return userExists;
        } catch (error) {
            console.error("Ошибка при проверке регистрации:", error);
            setMessage("error")
            return false;
        }
    };

    const sendToMockApi = async (name, phone) => {
        try {
            const userExists = await checkUserExists(phone);
            if (userExists) {
                setMessage("success");
                return;
            }
            const url = "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players";
            const data = { name, id: nanoid(), phone };

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setMessage("success");
            } else {
                throw new Error("Ошибка при отправке данных");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            setMessage("error");
        }
    };






    const checkName = value => {
        return regExpName.test(value);
    };

    const handlePhoneChange = e => {
        let phoneValue = e.target.value.replace(/[^\d]/g, "");
        phoneValue = phoneValue.slice(3);
        const fullPhoneValue = "+996" + phoneValue;
        if (fullPhoneValue.length > 13) {
            setValue("phone", fullPhoneValue.slice(0, 13));
        } else {
            setValue("phone", fullPhoneValue);
        }
    };
    const validatePhoneNumber = value => {
        const regExpNumber = /^\+996[23579]\d{8}$/;
        const cleanedNumber = value.replace(/[^\d+]/g, "");
        const isValid = regExpNumber.test(cleanedNumber);
        return isValid;
    };

    const navigate = useNavigate()
    useEffect(()=>{
        console.log(message)
        if (message === "success") {
            setTimeout(() => navigate("/game"), 2000);
        }
    }, [message]);


    const formatPhoneNumber = value => {
        let cleanedNumber = value.replace(/[^\d+]/g, "").replace(/(?!^\+)\+/g, "");
        if (cleanedNumber.startsWith("0")) {
            cleanedNumber = "+996" + cleanedNumber.slice(1);
        }
        return cleanedNumber;
    };

    const onSubmit = async (data) => {
        try {
            setMessage(null);
            const formattedPhone = formatPhoneNumber(data.phone);
            await sendToMockApi(data.name, formattedPhone);

            localStorage.setItem("phone", data.phone);
            localStorage.setItem("name", data.name);

            reset();
            document.body.style.overflow = "scroll";
        } catch (error) {
            console.error("Ошибка в процессе отправки:", error);
            setMessage("error");
        }
    };
    const onClose = ()=>{
        navigate("/")
    }


    return  (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <button className={style.closeButton} onClick={onClose}>
                    <img src={closeIcon} alt='' />
                </button>
                {message && <DoneModal background={message === "error" ? "red" : "green"} />}
                    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
                        <p className={style.message}>Пройдите регистрацию</p>
                        <div className={style.inputAreaItself}>
                            <div className={style.wrapper}>
                                <div className={style.inputArea}>
                                    <input
                                        name='name'
                                        placeholder='Ваше ФИО'
                                        className={`${style.input} ${errors.name ? style.errorInput : ""}`}
                                        maxLength={50}
                                        {...register("name", {
                                            required: true,
                                            validate: checkName
                                        })}
                                    />
                                    {errors.name && (
                                        <p
                                            className={style.errorMessage}
                                        >
                                            * Это поле обязательно для заполнения
                                        </p>
                                    )}
                                </div>
                                <div className={style.mainInputArea}>
                                    <input
                                        name='phone'
                                        className={`${style.input} ${errors.phone ? style.errorInput : ""}`}
                                        defaultValue='+996'
                                        {...register("phone", {
                                            required: true,
                                            validate: validatePhoneNumber
                                        })}
                                        onInput={handlePhoneChange}
                                    />
                                    {errors.phone && (
                                        <p className={style.errorMessage}
                                        >
                                            * Это поле обязательно для заполнения
                                        </p>
                                    )}
                                </div>

                            </div>
                            <button className={style.button} type='submit'>SEND</button>
                        </div>
                    </form>
            </div>
        </div>)
    ;
};
export default RegistrationModal;