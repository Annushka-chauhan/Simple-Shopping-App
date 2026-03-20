
//Flow of the code 

// User clicks the button
// onClick triggers onSelect
// onSelect points to handleSelect
// handleSelect runs
// Console prints "Hello World"

//Or here we can also use the ...props which will take all the features of tabButton say onSelect and we dont have to use here onClick while the onClick will be set on the TabButton on app.jsx which has handleSelect function


export default function TabButton ({children, onSelect, isSelected}){
  function handleClick(){
    console.log('Hello World!');
  }
  return <li>
    {/* We use here the function as a value as we are not calling it whenever the component works but when the button is clicked its been executed by the react */}
    <button className= {isSelected ? 'active' : undefined} onClick = {onSelect}>{children}</button></li>
}

// OR we can use destructing using Children which denotes it 
//export default function TabButton ({props}){
//   return <li><button>{props.children}</button></li>
// }