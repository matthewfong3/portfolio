// Image Slider Reference:
// https://www.youtube.com/watch?v=nJWq74MHplc&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z&index=4
// https://www.youtube.com/watch?v=wQcR25IyPBQ&index=5&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z
const imgSlider = () => {
  let slideIndex = {
    val: 0
  };
  
  showImg(slideIndex);
  
  let nextBtn = document.getElementsByClassName('next');
  if(nextBtn){
    nextBtn[0].addEventListener('click', () => incrementIndex(slideIndex));
  }
  
  let prevBtn = document.getElementsByClassName('prev');
  if(prevBtn){
    prevBtn[0].addEventListener('click', () => decrementIndex(slideIndex));
  }
  
  let dots = document.getElementsByClassName('dots');
  if(dots){
    for(let i = 0; i < dots.length; i++){
      dots[i].addEventListener('click', () => currentSlide(slideIndex, dots[i].getAttribute('data-i')));
    }
  }
};

const incrementIndex = (sI) => {
  sI.val++;
  showImg(sI);
};

const decrementIndex = (sI) => {
  sI.val--;
  showImg(sI);
};

const currentSlide = (sI, i) => {
  sI.val = i;
  showImg(sI);
};

const showImg = (sI) => {
  let slide = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dots');

  if(sI.val >= slide.length) sI.val = 0;
  if(sI.val < 0) sI.val = slide.length - 1;
  
  for(let i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }

  slide[sI.val].style.display = "block";
  
  if(dots){
    for(let i = 0; i < dots.length; i++){
      dots[i].classList.remove('selected');
    }
    dots[sI.val].classList.add('selected');
  }
};

// Game Projects
const BunkR = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/bunkR1.png" alt="BunkR 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bunkR2.png" alt="BunkR 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bunkR3.png" alt="BunkR 3" width="100%" height="100%"/>
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
      <section className="left">
        <h4>Platform:</h4>
        <p>Monogame</p>
        <h4>Tools used:</h4>
        <p>Visual Studios & Photoshop</p>
        <h4>Role:</h4>
        <p>Programmer, Designer & Animator</p>
        <p>
          - Programmed some core mechanics/functionality of the game, such as basic player & enemy movement, shooting, collision <br></br>
          - Programmed and implemented different types of weapons and health kit spawns <br></br>
          - Assisted with implementation of bomb/nuke logic <br></br>
          - Designed and tweaked character sprites <br></br>
          - Designed GUI/UI elements and game menus
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>3</p>
        <h4>Overview:</h4>
        <p>BunkR is a simple 2D shoot-em up platformer, arcade game. The player must survive in a post-apocalyptic city environment against hordes of zombies. The player may pick up various weapons and health kits that occasionally spawn in random areas on the screen. There are also platforms that the player may jump onto; however, they will lose health the longer they remain on the platforms. Additionally, a nuke/bomb will occasionally drop into the level that will clear all zombies and the player. In order to survive against this nuke/bomb, there will be a safe spot/bunker that activates and the player must get there beforehand.

        My team and I coded the core mechanics and physics of the game. My responsibility was also to make the player and zombie animations by using spritesheets in Photoshop.</p>
      </section>
    </div>
  );
};

const MarioKart = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/mario1.png" alt="Mario Kart 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/mario2.png" alt="Mario Kart 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/mario3.png" alt="Mario Kart 3" width="100%" height="100%"/>
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
      
      <h3>Mario Kart</h3>
      <section className="left">
        <h4>Tools used:</h4>
        <p>Visual Studios, Maya & Unity</p>
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Role:</h4>
        <p>Programmer</p>
        <p>
          - Programmed & implemented the logic behind autonomous behavior (simple path finding and queueing) for Mario characters <br></br>
          - Designed a simple racetrack level for Mario characters to showcase simple autonomous behavior
        </p>
      </section>
      <section className="right">
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>Mario Kart is a simple 3D simulation developed to showcase my implementation of autonomous agents. My main objective was to program game objects to implement steering behaviors, specifically queuing and simple path following. I then grabbed pre-modelled 3D Mario game objects/characters online and had them implement these autonomous behaviors. Autodesk Maya was used to resize the models so that they were proportional to the rest of the Unity world. Finally, models, textures, and scripts were imported into and implemented in Unity.</p>
      </section>
    </div>
  );
};

