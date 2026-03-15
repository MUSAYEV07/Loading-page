import React from 'react'
import "./Camanda.css"
import abdu from "./images/card-abdullatifxon.jpg"
function Camanda() {
  return (
    <section className='camanda'>
        <div className="container">
            <div className="camanda-container">
                <div className='comanda-title'>
                    <h2>
                        Bizning Komanda
                    </h2>
                    <p>
                        Axil va inoq jamoa
                    </p>
                    <div className="comanda-cards">
                        <div className="comanda-card">
                            <img src={abdu} alt="" />
                            <h2>Abdulatifxon Anvarxonov</h2>
                            <p> Frontend-dasturchi</p>
                            <div>
                                <a href="https://instagram.com"><img src="/icons/instagram.png" alt="" /></a>
                                <a href="https://t.me"><img src="telegram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://twitter.comr"><img src="twitter kutubxonadan olingan png" alt="" /></a>
                            </div>
                        </div>
                        <div className="comanda-card">
                            <img src={abdu} alt="" />
                            <h2>Abdulatifxon Anvarxonov</h2>
                            <p> Frontend-dasturchi</p>
                            <div>
                                <a href="https://instagram.com"><img src="instagram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://t.me"><img src="telegram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://twitter.com"><img src="twitter kutubxonadan olingan png" alt="" /></a>
                            </div>
                        </div>
                        <div className="comanda-card">
                            <img src={abdu}alt="" />
                            <h2>Abdulatifxon Anvarxonov</h2>
                            <p> Frontend-dasturchi</p>
                            <div>
                                <a href="https://instagram.com"><img src="instagram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://t.me"><img src="telegram kutubxonadan olingan png" alt="" /></a>
                                <a href="./twitter"><img src="twitter kutubxonadan olingan png" alt="" /></a>
                            </div>
                        </div>
                        <div className="comanda-card">
                            <img src={abdu} alt="" />
                            <h2>Abdulatifxon Anvarxonov</h2>
                            <p> Frontend-dasturchi</p>
                            <div>
                                <a href="https://instagram.com"><img src="instagram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://t.me"><img src="telegram kutubxonadan olingan png" alt="" /></a>
                                <a href="https://twitter.com"><img src="twitter kutubxonadan olingan png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Camanda