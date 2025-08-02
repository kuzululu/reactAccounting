import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () =>{
 const typedRef = useRef(null)
 const typedInstance = useRef(null)

 useEffect(()=>{
    typedInstance.current = new Typed(typedRef.current,{
    strings: ["About", "Accounting ", "Software Firm"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
    })

    return () =>{
        typedInstance.current.destroy()
    }
 }, [])

 return <span ref={typedRef} className="d-block text-center fw-bolder"></span>
}

export default TypingEffect