const Models = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/usp1.png" alt="USP 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/usp2.png" alt="USP 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/usp3.png" alt="USP 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/creepy1.png" alt="creepy 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/creepy2.png" alt="creepy 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/creepy3.png" alt="creepy 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/ironman.png" alt="Iron Man helmet" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/starwarsls.png" alt="star wars" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/halosniper.png" alt="halo sniper" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/m9bayo.png" alt="m9bayonet knife" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/aotsword.png" alt="Attack on Titan Sword" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/saoasunarapier.png" alt="SAO: Asuna's rapier" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/kunai.png" alt="kunai" width="100%" height="100%"/>
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
        <span className="dots" data-i="9"></span>
        <span className="dots" data-i="10"></span>
        <span className="dots" data-i="11"></span>
        <span className="dots" data-i="12"></span>
      </div>
      <h3>3D models</h3>
      <section className="left">
        <h4>Tools used:</h4>
        <p>Autodesk Maya, Photoshop & Unity</p>
        <h4>Duration</h4>
        <p>Less than 6 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Role:</h4>
        <p>3D Modelling, UV unwrapping, Texturing, Animating</p>
      </section>
      <section className="right">
        <h4>Overview:</h4>
        <p>Most of these featured 3D models were directly inspired from movies (Marvel's Iron Man, Star Wars), anime shows (Attack on Titan, Naruto, Sword Art Online), and videogames (Halo, Counter-Strike).</p>
        <p>The CS:GO USP-S pistol began in Autodesk Maya with 3D modelling. Then, custom textures were created with Photoshop and UV unwrapped in Maya. After applying the textures onto the model, animation was implemented by using joints and joint points in Maya. Animation includes pulling the hammer, trigger back and toggling the safety switch on and off. Finally, the model, texture, and animation was imported into Unity.</p>
      </section>
    </div>
  );
};

const FairlyOddParents = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/interface1.png" alt="Interface 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/interface2.png" alt="Interface 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/interface3.png" alt="Interface 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/interface4.png" alt="Interface 4" width="100%" height="100%"/>
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
      <h3>Fairly Oddparents: UI prototype</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Mobile (iOS)</p>
        <h4>Tools used:</h4>
        <p>Photoshop</p>
        <h4>Role:</h4>
        <p>Designer</p>
        <p>
          - Designed the GUI/UI elements (icons, buttons, pop-up alerts) <br></br>
          - Designed in-game HUD elements <br></br>
          - Designed game menus
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>The objective of this project was to build a prototype for an interface for a mobile game app. Inspired by city-building games, specifically The Simpsons: Tapped Out, I decided to build an interface prototype for a Fairly OddParents themed city-building game for mobile. Using in-game screenshots from The Simpsons: Tapped Out as background place-holders, I focused on the overall in-game interface of the app.</p>
      </section>
    </div>
  );
};

const BombsAway = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/bombs1.png" alt="bombs away 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bombs2.png" alt="bombs away 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bombs3.png" alt="bombs away 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bombs4.png" alt="bombs away 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bombs5.png" alt="bombs away 5" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/bombs6.png" alt="bombs away 6" width="100%" height="100%"/>
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
      </div>
      <h3>Bombs Away Prototype</h3>
      <section className="left">
        <h4>Tools used:</h4>
        <p>Unity</p>
        <h4>Duration</h4>
        <p>5 weeks</p>
        <h4>Role:</h4>
        <p>Programmer & Level Designer</p>
        <p>
          - Programmed & implemented in-game camera and context-menu <br></br>
          - Designed GUI/UI elements and game menus <br></br>
          - Designed layout of game levels
        </p>
      </section>
      <section className="right">
        <h4>Team size:</h4>
        <p>5</p>
        <h4>Overview:</h4>
        <p>Bombs Away is a single-player, side-scrolling, puzzle game. The player controls a defective bomb and must solve puzzles to reach the end of each leavel. The player may also control NPC bomb characters by calling them to him and command/send them to a location to either stand on a trigger or explode to clear obstacles in the way.</p>
      </section>
    </div>
  );
};

