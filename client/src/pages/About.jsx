import React from "react";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-black-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
            
          Welcome to HireHub: Your Gateway to Talent and Opportunity!

          At HireHub, we believe in the power of connections. We understand that
          finding the right talent for your team or discovering the perfect job can be a transformative experience. 
          That's why we've created a platform that brings together exceptional individuals and forward-thinking companies,
          fostering a community where careers flourish and businesses thrive.
          </p>
        </div>
        <div className="flex ml-auto mr-auto w-100 h-100">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0tQocL3IvaigwcJ_9DWbmi3p5giQ2fRJ_g&usqp=CAU" alt='About' />
        </div>
      </div>
        

      <div className='leading-8 px-5 text-justify'>
        <p className="font-bold">
        Our Mission:
        </p>
        <p>
        At the heart of HireHub is a commitment to simplifying the hiring process, making it more efficient, transparent, 
        and rewarding for both employers and job seekers. We aim to bridge the gap between talent and opportunity, creating a 
        seamless and empowering experience for everyone involved.
        </p>
        <p>
        <p className="font-bold pt-4">Why Choose HireHub?</p>

        <p className="font-bold">Streamlined Hiring Process:</p>
        We've reimagined the hiring journey, making it easier than ever to connect with the right candidates or discover your dream job. Our user-friendly platform ensures a smooth and efficient experience from start to finish.

        <p className="font-bold">Diverse Talent Pool:</p>
        Unlock access to a diverse and highly skilled talent pool. Whether you're seeking seasoned professionals or rising stars, HireHub is where you'll find the perfect match for your team.

        <p className="font-bold">Innovative Job Matching:</p>
        Our advanced algorithms and smart matching technology take the guesswork out of hiring. Say goodbye to sifting through countless resumes – we'll connect you with candidates who align with your company culture and job requirements.

        <p className="font-bold">Career Development Resources:</p>
        At HireHub, we're not just a job board – we're your career partner. Explore our rich repository of resources, from expert career advice to skill-building opportunities, designed to help you grow personally and professionally.

        <p className="font-bold">Responsive Support Team:</p>
        Have questions or need assistance? Our dedicated support team is here for you. We pride ourselves on providing timely and personalized support to ensure your experience with HireHub is nothing short of exceptional.
        </p>
        <p className="font-bold pt-4">Thank you for choosing HireHub – Where Talent Meets Opportunity!</p>
      </div>
    </div>
  );
};

export default About;