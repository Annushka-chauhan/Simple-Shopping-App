// Which wrapper element should bee used (by the programmer other than menu is that we can wrap the particular all data into menu from example or we can use an other prop as buttonsContainer which determines the wrapping compt )

export default function Tabs({children,buttons,ButtonsContainer='menu'}){
  return (
    <>
    <ButtonsContainer>
     {buttons}
    </ButtonsContainer>
{children}
    </>
  );
  
}