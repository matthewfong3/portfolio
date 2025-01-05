// Image Slider Reference:
// https://www.youtube.com/watch?v=nJWq74MHplc&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z&index=4
// https://www.youtube.com/watch?v=wQcR25IyPBQ&index=5&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z
const imageSlider = () => {
    let slideIndex = { val: 0 };

    showImage(slideIndex);

    let nextBtn = document.getElementsByClassName('next');
    let prevBtn = document.getElementsByClassName('prev');
    let dots = document.getElementsByClassName('dots');

    if(nextBtn) nextBtn[0].addEventListener('click', () => incrementIndex(slideIndex));
    if(prevBtn) prevBtn[0].addEventListener('click', () => decrementIndex(slideIndex));
    if(dots){
        for(const d of dots) d.addEventListener('click', () => currentSlide(slideIndex, d.getAttribute('data-i')));
    }
};

const incrementIndex = (sI) => {
    sI.val++;
    showImage(sI);
};

const decrementIndex = (sI) => {
    sI.val--;
    showImage(sI);
};

const currentSlide = (sI, i) => {
    sI.val = i;
    showImage(sI);
};

const showImage = (sI) => {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dots');

    if(sI.val >= slides.length) sI.val = 0;

    if(sI.val < 0) sI.val = slides.length - 1;

    for(const s of slides) s.style.display = "none";

    slides[sI.val].style.display = "block";

    if(dots){
        for(const d of dots) d.classList.remove('selected');
        dots[sI.val].classList.add('selected');
    }
};

const AudioViz = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="assets/images/audioviz1.png" alt="Audio Vizualizer 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/audioviz2.png" alt="Audio Vizualizer 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/audioviz3.png" alt="Audio Vizualizer 3"/>
                </div>
                <div className="slides fade">
                    <video controls><source src="assets/images/audiovizSample2.mp4" type="video/mp4"/></video>
                </div>

                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>

            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
            </div>

            <h3>Audio Visualizer</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, Canvas</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed & implemented core functionality of audio visualizer, such as 
                        <ul>
                            <li>reading in selected audio file</li>
                            <li>converting sound data to frequency/waveform data for visualization on canvas</li>
                        </ul>
                        - Designed visual experience of the app <br/>
                        - Designed layout of the app</p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>

                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browsers</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> For this project, I had the chance to explore and experiment with JavaScript 
                        and Canvas by developing and designing an audio visualizer. Heavily inspired 
                        by audio visualizers from youtube videos, I created an interactive experience 
                        and included a control panel for users to tweak/toggle different audio & visual features. 
                        The app reads in an audio file and converts sound data to frequency/waveform data that
                        the user can then visualize.</p>

                    <p><b><span>Experience it Yourself! </span><a href="https://matthewfong3.github.io/audioviz/">Audio Visualizer App</a></b></p>
                </section>
            </div>
        </div>
    );
};

const KingOfTheBall = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="assets/images/kingOfTheBall1.png" alt="King of the Ball 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/kingOfTheBall2.png" alt="King of the Ball 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/kingOfTheBall3.png" alt="King of the Ball 3"/>
                </div>
                <div className="slides fade">
                    <img src="assets/images/kingOfTheBall4.png" alt="King of the Ball 4"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/kingOfTheBall5.png" alt="King of the Ball 5"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/kingOfTheBall6.png" alt="King of the Ball 6"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/kingOfTheBall7.png" alt="King of the Ball 7"/>
                </div>
        
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
      
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
                <span className="dots" data-i="4"></span>
                <span className="dots" data-i="5"></span>
                <span className="dots" data-i="6"></span>
            </div>
            
            <h3>King of the Ball</h3>
      
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, Canvas</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed game physics, core mechanics, and functionality of the game using Object-Oriented Programming, such as
                        <ul>
                            <li>simple physics system (collision detection)</li>
                            <li>bounding boxes</li>
                            <li>player movement and interactions</li>
                            <li>player and ball respawn logic</li>
                        </ul>
                        - Sprite Animations <br/>
                        - Sound Design (sound effects, background music)<br/>
                        - Designed style/look and feel of the game <br/>
                        - Designed level layouts <br/>
                        - Designed game menus</p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>
      
                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browser</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Heavily inspired by PlayStation's <i>BaraBariBall</i>, King of the Ball is a local 1-versus-1 arcade-party game.
                        This project features 3 custom levels, implementation of game physics (constant gravity force), basic player movement & jumping, and 
                        player interactions (players can pick up the ball from the ground or steal the ball from the other player holding it).
                        The game mode is based on Microsoft Halo's OddBall game mode, in which players try to hold onto the ball 
                        for as long as they can while being in their respective color regions to gain points. 
                        The player with the most points after the timer expires wins. <br/><br/>
                        This project demonstrates understanding and utilization of HTML5's canvas element
                        by updating game logic and animations and then displaying these updates on the canvas for players.</p>  

                    <p><b><span>Play the Game! </span><a href="https://matthewfong3.github.io/king-of-the-ball/">King of the Ball Game</a></b></p>
                </section>
            </div>
        </div>
    );
};