const DynamicDash = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/dash1.png" alt="dynamic dash 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/dash2.png" alt="dynamic dash 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/dash3.png" alt="dynamic dash 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/dash4.png" alt="dynamic dash 4" width="100%" height="100%"/>
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
      <h3>Dynamic Dash Prototype</h3>
      <section className="left">
        <h4>Tools used:</h4>
        <p>Unity</p>
        <h4>Duration</h4>
        <p>5 weeks</p>
        <h4>Role:</h4>
        <p>Programmer & Level Designer</p>
        <p>
          - Programmed & implemented some core mechanics of the game, such as Power-Up abilities <br></br>
          - Designed GUI/UI elements and game menus <br></br>
          - Designed layout of game levels
        </p>
      </section>
      <section className="right">
        <h4>Team size:</h4>
        <p>5</p>
        <h4>Overview:</h4>
        <p>Dynamic Dash is a two player, 1-versus-1 2D side-scrolling game. Influenced by SpeedRunners, Dynamic Dash is a split-screen racing game in which both player 1 (red) and player 2 (blue) compete against each other to reach the stage's finish line first. As the players traverse through each level and dodge obstacles, both players can collect coins, of which can be spent to use power-ups to interfere with the other player, effectively slowing them down, or boosting or shielding themselves.</p>
      </section>
    </div>
  );
};

const UnfinishedBus = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/unbiz1.png" alt="Unfinished Business 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/unbiz2.png" alt="Unfinished Business 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/unbiz3.png" alt="Unfinished Business 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/unbiz4.png" alt="Unfinished Business 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/unbiz5.png" alt="Unfinished Business 5" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/unbiz6.png" alt="Unfinished Business 6" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/unbiz7.png" alt="Unfinished Business 7" width="100%" height="100%"/>
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
      <h3>Unfinished Business</h3>
      <section className="left">
        <h4>Tools used:</h4>
        <p>Unity & Autodesk Maya</p>
        <h4>Duration</h4>
        <p>15 weeks</p>
        <h4>Role:</h4>
        <p>3D Modeler, Programmer, Designer</p>
        <p>
          - Modeled all in-game models, except for Ghost model <br></br>
          - Programmed and implemented in-game camera logic <br></br>
          - Designed GUI/UI elements and game menus
        </p>
      </section>
      <section className="right">
        <h4>Team size:</h4>
        <p>5</p>
        <h4>Overview:</h4>
        <p>Unfinished Business is a single-player, story-driven, puzzle-solving, mystery, 3D prototype game. The player plays as a "spirit-medium" detective who can communicate with ghosts. The player's objective is to solve the mysteries as to why ghosts are trapped in purgatory by hepling them bring closure to any unfinished business that they may have so their souls can move on in peace.</p>
      </section>
    </div>
  );
};

const DefendSina = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/sina1.png" alt="Defend Sina 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/sina2.png" alt="Defend Sina 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/sina3.png" alt="Defend Sina 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/sina4.png" alt="Defend Sina 4" width="100%" height="100%"/>
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
      <h3>Defend Sina</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>iPad (iOS)</p>
        <h4>Tools used:</h4>
        <p>Xcode, Photoshop & Audacity</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core mechanics/functionality of the game, such as basic player shooting <br></br>
          - Designed emitter effects for power-up abilities <br></br>
          - Designed GUI/UI elements and game menus <br></br>
          - Lead sound designer (Sound Effects/Foley Art, Background Music)
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>2</p>
        <h4>Overview:</h4>
        <p>Defend Sina is a top-down, tower defense game. Heavily influenced by the Attack on Titan anime, the game pits the player against endless hordes of monsters. The player must defend Wall Sina from collapsing by preventing monsters from reaching the wall. The player can fire crossbow shots and pick up power-ups, which occasionally spawn randomly on the battlefield. Magic abilities (elemental) are also available to the player to use to help them fend off the monster hordes. However, after using one, it will be on a cooldown timer until it is available again.</p>
      </section>
    </div>
  );
};

