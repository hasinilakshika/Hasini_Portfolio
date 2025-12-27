import { Briefcase, User, Code } from "lucide-react";


export const AboutSection = () => {
    return<section id="about" className="py-24 px-4 relative"> 
    {" "}
    <div className="container mx-auto max-w-5xl">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    About <span className="text-primary">Me</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
    <h3 className="text-2xl font-semibold">Building Practical & User-Friendly Web Solutions</h3>

    <p className="text-muted-foreground">
  As an Information Technology undergraduate at SLIIT, I have worked on multiple academic and personal projects, gaining hands-on experience in web development. I enjoy collaborating in teams to solve problems and bring ideas to life.
</p>
<p className="text-muted-foreground">
  I'm passionate about learning new technologies and applying them to create practical, efficient, and user-friendly solutions. Constantly exploring modern tools and techniques, I strive to grow as a capable and innovative IT professional.
</p>


    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button"> 
            {" "}
            Get In Touch

        </a>
    <a href="/projects/HasiniCV.pdf" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
            {" "}
            Download CV
 </a>
</div>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4"></div>
    <div className="p-3 rounded-full bg-primary/10">
    <Code  className="h-6 w-6 text-primary"/>
</div>
<div className="text-left">
    <h4 className="font-semibold text-lg">Web Development</h4>
    <p className="text-muted-foreground">
        {""}
        Creating responsive websites and web applications with modern frameworks.

    </p>



</div>
</div>
<div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4"></div>
    <div className="p-3 rounded-full bg-primary/10">
    <User  className="h-6 w-6 text-primary"/>
</div>
<div className="text-left">
    <h4 className="font-semibold text-lg">UI/UX Design</h4>
    <p className="text-muted-foreground">
        {""}
       Designing user-friendly and visually appealing interfaces using tools like Figma, with a focus on wireframing and prototyping.



    </p>



</div>
</div>
<div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4"></div>
    <div className="p-3 rounded-full bg-primary/10">
    <Briefcase  className="h-6 w-6 text-primary"/>
     </div>
     <div className="text-left">
    <h4 className="font-semibold text-lg">Project Management</h4>
    <p className="text-muted-foreground">
        {""}
    Leading and coordinating team projects, ensuring tasks are completed efficiently and collaboratively.



    </p>



</div>
</div>


</div>
</div>
        </div>
    </section>

    
};