// here the below ..props mean grouping data into object
export default function Section({title, children, ...props}){
  return (
    // id is not forwarded when we are using section here 
    // here wer are using{...} to spread some data onto some other element usefull while building the wrapper component just like the section component here
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}