const GolfIt = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/golf1.png" alt="Golf It? 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/golf2.png" alt="Golf It? 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/golf3.png" alt="Golf It? 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/golf4.png" alt="Golf It? 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/golf5.png" alt="Golf It? 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/golf6.png" alt="Golf It? 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/golf7.png" alt="Golf It? 4" width="100%" height="100%"/>
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
      <h3>Golf It?</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>iPad (iOS)</p>
        <h4>Tools used:</h4>
        <p>Xcode, Photoshop & Audacity</p>
        <h4>Role:</h4>
        <p>Programmer & Designer, Level Designer</p>
        <p>
          - Programmed core mechanics/functionality of the game <br></br>
          - Designed 9 level layouts of a 18 hole levels Golf game <br></br>
          - Designed GUI/UI elements and game menus <br></br>
          - Lead sound designer (Sound Effects/Foley Art, Background Music)
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>2</p>
        <h4>Overview:</h4>
        <p>Golf It? is a single-player, top-down, casual game. Heavily influenced by Golf It!, available on Steam, Golf It? is a simple mini-golf prototype game that showcases the use of the simple physics collision system in SpriteKit. As the player plays through a complete 18-hole game of mini-golf, they will face challenging levels with various obstacles laid through out. At the end of each hole, the game will record the number of strokes the player took before getting the ball in the hole. At the end of the game, the game will display the player's total score for that game run.</p>
      </section>
    </div>
  );
};

// Web Projects
const TutorialWebsite = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/website1.png" alt="Website 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/website2.png" alt="Website 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/website3.png" alt="Website 3" width="100%" height="100%"/>
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
      <h3>Ice Cream Bread Recipe</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browsers & Mobile Browsers</p>
        <h4>Tools used:</h4>
        <p>HTML5 & CSS3</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p> 
          - Programmed & implemented website functionality <br></br>
          - Designed website layout <br></br>
          - Designed style/look and feel of website
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>Using only HTML5 and CSS3 mark up language, I put together a tutorial website that walks others through an Ice Cream Bread Recipe. The website is both responsive to desktop browsers and mobile browsers as content scales accordingly.</p>
        
      </section>
    </div>
  );
  /*
  <p>
    <span>Link: </span>
    <a href="https://people.rit.edu/mxf9125/230/project1/index.html">Ice Cream Bread Website</a>
  </p>
  */
};

const AudViz = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/audviz1.png" alt="Audio Vizualizer 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/audviz2.png" alt="Audio Vizualizer 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/audviz3.png" alt="Audio Vizualizer 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <video controls>
            <source src="/assets/images/audvizSample2.mp4" type="video/mp4"/>
          </video>
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
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browsers</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, & Canvas</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed & implemented core functionality of audio visualizer <br></br>
          - Designed visual experience of the app <br></br>
          - Designed layout of the app
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>For this project, I had the chance to exlore and experiment with JavaScript and Canvas by developing and designing an audio visualizer. Heavily inspired by audio visualizers from youtube videos, I created an interactive experience and included a control panel for users to tweak/toggle different settings.</p>
        
      </section>
    </div>
    /*
    <p>
      <span>Link: </span>
      <a href="https://people.rit.edu/mxf9125/330/projects/audioViz/audioVizProject.html">Audio Visualizer</a>
    </p>
    */
  );
};

const KingOfTheBall = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/king1.png" alt="King of the Ball 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/king2.png" alt="King of the Ball 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/king3.png" alt="King of the Ball 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/king4.png" alt="King of the Ball 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/king5.png" alt="King of the Ball 5" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/king6.png" alt="King of the Ball 6" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/king7.png" alt="King of the Ball 7" width="100%" height="100%"/>
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
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript & Canvas</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed game physics, core mechanics, functionality of the game <br></br>
          - Designed style/look and feel of the game <br></br>
          - Designed level layouts of the game <br></br>
          - Designed game menus of the game
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>King of the Ball is 1-versus-1 arcade, party game, heavily inspired by PlayStation's BaraBariBall. The game mode is based on Halo's OddBall game mode, in which either players try to hold onto the ball for as long as they can while being in their respective color regions to gain points. The player with the most points after the timer expires wins.</p>
        
      </section>
    </div>
    /*
    <p>
      <span>Link: </span>
      <a href="https://people.rit.edu/mxf9125/330/projects/game/game.html">King of the Ball Game</a>
    </p>
    */
  );
};