const Tweeter = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="assets/images/tweeter1.png" alt="tweeter 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter2.png" alt="tweeter 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter3.png" alt="tweeter 3"/>
                </div>
                <div className="slides fade">
                    <img src="assets/images/tweeter4.png" alt="tweeter 4"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter5.png" alt="tweeter 5"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter6.png" alt="tweeter 6"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter7.png" alt="tweeter 7" width="100%" height="100%"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/tweeter8.png" alt="tweeter 8" width="100%" height="100%"/>
                </div>
        
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
      
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
                <span className="dots" data-i="4"></span>
                <span className="dots" data-i="5"></span>
                <span className="dots" data-i="6"></span>
                <span className="dots" data-i="7"></span>
            </div>
      
            <h3>Tweeter</h3>
      
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, Jquery, NodeJs, ReactJS, ExpressJS, MongoDB, Redis</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer (Full Stack Developer)</p>
                    <p> - Programmed and implemented core functionality of the app, such as 
                            <ul>
                                <li>secure sign-up/log-in with accounts</li>
                                <li>encrypting passwords for user accounts</li>
                                <li>account's following/followers system</li>
                                <li>creating, editing, deleting, favoriting, replying to user's tweets</li>
                                <li>attaching images, gifs, and video files to tweets</li>
                            </ul>
                        - Implemented dynamic and responsive application with ReactJS <br/>
                        - Developed a light/dark mode feature <br/>
                        - Designed style/look and feel of the app</p>
                    <h4>Duration</h4>
                    <p>Less than 4 months</p>
                </section>
      
                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browser</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Tweeter is a social media <i>Twitter</i>-clone app project, demonstrating understanding of RESTful API and implementation of a Model-View-Controller (MVC) framework. 
                        Although, it is still missing various features, Tweeter was developed and designed to exemplify the core concept of what Twitter is, 
                        an application where users can view a collection of data created by other users and interact with each other through this collection of data, which is stored in a database. <br/><br/>
                        
                        Some features of Tweeter include creation of user accounts, following accounts, 
                        tweeting (posting) messages, while also the ability to attach images, video, and gif files to tweets. 
                        Users can view not only their own tweets, but also tweets from other Tweeter accounts they follow. 
                        Additionally, users may also edit and/or delete their own tweets and can reply 
                        to other tweets. Account users can change their password and may toggle 
                        between a light/dark mode interface as well.</p>

                    <p><b><span>Experience it Yourself! </span><a href="https://tweeter-3de7.onrender.com/">Tweeter</a></b></p>
                </section>
            </div>
        </div>
    );
};

