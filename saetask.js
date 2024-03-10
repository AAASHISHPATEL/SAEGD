
  const aboutus=document.querySelector("#aboutus");
  const aboutContainer=document.querySelector(".about-container")
  const register=document.querySelector("#register")
  const about=document.querySelector(".about")
  const tire1=document.querySelector(".tire1");
  const tire2=document.querySelector(".tire2");
  const tire2register=document.querySelector("#tire2register");
  
  
    aboutus.addEventListener("click", () => {
      tire2.classList.remove('shrink');
      tire2.classList.add('expand');
      aboutContainer.classList.remove('remove');
      // setTimeout(()=>{
      //   aboutContainer.classList.remove('remove');
      // },500);
      
    });
  
    tire2register.addEventListener("click", () => {
      tire2.classList.add('shrink');
      tire2.classList.remove('expand');
      // aboutContainer.classList.add('remove');
      setTimeout(()=>{
        aboutContainer.classList.add('remove');
      },2000);
    });