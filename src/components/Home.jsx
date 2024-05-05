import "./css/Home.css"

function Home(){


    return (

        <div className="Home" id="Home">

            <div className="Home-Container">
                <div className="img">
                <img src="/pic.jpg" alt="Profile" /></div>
                <div className="Home-Information">
                    <h4><i className="p-welcome"> Hi</i> , I am</h4>
                    <h1><i className="p-name">RAMESHKUMAR V</i></h1>
                    <h3><i className="p-job">Developer</i></h3>
                    <p>Welcome to My Portfolio Website!

I'm Rameshkumar, a passionate developer eager to explore new opportunities. Here you can find my projects, skills, and experiences. 
I am currently seeking job and internship opportunities.
Feel free to explore and get in touch!</p>
<button>
    <a href="#Contact">Contact Me
    </a><span class="down-symbol"></span>

</button>

                  </div>
            </div>

        </div>

    );

}


export default Home;