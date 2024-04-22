import React from 'react';

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <h1 className="heading">our menu <span>popular menu</span></h1>

            <div className="box-container">
                {/* Menu Items */}
                <div className="box">
                    <a href="#" className="box">
                        <img src="Assets/menu-1.png" alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed.</p>
                            <span>$8.99</span>
                        </div>

                    </a>
                    <a href="#" class="box">
                <img src="Assets/menu-2.png" alt=""/>
                <div class="content">
                    <h3>our special coffee</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, fugit.</p>
                    <span>$8.99</span>
                </div>
            </a>
            <a href="#" class="box">
                <img src="Assets/menu-3.png" alt=""/>
                <div class="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae.</p>
                    <span>$8.99</span>
                </div>
            </a>
            <a href="#" class="box">
                <img src="Assets/menu-4.png" alt=""/>
                <div class="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quas.</p>
                    <span>$8.99</span>
                </div>
            </a>

            <a href="#" class="box">
                <img src="Assets/menu-5.png" alt=""/>
                <div class="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae.</p>
                    <span>$8.99</span>
                </div>
            </a>
            <a href="#" class="box">
                <img src="Assets/menu-6.png" alt=""/>
                <div class="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, expedita!</p>
                    <span>$8.99</span>
                </div>
            </a>

                </div>
                {/* Repeat this pattern for other menu items */}
            </div>
        </section>
    );
}

export default Menu;