const ComicsSpot = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/comicsSpot1.png" alt="Comics Spot 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/comicsSpot2.png" alt="Comics Spot 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/comicsSpot3.png" alt="Comics Spot 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/comicsSpot4.png" alt="Comics Spot 4" width="100%" height="100%"/>
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
      <h3>Comics Spot</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, & JavaScript</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core functionality of the app, connecting two external API's with client browser HTTP requests <br></br>
          - Designed app layout and style/look and feel of the app
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>Comics Spot is a comic hub available for users to search up specific Marvel characters and look up related comic books, series, events and general information about the character. Comics Spot taps into Marvel's API and ComicVine's API to look up and fetch the appropriate information requested.</p>
        
      </section>
    </div>
  );
  /*
  <p>
    <span>Link: </span>
    <a href="https://people.rit.edu/mxf9125/330/projects/comicsSpot/">Comics Spot App</a>
  </p>
  */
};

const MazahS = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/mazahS1.png" alt="mazahS 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/mazahS2.png" alt="mazahS 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/mazahS3.png" alt="mazahS 3" width="100%" height="100%"/>
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
      <h3>mazahS (reverse Shazam)</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core functionality of the app, connecting musixmatch's API with client browser requests <br></br>
          - Designed style/look and feel of the app <br></br>
          - Designed app layout
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>mazahS is a music app inspired by the well-known app called Shazam. However, rather than listening to the lyrics of a song to retrieve the song's information, mazahS does the opposite! mazahS allows the user to add/remove songs to their local playlist. Then, the user may look up the lyrics to a song in their playlist. In other words, reverse Shazam (wow, so creative). When searching for a song's lyrics, mazahS taps into musixmatch's API, which will validate if the song exists and returns the lyrics to that song.</p>
        <p>
          <span>Link: </span>
          <a href="https://mazahs.herokuapp.com/">mazahS App</a>
        </p>
      </section>
    </div>
  );
};

const Tweeter = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/tweeter1.png" alt="tweeter 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/tweeter2.png" alt="tweeter 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/tweeter3.png" alt="tweeter 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img src="/assets/images/tweeter4.png" alt="tweeter 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/tweeter5.png" alt="tweeter 5" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/tweeter6.png" alt="tweeter 6" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/tweeter7.png" alt="tweeter 7" width="100%" height="100%"/>
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
      <h3>Tweeter</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs, React, MongoDB & Redis</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed & implemented core functionality of the app, such as sign-up/sign-in system, following/followers system, pushing to (tweeting) and pulling data from a database, tweeting with an attached image, etc. <br></br>
          - Implemented a dark/night mode toggle for users <br></br>
          - Designed layout and color theme of app <br></br>
          - Designed style/look and feel of the app
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 4 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>Tweeter is a social media Twitter-clone app. Tweeter was developed and designed to be as close to the Twitter app as possible, however it is missing various features as it is just a dummy-clone. Tweeter allows users to create accounts, follow other accounts, tweet messages and include images as well in their tweets. Users can view their tweets and tweets from other Tweeter accounts that they follow. Users may also edit/delete their own tweets if they wish. Additionally, users can reply to tweets as well. Account users can also change their password if desired and can toggle between a light-mode/dark-mode interface view.</p>
        <p>
          <span>Link: </span>
          <a href="https://tweeter-was-taken.herokuapp.com/">Tweeter App</a>
        </p>
      </section>
    </div>
  );
};

const Pictionary = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/pictionary1.png" alt="pictionary 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/pictionary2.png" alt="pictionary 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/pictionary3.png" alt="pictionary 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/pictionary4.png" alt="pictionary 4" width="100%" height="100%"/>
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
      <h3>Pictionary</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs, & Websockets (Socket.io)</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core functionality of the game, connecting client browsers in a 4 server room/ game session for a simple game of Pictionary<br></br>
          - Designed layout and style/look and feel of the game
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>By utilizing socket.io and NodeJs, this project focuses on implementing a simple pictionary game. The main focus was to connect users (players) on different computer machines and have them successfully join in a game room session. Multiple rooms are also supported, as the first four players to join will be put in one game room and the next four will be put in another game room.</p>
        <p>
          <span>Link: </span>
          <a href="https://pictionary-desu.herokuapp.com/">Pictionary App</a>
        </p>
      </section>
    </div>
  );
};

