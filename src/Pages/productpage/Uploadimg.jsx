import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Uploadproduct from './Uploadproduct';
const Uploadimg = ({imagename}) => {
  const [clodimg, setclodimg] = useState("")
  useEffect(()=>{
    console.log('am image');
    console.log(imagename);
    if(imagename!==""){
      let url = 'https://konetbe.vercel.app/user/saveimg'
      axios.post('https://konetbe.vercel.app/user/saveimg', {imagename:imagename}).then((res)=>{
          console.log('Image sent');
          console.log(res.data.myimage)
          setclodimg(res.data.myimage)
          localStorage.setItem('imageUrl', res.data.myimage)

      }).catch((err)=>{
          console.log(err);
      })
    }
  },[])
  return (
    <div style={{display:clodimg?"block":"none"}}>
      <Uploadproduct cloudimg={clodimg}/>
    </div>
  )
}

export default Uploadimg