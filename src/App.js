// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { AddItem } from './AddItem';
import { SearchItem } from './SearchItem';
import apiRequest  from './apiRequest';

function App() {

  const API_URL = 'http://localhost:3500/items';

const [fetcherror, setfetcherror] = useState(null);
const [loading, setloading] = useState(true);





  const [items, setitems] = useState([]);

  useEffect(() => {
    // localStorage.setItem('shopingitme',JSON.stringify(items));
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)  throw Error('Failed to fetch items');
        
        const ListItem = await response.json();
        console.log(ListItem)
        setitems(ListItem);
        setfetcherror(null)
      } catch (err) {
      
        setfetcherror(err.message)
      } finally{
        setloading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItem())();
    }, 2000);
    
  },[])

  const onCheckbox = async (id) => {
    const listitem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setitems(listitem);

    const myItem=listitem.filter((item)=>item.id==id);
    const updateOption={
      method:'PATCH',
      header:{'Content-Type':'application/json'},
      body:JSON.stringify({checked:myItem[0].checked})
    };
    const requrl=`${API_URL}/${id}`;
    const result=await apiRequest(requrl,updateOption)
    if(result) setfetcherror(result);
    
  }

  const deletebtn = async(id) => {
    const listitem = items.filter((item) => item.id !== id);
    setitems(listitem);
    const deleteoption={
      method:'DELETE'
    }
    const requrl=`${API_URL}/${id}`;
    const result=await apiRequest(requrl,deleteoption)
    if(result) setfetcherror(result);

  }

  const [newitem, setnewitem] = useState('');

  const additem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewitem = { id, checked: false, item };
    const listitem = [...items, mynewitem];
    setitems(listitem);
    
    const postOptions={
      method:"POST",
      header:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(mynewitem)
    }
    const Result=await apiRequest(API_URL,postOptions);
    if(Result) setfetcherror(Result);
  }

  const handlesubmit = (e) => {
    // console.log('submitted');
    e.preventDefault();
    if (!newitem) return;
    additem(newitem);
    setnewitem('');
  }

  const [search, setsearch] = useState('');

  return (
    <div className=''>
      <Header title='GROCERY LIST' />
      <SearchItem setsearch={setsearch} search={search} />
      <AddItem newitem={newitem} setnewitem={setnewitem} handlesubmit={handlesubmit} />
      <div>
        {/* {loading && <p> loading item... </p>} */}
      <Content loading={loading} items={items.filter(item => item.item && item.item.toLowerCase().includes(search.toLowerCase()))} onCheckbox={onCheckbox} deletebtn={deletebtn} />
      </div>
      <Footer />
    </div>
  );
}

export default App;








