import react from "react";
import './Transliteratsiya.css'

function Home(){
    return(
        <div>
            <div className="home">
                <div className="home-contanier">
                    <div className="lang">
                        <div className="tLang">
                            <p>O'zbekcha kirill</p>
                            <i class="bi bi-caret-down-fill"></i>
                            </div>
                            <i class="bi bi-arrow-left-right"></i>
                        <div className="rLang">
                            <p>Qaraqalpaqsha lotin</p>
                        </div>
                    </div>  
                    <div className="textarea">
                        <div className="input">
                            <textarea placeholder="Text kiriting..." maxLength="5000" ></textarea>
                           <div className="limited">
                           <button className="paste">
                           <i className="bi bi-clipboard2"></i>
                           <p>Qo'yish</p>
                           </button>
                           <div className="limit" >
                            0/5000
                           </div>
                           </div>
                        </div>
                       <div className="result">
                        <textarea placeholder="Tarjimasi..." scrolltop="0" readOnly></textarea>
                        <button className="copy">
                            <i className="bi bi-copy"></i>
                            Nusxa
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home