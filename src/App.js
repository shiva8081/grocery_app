// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import  {AddItem}  from './AddItem';
import { SearchItem } from './SearchItem';

function App() {
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('shopingitme')));



const onCheckbox=(id)=>{
  const listitem= items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
  saveandsetitem(listitem);
}
const deletebtn=(id)=>{
  const listitem=items.filter((item)=> item.id !==id);
  saveandsetitem(listitem);
}

const [newitem, setnewitem] = useState('');

const additem = (item)=>{
  const id=items.length?items[items.length-1].id+1:1;
  const mynewitem = {id,checked:false,item};
  const listitem= [...items,mynewitem];
  saveandsetitem(listitem);
 
}

const handlesubmit=(e)=>{
  console.log('submitted');
  e.preventDefault();
  if(!newitem) return;
  additem(newitem);
  setnewitem('');
}
const saveandsetitem =(newitem)=>{
  setitems(newitem);
  localStorage.setItem('shopingitme',JSON.stringify(newitem));
  

}
const [search, setsearch] = useState('');

  return (
    <>
   <Header title='list h baba khane ki'/>
   <SearchItem setsearch={setsearch} search={search} />
   <AddItem newitem={newitem} setnewitem={setnewitem} handlesubmit={handlesubmit} />
   
   <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} onCheckbox={onCheckbox} deletebtn={deletebtn}  />
   <Footer/>
    </>
  );
}

export default App;







