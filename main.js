let home = document.getElementById("li1") ;
let about = document.getElementById("li2") ;
let skills =  document.getElementById("li3") ;
let contact =  document.getElementById("li4") ;
let content =  document.getElementById("content") ;
let infobtns = document.getElementById("infobtns")





home.addEventListener("click",function Home()
{
    content.innerHTML = `<h2 id="hello">Hello it's me...</h2>
                           <h3 id="name"><span>Balaram</span> Dhakad</h3>
                           <p id="front">And I am a <span>frontend</span> developer </p>
                           <p id="summary"> Dynamic and detail-oriented <span>Front-End Developer</span> with a strong foundation in <span>HTML, CSS, </span> and <span>JavaScript</span>. Proficient in creating responsive, user-friendly web interfaces with clean and efficient code. Adept at leveraging modern frameworks and libraries to build scalable Web Applications while ensuring cross-browser compatibility and performance optimization. Passionate about learning new technologies and delivering innovative solutions that enhance user experiences.</p>
                           <div id="btns">
                            <button id="cv">See my CV</button>
                            <button id="project">Projects</button>
                            </div>`
})

about.addEventListener("click",function About()
{
    content.innerHTML = `<h2 id="skill"><span>Hello</span> there...</h2>
                        <h3 id = "name">My name is <span>Balaram Dhakad</span></h3>
                         <p id = "front">And i have completed my Graduation with <span>Bachelor</span> of <span>science</span>.</p>
                         <div id = "classes">
                          <h2 id = "education">EDUCATION</h2> 
                          <h4 id= "class"><span>10<sup>th</sup> </span> to <span>12<sup>th</sup> </span></h4> 
                          <h4 id = "class10">Class <span>10<sup>th</sup> </span> passout with 67.4% .  </h4> 
                          <h4 id = "class12">Class <span> 12<sup>th</sup></span> passout with 61% . </h4>
                          </div> 
                          <h4 id = "graduation">In <span>Graduation</span></h4> 
                          <p id = "bachelor">I have done Bachelor of science degree at Vikram University With 58.50%.  </p>
                           <h4 id = "aboutme">I have some technical skills
                           <ul>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>JavaScript</li>
                           <li>Problem solving</li>
                           <li>communication</li>
                           </ul>
                           </h4>`
    
})

skills.addEventListener("click",function skills()
{
    content.innerHTML = `<h2 id="skill"><span>Skills</span> :-</h2>
                        <h3 id = "name">I am <span>Frontend </span> Devloper</h3>
                         <p id = "front">And i have mastered in <span>HTML</span> , <span>CSS</span> and <span>JavaScript</span>.</p>
                         <div id = "classes">
                          <h2 id = "education">How i <span>learn</span> skills .</h2> 
                         <p id="summary"> I am learning there skills in "<span>THE PRIME STEP</span>"
                         coching institude . And i am <span>brushing-up</span> my skills for accomplishing difficult <span>task</span> and 
                         making some new concept to <span>enhance</span> my skills and learn from my <span>mistakes</span> and create new projects.
                          </p>
                          <h4 id="html">HTML<span>:-</span> <p>I have learn all of html tags to use making good web-structure.</p> </h4>
                          <h4 id="css">CSS<span>:-</span> <p>I have good imagination skill to build atractive web-pages. </p> </h4>
                          <h4 id="js">JavaScript<span>:-</span> <p>I have good logical mind to use type of create a special website.</p> </h4>
                           `
    
})

contact.addEventListener("click",function contact()
{
    content.innerHTML = `<h2 id="skill"><span>Contact</span> :-</h2>
                        <h3 id = "name">I am very <span>Greatfull </span> to join with us.</h3>
                         <p id = "front">If you <span>Trust</span> me i won't <span>let you down</span>.</p>
                         <div id = "classes">
                          <h2 id = "education"> <span>Here is my</span> Contact <span>detial</span> .</h2> 
                           <div id="infobtns">
                            <h1 id="mail"><img src="./gmail logo.png.webp">balramdhakad04@gmail.com</h1>
                            <h1 id="whatsapp"><img src="http://pluspng.com/img-png/whatsapp-hd-png-whatsapp-logo-png-1000.png"> 9174420787 </h1>
                            </div>`


      
    
})