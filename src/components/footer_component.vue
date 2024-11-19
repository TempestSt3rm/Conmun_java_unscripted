<template>
    <footer class="footer"> 
        <div class="footer-brand">
            <a class="footer-brand-container" href="https://www.conmun.org/" target="_blank">
                <img src="@/assets/conmun_logo.png" alt="ConMun Logo" />
            </a>
            <div class="footer-brand-text">
                Concordia Model United Nations 2025
            </div>
        </div>
        <div class="footer-text">
            <div class="footer-item">
                <a href="https://www.conmun.org/en/about-conmun" target="_blank" class="styless">About</a>
            </div>
            <div class="footer-item">
                <a href="https://www.conmun.org/en/registration" target="_blank" class="styless">Registration</a>
            </div>
            <div class="footer-item">
                <a href="https://www.conmun.org/en/contact-us" target="_blank" class="styless"> Contact Us</a>
            </div>
            <div class="follow">
                <div class="follow-text"> 
                    <a href="https://www.conmun.org/en/contact-us" target="_blank" class="styless"> Follow Us</a>
                </div>
                <div class="footer-social-container">
                    <a class="follow-image" href="https://www.instagram.com/concordiamodelun/" target="_blank">
                        <img src="@/assets/instagram.png" alt="ConMun Logo" />
                    </a>
                    <a class="follow-image" href="https://www.facebook.com/CONMUN" target="_blank">
                        <img src="@/assets/facebook.png" alt="ConMun Logo" />
                    </a>
                </div>
                <div class="footer-spacer"></div>
            </div>
        </div>
        <div class="footer-copy-right">
            <div class="footer-item"> &copy; Concordia Model United Nations </div>
            <div class="footer-item mini"> All Rights Reserved </div>
            <div class="footer-item mini">  Created and designed by <span>Jeffrey Lim </span>  </div>
            
        </div>
        
    </footer>
</template>
<script>
export default {
    name: "footer_component",
}
</script>

<style scoped>

.footer{
    background-color: #a0a0a0;
    min-height: 10vh;

    display: flex;
}

.footer-brand{
    flex: 2;
    height: 10vh;
    overflow: hidden;
}

.footer-brand-container img{
    width: 100%; 
    height: 100%; 
    object-fit: contain; 
}

.footer-brand-text{
    display: none;
}

.footer-text{
    flex: 8;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

}

.footer-item{
    color: black;
    align-content: center;
    font-size: 2.5vh;
    flex:2;
}

.follow{
    color: black;
    align-content: center;
    font-size: 2.5vh;
    flex: 3;
    display: flex;
    justify-content: space-around;
}
.follow-text{
    align-content: center;
    flex: 1.5;
}
.footer-social-container{
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
}

.footer-spacer{
    flex:1;
}

.follow-image{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.follow-image img{
    
    width: 90%; 
    height: 90%; 
    object-fit: contain;
}


.footer-copy-right{
    margin: 1% 0%;
    flex: 2;
    display: flex;
    flex-direction: column;
}
.footer-copy-right .footer-item{
    font-size: 1.5vh;
}

.footer-copy-right .mini {
    font-size: 1.2vh;
}

@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column; /* Stack sections vertically */
    align-items: center; /* Center-align content for better mobile design */
    text-align: center; /* Center text for a cleaner look */
  }
  .footer-brand img{
    display: none;
  }
  .footer-text{
    flex-direction: column;
    gap: 1vh;
    margin-top: 1vh;
  }

  .footer-text *{
    font-size: 5vh;
  }

  .footer-spacer{
    flex: 0;
  }
  .follow-image{
    height: 6vh;
    width: auto;
  }

  .footer-brand-text{
    display: block;
    font-size: 4vh;
    color: black;
    margin-top: 2vh;
  }


}

    
</style>