const Pictionary = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="assets/images/pictionary1.png" alt="pictionary 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/pictionary2.png" alt="pictionary 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/pictionary3.png" alt="pictionary 3"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="assets/images/pictionary4.png" alt="pictionary 4"/>
                </div>
        
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
      
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
            </div>
      
            <h3>Draw With Friends!</h3>
      
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, NodeJs, Canvas, Websockets (socket.io)</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed core functionality of the game, such as
                        <ul>
                            <li>connecting different client browsers in a game session (4 player server rooms) using websockets (socket.io)</li>
                            <li>the server assigns one random drawer at the start of each game, while the other three players will guess the word</li>
                            <li>communication logic between clients and server when sending and receiving data, i.e - chatbox messages, updates to the canvas when drawing</li>
                            <li>emitting and broadcasting image data (canvas drawings) between server and all connected clients</li>
                        </ul>
                        - Designed layout and style/look and feel of the game</p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>
      
                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browser</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Draw With Friends! is a clone copy of the popular game <i>Pictionary</i>. Each round, a different player is given a random word to draw and the other 3 players
                        must guess the word to gain a point. The first player to reach 3 points will be declared the winner of the game and a new game will begin.  <br/><br/>
                        By utilizing Websockets (socket.io), Canvas and NodeJs, Draw With Friends! is a project that connects users (players) from different client browsers 
                        into a game session (server room). Multiple rooms are also supported, as the first four players to join will be put 
                        in one game (server) room and the following four will be put in another game (server) room. Within a game, as the drawer is painting his artwork onto their canvas, 
                        all the image data is being emitted to the server, in which the server will then broadcast the data back to the other 3 guessers onto their respective canvases. Similarly,
                        all the messages in the chatbox that the 3 guessers send will be emitted to the server, which will be checked against the drawer's word and then broadcasted back to 
                        every player in the room.</p>
                    
                    <p><b><span>Play the Game! </span><a href="https://pictionary-n42s.onrender.com/">Draw With Friends! Game</a></b></p>
                </section>
            </div>
        </div>
    );
};

const ArcadeJam = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/arcadeJam1.png" alt="arcadeJam 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/arcadeJam2.png" alt="arcadeJam 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/arcadeJam3.png" alt="arcadeJam 3"/>
                </div>
        
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
      
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
            </div>
      
            <h3>Arcade-Jam</h3>
      
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, NodeJs, Canvas, Websockets (socket.io)</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed core mechanics and functionality of the game using Object-Oriented Programming, such as 
                        <ul>
                            <li>data communication between client and server (emitting and broadcasting data back and forth between server and all connected clients)</li>
                            <li>creating server rooms and connecting players in a game session with websockets (socket.io)</li>
                            <li>player movement</li>
                            <li>bullet firing</li>
                            <li>bullet shielding</li>
                            <li>simple physics system (collision detection)</li>
                        </ul>
                        - Designed style/look and feel of the game <br/>
                        - Designed UI elements and game menus </p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>

                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browser</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Inspired by air-hockey, Arcade-Jam is a four player, team-based, sports-like shooting game. 
                        With two players on the red team and two players on the blue team, players must shoot projectiles past the opposing team's side to get a point
                        However, players may block incoming projectiles from reaching the "goal" (sides of screen). 
                        The first team to get 3 points is declared the winning team. Arcade-Jam offers very fast-paced and chaotic gameplay. <br/><br/>
                        By using websockets (socket.io), Arcade-Jam is able to connect users (players) from different browsers together in game sessions (server rooms). 
                        There can be multiple game rooms at once, so 4 players connected are placed in one room and the next 4 are placed in another room, and so on.</p>
                        
                    <p><b><span>Play the Game! </span><a href="https://arcade-jam2.onrender.com/">Arcade-Jam Game</a></b></p>
                </section>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/newport1.png" alt="New Portfolio"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/oldport1.png" alt="Old Portfolio"/>
                </div>
        
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
      
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
            </div>
      
            <h3>Portfolio Websites</h3>
    
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>HTML5, CSS3, JavaScript, Jquery, NodeJs, ExpressJS, ReactJS</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed core functionality of portfolio websites <br/>
                        - Designed style/look and feel of portfolio websites <br/>
                        - Designed website layout</p>
                    <h4>Duration:</h4>
                    <p>Less than 2 months</p>
                </section>
      
                <section className="right">
                    <h4>Platform:</h4>
                    <p>Desktop Browser</p>
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> For my first portfolio website (second slide), I developed a very simple website using HTML5, CSS3 and JavaScript. 
                        I used fancybox to help showcase my featured projects. In terms of design, I envisioned a <i>Marvel's Iron Man</i> theme; 
                        I wanted to create a futuristic sci-fi UI for users while they navigate through my portfolio site. <br/><br/>
                        For my second portfolio website, my focus was to make a more modernized and clean portfolio site. 
                        In terms of development, this site is powered by HTML5, CSS3 & Flexbox, JavaScript, Jquery, NodeJs, ExpressJS and ReactJS. 
                        For the design, I wanted the look and feel of my new portfolio site to be crisp, clear, and easier on the eyes. 
                        My old portfolio site (Iron Man theme) felt very dark and a bit overwhelming as there was a lot going on in each page. 
                        Instead, with my new portfolio, information and content being presented is less compact and cluttered.
                        I utilized negative space much better, offering more breathing room.</p>
                </section>
            </div>
        </div>
    );
};

