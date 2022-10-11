import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate()
    let clickEv=() => {
        navigate('/about')
    }

    return (
        <>
        <h1>Contact</h1>
        <button onClick={clickEv}>go to home</button>
        </>
    );
}

export default Contact;