const ArcadeJam = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/arcadeJam1.png" alt="arcadeJam 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/arcadeJam2.png" alt="arcadeJam 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/arcadeJam3.png" alt="arcadeJam 3" width="100%" height="100%"/>
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
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs, & Websockets (Socket.io)</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core mechanics/functionality of the game, basic player movement, shooting, collision detection, player shield toggle, and player scoring <br></br>
          - Designed style/look and feel of the game <br></br>
          - Designed UI elements and game menus <br></br>
          - Designed layout of the game
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>Arcade-Jam is a four player, sports-like, top-down shooter. By utilizing socket.io, NodeJs, and implementing basic collision-detection, Arcade-Jam is a 2-versus-2 team game; two players on the red team and two players on the blue team. Players must shoot projectiles to the opposing team's side to get a point. However, players on the opposing team may block the projectile from reaching the "goal". The first team to get 3 points is declared the winning team. Arcade-Jam offers very fast-paced and chaotic gameplay. Furthermore, Arcade-Jam connects users (players) on different computer machines. It also supports multiple game session rooms; so 4 players connected are placed in one game room session and the next 4 are placed in another game session.</p>
        <p>
          <span>Link: </span>
          <a href="https://arcade-jam.herokuapp.com/">Arcade-Jam</a>
        </p>
      </section>
    </div>
  );
};

const DEO = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/deo1.png" alt="Dungeon Explorer Online 1" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/deo2.png" alt="Dungeon Explorer Online 2" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/deo3.png" alt="Dungeon Explorer Online 3" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/deo4.png" alt="Dungeon Explorer Online 4" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/deo5.png" alt="Dungeon Explorer Online 5" width="100%" height="100%"/>
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
      </div>
      <h3>Dungeon Explorers Online</h3>
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs, & Websockets (Socket.io)</p>
        <h4>Role:</h4>
        <p>Programmer, Designer & Sound Designer</p>
        <p>
          - Programmed and implemented the base skeleton of the game, connectivity (client browser and server connections) <br></br>
          - Programmed some core mechanics/functionality of the game, basic player movement and shooting <br></br>
          - Designed dungeon layout of the game <br></br>
          - Lead sound designer (Sound Effects/Foley Art, Background Music)
        </p>
      </section>
      <section className="right">
        <h4>Duration</h4>
        <p>Less than 2 months</p>
        <h4>Team size:</h4>
        <p>3</p>
        <h4>Overview:</h4>
        <p>Dungeon Explorers Online is a four player co-op, prototype game. By utilizing socket.io and NodeJs, one of the main focuses of this project was to implement a client-host. Since players are connecting into a game room session through a server, the purpose of a client-host was to make the server more lightweight in terms of functionality/responsiblities. When four players join into a session, a host-client is chosen and will execute most of the game's calculations. The game server also supports multiple game room sessions; the first four players will join one room, and the next four will join another game room. While in game, players work together to explore "dungeon" rooms. Each room consists of enemies and in order to advance/unlock further rooms, players must first clear the current room of all enemies.</p>
      </section>
    </div>
  );
};