const Cookie = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <video controls><source src="assets/images/cookie.mp4" type="video/mp4"/></video>
                </div>
                <div className="slides fade">
                    <video controls><source src="assets/images/donuts.mp4" type="video/mp4"/></video>
                </div>

                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>

            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
            </div>

            <h3>Cookie & Donuts</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools Used:</h4>
                    <p>Blender</p>
                    <h4>Role:</h4>
                    <p> - 3D modelling <br/> 
                        - Texturing and Shading <br/>
                        - Compositing (Post processing) <br/>
                        - Lighting <br/>
                        - Animation <br/>
                        - Rendering</p>
                    <h4>Duration:</h4>
                    <p>Less than 2 weeks</p>
                </section>

                <section className="right">
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> After following Blender Guru's Donut Tutorial series on Youtube, I challeneged myself to apply the knowledge and skills
                        I learned to create a cookie in Blender. I modeled and sculpted the shape of the cookie and the chocolate chips seperately. 
                        Then by using geometry nodes, I was able to randomize the placement of the chocolate chips onto the cookie. By using some random
                        noise and height maps (normals), I was also able to make the cookie more realistic by adding in detailed cracks and bumps in the cookie dough. 
                        Finally, with some texturing, shading, animations, lighting and compositing (post processing), I successfully rendered out a short video displaying
                        my grandiose cookie.
                    </p>
                </section>
            </div>
        </div>
    );
};

const DevilFruit = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <video controls><source src="assets/images/devilfruit1.mp4" type="video/mp4"/></video>
                </div>
                <div className="slides fade">
                    <video controls><source src="assets/images/devilfruit2.mp4" type="video/mp4"/></video>
                </div>

                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>

            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
            </div>

            <h3>"One Piece" Devil Fruit</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools Used:</h4>
                    <p>Blender</p>
                    <h4>Role:</h4>
                    <p> - 3D modelling <br/>
                        - Texturing and Shading <br/>
                        - Compositing (Post processing) <br/>
                        - Lighting <br/>
                        - Animation <br/>
                        - Rendering</p>
                    <h4>Duration:</h4>
                    <p>Less than 2 weeks</p>
                </section>

                <section className="right">
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Inspired by <i>One Piece</i>'s gomu gomu devil fruit, I created two variations of the devil fruit. Using primitives
                        and bezier curves, I first modeled the shape of devil fruit. After some simple texturing and shading, I found myself investing
                        most of my time into lighting and compositing (post processing) to really make my devil fruit pop and shine. Finally, with some simple
                        animations, I rendered out a short video showcasing my irresistible devil fruits. <br/><br/>
                        P.S. - I never finished watching <i>One Piece</i> and probably never will because it is too long - <i>Ain't nobody got time fo' dat!</i> :)
                    </p>
                </section>
            </div>
        </div>
    );
};

const ChessEnvironment = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <video controls><source src="assets/images/chess_environment.mp4" type="video/mp4"/></video>
                </div>

                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>

            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
            </div>

            <h3>Chess Environment</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools Used:</h4>
                    <p>Blender</p>
                    <h4>Role:</h4>
                    <p> - 3D modelling <br/>
                        - Texturing and Shading <br/>
                        - Compositing (Post processing) <br/>
                        - Lightning <br/>
                        - Animation <br/>
                        - Rendering</p>
                    <h4>Duration:</h4>
                    <p>Less than 3 weeks</p>
                </section>

                <section className="right">
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> For this project, I decided to revisit my first 3D modeling assignment, which was to make a chess piece. 
                        Since every chess piece is unique, I spent most of my time modelling each chess piece. After doing so, I applied a metalic, chrome-like material to the 
                        chess set. Finally, after reusing some old assets I modeled and borrowed assets as well, I put together a simple aesthetic environment to showcase my chess set.
                    </p>
                </section>
            </div>
        </div>
    );
};

