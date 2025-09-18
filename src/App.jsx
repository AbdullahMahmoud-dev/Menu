import Container from "react-bootstrap/esm/Container";
import AppNavbar from "./components/AppNavbar";
import Hero from "./components/Hero";
import Catigory from "./components/Catigory";
import Lists from "./components/Lists";
import { items} from "./data"
import { useState } from "react";

function App() {
  const [dataItems, setDataItems] = useState(items);
  const allcategory =['الكل', ...new Set (items.map((i)=>i.category))];
  const filterByCategory =(categ)=>{
    if(categ === 'الكل'){
      setDataItems(items)
    }else{
      const newArr =items.filter((item)=>item.category == categ)
      setDataItems(newArr)
    }
  }
  const filterBysearch =(word)=>{
    if(word !== ""){
      const newArray = items.filter((item)=>item.title.toLowerCase().includes(word.toLowerCase()));
      setDataItems(newArray)
    }

  }
  return (
    <>
      <AppNavbar filterBysearch={filterBysearch} />
      <Container>
        <Hero />
        <Catigory allcategory={allcategory} filterByCategory={filterByCategory} />
        <Lists dataItems={dataItems}  />
      </Container>
    </>
  );
}

export default App;
