import  { useEffect, useState } from 'react';
import axios from 'axios';
import './items.css'
import {ref,listAll,getDownloadURL,getMetadata} from 'firebase/storage'
import { storage } from '../../cloud/firebaseConfig.js';


const Items = () => {
  const [srcUrl,setSrcUrl] = useState([]);
  const [data, setData] = useState([]);
  const [link,setLink] = useState([])

  const listRef = ref(storage,'LostItems')
console.log('data',link);
  useEffect(() => {  
    // img urls
const fetcUrl = async ()=>{
  console.log('urlFetching');
   listAll(listRef)
      .then((res)=>{
        res.items.forEach((item) =>{
          getDownloadURL(item)
        .then((url)=>{
          getMetadata(item)
          .then((metadata)=>{
            setSrcUrl((previousValues)=>[...previousValues,{'url':url,'metaData':metadata}])
          })
        })
      })
    })
    .catch((e)=>{console.log('download error:',e.message);})
  }
      const fetchData = async ()=>{
      try{
       await axios.get('http://localhost:8080/items').then((response)=>{
         setData(response.data.dbData);
        })
      }catch(e){
        console.log(e);
      }
    }
    
    const linkData = ()=>{
      data.map((item)=>{
        srcUrl.map((url)=>{
          if(item.imgId === url.metaData.customMetadata.id){
            setLink((previousValues)=>[...previousValues,{'dbData':item,'url': url.url}])
          }
        })
      })
    }
    fetchData()
    linkData()
    fetcUrl()
  }, []);

    return (
    <div className='item-container p-3'>
    {/* <div className='d-flex justify-content-center align-items-center flex-wrap'> */}
    <h1 className="display-3 mb-4">Lost Items</h1>
    <div className='card-deck flex-wrap justify-content-center align-items-center'>
      {  link.map((item,index) =>( 
      <>
      <div className='card m-4' >
      <div className='card-header'>
      <h2 key={item.dbData._id} className='card-title'>
        {item.dbData.title}
      </h2>
      </div>    
              <img className='card-Img mx-auto ' src={item.url} alt='img' key={index} style={{height:'280px',width:'280px'}}/>
            <div className='card-body'>

          <div className='card-text'>Lost Location: {item.dbData.foundAt}</div>  
          <p className='card-text'>Description: {item.dbData.description}</p>  
            </div>
            <div className='card-footer'>
          <p>Contact: {item.dbData.contact}</p>  
            </div>
      </div>
      </>
     ) ) }
    </div>
    </div>
  )
}

export default Items