const DynamicDash = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/dynamicDash1.png" alt="dynamic dash 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/dynamicDash2.png" alt="dynamic dash 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/dynamicDash3.png" alt="dynamic dash 3"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/dynamicDash4.png" alt="dynamic dash 4"/>
                </div>
          
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
        
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
            </div>

            <h3>Dynamic Dash Game</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>Visual Studio, C#, Unity</p>
                    <h4>Role:</h4>
                    <p>Programmer & Level Designer</p>
                    <p> - Programmed & implemented some core mechanics of the game using Object-Oriented Programming, 
                          such as Power-Up abilities, in C# <br/>
                        - Wrote C# scripts to handle the interactions between different power-up abilities and how they affect the players <br/>
                        - Designed GUI/UI elements and game menus in Unity <br/>
                        - Designed layout of game levels in Unity editor </p>
                    <h4>Duration</h4>
                    <p>5 weeks</p>
                </section>

                <section className="right">
                    <h4>Team size:</h4>
                    <p>5</p>
                    <h4>Overview:</h4>
                    <p> Influenced by Steam's <i>SpeedRunners</i> game, Dynamic Dash is a two player, 1-versus-1 2D side-scrolling game. 
                        Dynamic Dash is a split-screen racing game in which both player 1 (red) and player 2 (blue) compete against each other to reach the finish line first. 
                        As the players traverse through each level while dodging obstacles, both players can collect coins, which can be spent to use power-up abilities to give themselves a slight boost, a shield, or interfere with the other player by slowing them down. <br/><br/>
                        My main role for this project was designing and developing the power-up abilities and handling the logic behind how they interact with each other and the players.
                        I was also responsible for designing the levels/courses of the game, as well as designing the GUI and UI menus for the game.</p>
                </section>
            </div>
        </div>
    );
};

const BunkR = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/bunkR1.png" alt="BunkR 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/bunkR2.png" alt="BunkR 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/bunkR3.png" alt="BunkR 3"/>
                </div>
          
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
        
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
            </div>
        
            <h3>BunkR: The Game</h3>
        
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>Visual Studio, C#, Photoshop</p>
                    <h4>Role:</h4>
                    <p>Programmer, Designer & Animator</p>
                    <p> - Programmed some core mechanics/functionality of the game with Object-Oriented Programming, such as 
                        <ul>
                            <li>basic player & enemy movement</li>
                            <li>bullet firing</li>
                            <li>simple physics system (collision-detection)</li>
                            <li>bounding boxes</li>
                        </ul>
                        - Programmed C# scripts for different types of weapons and health kit spawns <br/>
                        - Assisted with implementation of the bomb/nuke logic in game manager script<br/>
                        - Designed and adjusted character sprites <br/>
                        - Designed GUI elements and UI game menus </p>
                    <h4>Duration</h4>
                    <p>Less than 5 weeks</p>
                </section>

                <section className="right">
                    <h4>Platform:</h4>
                    <p>Monogame, Desktop</p>
                    <h4>Team size:</h4>
                    <p>3</p>
                    <h4>Overview:</h4>
                    <p> BunkR is a simple 2D shoot-em up platformer, arcade game. 
                        The player must survive in a post-apocalyptic city environment against waves of zombies. 
                        The player may pick up various weapons and health kits that spawn in random areas on the screen. 
                        There are also platforms that the player may jump onto; however, they will lose health the longer they remain on the platforms. 
                        Additionally, a nuke/bomb will occasionally drop into the level that will clear all zombies, including the player. 
                        In order to survive against the nuke, there will be a safe spot/bunker that activates and the player must get there before. <br/><br/>
                        I assisted my team in developing the core mechanics and physics of the game, including C# scripts for player movement, bullet firing, collision-detection, different weapon types and health kits. 
                        Using Photoshop, I was also able to make the player and zombie animations with spritesheets.</p>
                </section>
            </div>
      </div>
    );
};