const Portfolios = () => {
  return(
    <div className="reactComponent">
      <div id="slider-container">
        <div className="slides fade">
          <img src="/assets/images/newport1.png" alt="New Portfolio" width="100%" height="100%"/>
        </div>
        <div className="slides fade">
          <img id="img" src="/assets/images/oldport1.png" alt="Old Portfolio" width="100%" height="100%"/>
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
      <section className="left">
        <h4>Platform:</h4>
        <p>Desktop Browser</p>
        <h4>Tools used:</h4>
        <p>HTML5, CSS3, JavaScript, NodeJs & ReactJS</p>
        <h4>Duration</h4>
        <p>Less than 4 months</p>
        <h4>Role:</h4>
        <p>Programmer & Designer</p>
        <p>
          - Programmed core functionality of portfolio websites <br></br>
          - Designed style/look and feel of portfolio websites <br></br>
          - Designed website layout
        </p>
      </section>
      <section className="right">
        <h4>Team size:</h4>
        <p>1</p>
        <h4>Overview:</h4>
        <p>For my first portfolio website, I developed a very simple website by using HTML5, CSS3 and JavaScript. I also used fancybox to help showcase my projects. In terms of design, I wanted to implement a Marvel's Iron Man theme. Using Photoshop, I wanted to create a slick UI for viewers while they were navigating through my portfolio. For my second portfolio website, I focused on making a much more simple and clean portfolio website. In terms of development, I am using HTML5, CSS3, JavaScript, NodeJs and React. In terms of design, I wanted the look and feel of my new portfolio site to be more crisp and clear. My old portfolio (Iron Man theme) felt very dark and a bit overwhelming as there was a lot going on in each page. For my new portfolio, I wanted it to feel more bright and less compact in terms of content/information presented. It is more open in terms of space and offers a lot more breathing room.</p>
      </section>
    </div>
  );
};


const init = () => {
  // setup onHover events for icons in nav bar
  navOnHover();
  
  // set up dropdown menu for responsive view
  const dropdown = document.querySelector("#dropdown");
  const respMenu = document.querySelector("#responsiveMenu");
  if(dropdown && respMenu) {
    respMenu.style.display = "none";
    dropdown.addEventListener("click", () => toggleDropdownMenu(respMenu));
  }
  
  let URL = localStorage['url'];
  
  URL = JSON.parse(URL);
  console.dir(URL);
  
  switch(URL){
    case "/BunkRGame":
      ReactDOM.render(
        <BunkR/>, document.querySelector("#projectContent")
      );
      break;
    case "/MarioKart":
      ReactDOM.render(
        <MarioKart/>, document.querySelector("#projectContent")
      );
      break;
    case "/3Dmodels":
      ReactDOM.render(
        <Models/>, document.querySelector("#projectContent")
      );
      break;
    case "/interface":
      ReactDOM.render(
        <FairlyOddParents/>, document.querySelector("#projectContent")
      );
      break;
    case "/bombsAway":
      ReactDOM.render(
        <BombsAway/>, document.querySelector("#projectContent")
      );
      break;
    case "/dynamicDash":
      ReactDOM.render(
        <DynamicDash/>, document.querySelector("#projectContent")
      );
      break;
    case "/unfinishedBusiness":
      ReactDOM.render(
        <UnfinishedBus/>, document.querySelector("#projectContent")
      );
      break;
    case "/defendSina":
      ReactDOM.render(
        <DefendSina/>, document.querySelector("#projectContent")
      );
      break;
    case "/golfIt":
      ReactDOM.render(
        <GolfIt/>, document.querySelector("#projectContent")
      );
      break;
    case "/tutorialWebsite":
      ReactDOM.render(
        <TutorialWebsite/>, document.querySelector("#projectContent")
      );
      break;
    case "/audViz":
      ReactDOM.render(
        <AudViz/>, document.querySelector("#projectContent")
      );
      break;
    case "/kingOfTheBall":
      ReactDOM.render(
        <KingOfTheBall/>, document.querySelector("#projectContent")
      );
      break;
    case "/comicsSpot":
      ReactDOM.render(
        <ComicsSpot/>, document.querySelector("#projectContent")
      );
      break;
    case "/mazahS":
      ReactDOM.render(
        <MazahS/>, document.querySelector("#projectContent")
      );
      break;
    case "/tweeter":
      ReactDOM.render(
        <Tweeter/>, document.querySelector("#projectContent")
      );
      break;
    case "/pictionary":
      ReactDOM.render(
        <Pictionary/>, document.querySelector("#projectContent")
      );
      break;
    case "/arcadeJam":
      ReactDOM.render(
        <ArcadeJam/>, document.querySelector("#projectContent")
      );
      break;
    case "/DEO":
      ReactDOM.render(
        <DEO/>, document.querySelector("#projectContent")
      );
      break;
    case "/portfolios":
      ReactDOM.render(
        <Portfolios/>, document.querySelector("#projectContent")
      );
      break;
    default:
      break;
  }
  
  imgSlider();
};

window.onload = init;