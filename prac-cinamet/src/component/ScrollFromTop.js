import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollFromTop() {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,document.body.scrollHeight);
    },[location])
  return (
   null
  )
}