const DefendSina = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/defendSina1.png" alt="Defend Sina 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/defendSina2.png" alt="Defend Sina 2"/>
                </div>
                <div className="slides fade">
                    <img src="/assets/images/defendSina3.png" alt="Defend Sina 3"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/defendSina4.png" alt="Defend Sina 4"/>
                </div>
          
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
        
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
            </div>
        
            <h3>Defend Sina Game</h3>
        
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>Swift, Xcode, Photoshop, Audacity</p>
                    <h4>Role:</h4>
                    <p>Programmer & Designer</p>
                    <p> - Programmed core mechanics/functionality of the game, such as basic player shooting, in Xcode <br/>
                        - Assisted in scripting the player, enemy, power-up abilities and game manager classes with Object-Oriented Programming <br/>
                        - Designed emitter effects for power-up abilities <br/>
                        - Designed GUI elements and UI for game menus <br/>
                        - Designed the style/look and feel of the game <br/>
                        - Lead sound designer (Sound Effects/Foley Art, Background Music)</p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>

                <section className="right">
                    <h4>Platform:</h4>
                    <p>iPad (iOS)</p>
                    <h4>Team size:</h4>
                    <p>2</p>
                    <h4>Overview:</h4>
                    <p> Defend Sina is a top-down, tower defense game. Heavily influenced by the <i>Attack on Titan</i> anime, 
                        the game pits the player against endless hordes of monsters. The player must defend Wall Sina from 
                        collapsing by preventing monsters from reaching the wall. The player can fire crossbow shots and pick up 
                        power-up abilities, which occasionally spawn randomly on the battlefield. Elemental (magic) abilities are also 
                        available to the player to use to help them fend off the monster hordes. However, after using one, 
                        it will go on cooldown until it is available again. <br/><br/>
                        My main role for this project was to build the sounds, visual effects, 
                        and style of the game to create an immersive experience. I also assisted my team in implementation of the player shooting mechanic.</p>
                </section>
            </div>
      </div>
    );
};
  
const GolfIt = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/golfit1.png" alt="Golf It? 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/golfit2.png" alt="Golf It? 2"/>
                </div>
                <div className="slides fade">
                    <img src="/assets/images/golfit3.png" alt="Golf It? 3"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/golfit4.png" alt="Golf It? 4"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/golfit5.png" alt="Golf It? 5"/>
                </div>
                <div className="slides fade">
                    <img src="/assets/images/golfit6.png" alt="Golf It? 6"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/golfit7.png" alt="Golf It? 7"/>
                </div>
          
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
        
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
                <span className="dots" data-i="4"></span>
                <span className="dots" data-i="5"></span>
                <span className="dots" data-i="6"></span>
            </div>

            <h3>Golf It? Game</h3>
        
            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>Swift, Xcode, Photoshop, Audacity</p>
                    <h4>Role:</h4>
                    <p>Programmer, Designer & Level Designer</p>
                    <p> - Programmed core mechanics/functionality of the game, such as the physics system (golf ball interacting with different obstacles), in Xcode <br/>
                        - Assisted in scripting the game manager class with Object-Oriented Programming <br/>
                        - Designed 9 level layouts of a 18 hole levels Golf game <br/>
                        - Designed GUI elements and UI for game menus <br/>
                        - Lead sound designer (Sound Effects/Foley Art, Background Music)</p>
                    <h4>Duration</h4>
                    <p>Less than 6 weeks</p>
                </section>

                <section className="right">
                    <h4>Platform:</h4>
                    <p>iPad (iOS)</p>
                    <h4>Team size:</h4>
                    <p>2</p>
                    <h4>Overview:</h4>
                    <p> Golf It? is a single-player, top-down, casual game. Heavily influenced by Steam's <i>Golf It!</i> game, 
                        Golf It? is a simple mini-golf game that showcases the use of the simple physics collision system in SpriteKit. 
                        As the player plays through a complete 18-hole game of mini-golf, they will face challenging levels with various 
                        obstacles laid throughout. At the end of each hole, the game will record the number of strokes the player took 
                        before getting the ball in the hole. At the end of the game, the game will display the player's total score. <br/><br/>
                        My main role for this project was designing the levels so they are both challenging but also not frustrating for the player; 
                        sound design to immerse the player in an interactive experience. I also assisted my team in developing some of the game's mechanics,
                        including certain obstacles and how they interact with the golf ball, i.e - dirt patches, water ponds, moving and rotating obstacles.</p>
                </section>
            </div>
      </div>
    );
};

