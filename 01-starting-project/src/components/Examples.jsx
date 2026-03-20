
import { EXAMPLES } from "../data";
import {useState} from 'react';
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
  //This useState returns an array with two values 
    //useState lets a component remember a value and re-render when that value changes.
     const [selectedTopic, setSelectedTopic]=useState();
    function handleSelect(selectedButton){
      // selectedButton => 'components','jsx', 'props', 'state'
      //“Hey, my state has changed”
       setSelectedTopic(selectedButton);
      console.log(selectedButton);
    }
       let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
      tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
      );
      }
     
    
  return (
    <Section title="Examples" id="examples">
      {/* for built in container we pass as string ie "menu" but when we have custom compt pass it as dynamic {section} for eg */}
      <Tabs 
      // we are setting this below prop value as default 
      // ButtonsContainer="menu"
      buttons={<>
              <TabButton
               isSelected={selectedTopic === 'components'}
                onSelect ={()=>handleSelect('components')}>
                 Components
                 </TabButton>
               <TabButton 
               isSelected={selectedTopic === 'jsx'}
               onSelect={()=>handleSelect('jsx')}>
                 JSX
                 </TabButton>
               <TabButton 
               isSelected={selectedTopic === 'props'}
               onSelect={() => handleSelect('props')}>
                 Props
                 </TabButton>
               <TabButton 
               isSelected={selectedTopic === 'state'}
               onSelect ={ () =>handleSelect('state')}>
                 State
                 </TabButton>
              </>}>
              {tabContent}
              </Tabs>
               {/* Pass the function handleSelect as a prop named onSelect to the TabButton component. initially when onSelect={handleSelect} when all buttons behave the same ” */} 
   
               {/* {/* But here we are telling the react When THIS button is clicked, call handleSelect with a SPECIFIC value */}
                



                 {/* RENDERING CONTENT CONDITIONALLY  */}
                 {/* here below null is something which we can output in the jsx code and this means we have rendered nothing  */}
              {/* {!selectedTopic ? <p>Please Select a topic</p> : null}
   
              {selectedTopic ? (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                 <code>
                      {EXAMPLES[selectedTopic].code}
                 </code>
                </pre>
               </div>): null} */}



               
          </Section>
  );
}