const Models = () => {
    return(
        <div className="reactComponent">
            <div id="slider-container">
                <div className="slides fade">
                    <img src="/assets/images/usp1.png" alt="USP 1"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/usp2.png" alt="USP 2"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/usp3.png" alt="USP 3"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/ironman.png" alt="Iron Man helmet"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/starwarsls.png" alt="star wars"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/halosniper.png" alt="halo sniper"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/saoasunarapier.png" alt="SAO: Asuna's rapier"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/aotsword.png" alt="Attack on Titan Sword"/>
                </div>
                <div className="slides fade">
                    <img id="img" src="/assets/images/kunai.png" alt="kunai"/>
                </div>
          
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
            <br/>
        
            <div id="dotsDiv">
                <span className="dots" data-i="0"></span>
                <span className="dots" data-i="1"></span>
                <span className="dots" data-i="2"></span>
                <span className="dots" data-i="3"></span>
                <span className="dots" data-i="4"></span>
                <span className="dots" data-i="5"></span>
                <span className="dots" data-i="6"></span>
                <span className="dots" data-i="7"></span>
                <span className="dots" data-i="8"></span>
            </div>

            <h3>3D models</h3>

            <div className="description">
                <section className="left">
                    <h4>Tools used:</h4>
                    <p>Autodesk Maya, Photoshop, Unity</p>
                    <h4>Role:</h4>
                    <p> - 3D Modelling <br/>
                        - UV unwrapping <br/>
                        - Texturing <br/>
                        - Animations</p>
                    <h4>Duration</h4>
                    <p>Less than 2 weeks each</p>
                </section>

                <section className="right">
                    <h4>Team size:</h4>
                    <p>1</p>
                    <h4>Overview:</h4>
                    <p> Most of these featured 3D models were directly inspired from movies (<i>Marvel's Iron Man, Star Wars</i>), 
                        anime shows (<i>Attack on Titan, Naruto, Sword Art Online</i>), and videogames (<i>Halo, Counter-Strike</i>).</p>
                    <p> The CS:GO USP-S pistol began in Autodesk Maya with 3D modelling. Then, custom textures were created 
                        with Photoshop and UV unwrapped in Maya. After applying the textures onto the model, I utilized joints and joint points in Maya
                        to animate some parts of the model; animation includes pulling the hammer and trigger 
                        back, as well as toggling the safety switch on and off. Finally, the model, texture, and animation was imported into Unity.</p>
                </section>
            </div>
      </div>
    );
};

const init = () => {
    navOnHover();

    let URL = localStorage['url'];

    URL = JSON.parse(URL);
    //console.log(URL);

    switch(URL){
        case "/audioviz":
            ReactDOM.render(<AudioViz/>, document.querySelector("#projectContent"));
            break;
        case "/kingOfTheBall":
            ReactDOM.render(<KingOfTheBall/>, document.querySelector("#projectContent"));
            break;
        case "/tweeter":
            ReactDOM.render(<Tweeter/>, document.querySelector("#projectContent"));
            break;
        case "/pictionary":
            ReactDOM.render(<Pictionary/>, document.querySelector("#projectContent"));
            break;
        case "/arcadeJam":
            ReactDOM.render(<ArcadeJam/>, document.querySelector("#projectContent"));
            break;
        case "/portfolio":
            ReactDOM.render(<Portfolio/>, document.querySelector("#projectContent"));
            break;
        case "/cookie":
            ReactDOM.render(<Cookie/>, document.querySelector("#projectContent"));
            break;
        case "/devilfruit":
            ReactDOM.render(<DevilFruit/>, document.querySelector("#projectContent"));
            break;
        case "/chessEnvironment":
            ReactDOM.render(<ChessEnvironment/>, document.querySelector("#projectContent"));
            break;
        case "/dynamicDash":
            ReactDOM.render(<DynamicDash/>, document.querySelector("#projectContent"));
            break;
        case "/BunkR":
            ReactDOM.render(<BunkR/>, document.querySelector("#projectContent"));
            break;
        case "/defendSina":
            ReactDOM.render(<DefendSina/>, document.querySelector("#projectContent"));
            break;
        case "/golfIt":
            ReactDOM.render(<GolfIt/>, document.querySelector("#projectContent"));
            break;
        case "/3Dmodels":
            ReactDOM.render(<Models/>, document.querySelector("#projectContent"));
            break;
    }

    imageSlider();
};

window.onload = init;