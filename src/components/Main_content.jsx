// import living_room from '../assets/pexels-terry-magallanes-2988860.jpg'
import skull_logo from "../assets/7830747_skull_icon.svg"
import Button_exit from "./button_exit"
import gold_star from '../assets/Gold_Star.svg'
import blue_star from '../assets/Blue_Star.svg'
import image_carpenter from '../assets/Construction_Carpenter.jpg'
import wood_icon from '../assets/2828154_wood_trunk_icon.svg'
import plasticboard_icon from '../assets/5982114_camping_forest_holidays_nature_tools_icon.svg'
import steel_icon from '../assets/8962550_anvil_metal_industry_forge_craft_icon.svg'
import plywood_icon from '../assets/7150151_closet_furniture_wood_interior_room_icon.svg'
import engineeredwood_icon from '../assets/307362_box_wood_sealed_icon.svg'
import roomplants from '../assets/d4d1e16a17e8b6199b730e6d71a651a8.jpg'
import chair from '../assets/stylish-black-chair-gray-background-stylish-piece-furniture-place-your-text_94064-9177.avif'
import work_man from '../assets/busy-handsome-millennial-european-man-manager-typing-computer-workplace-modern-office-interior_116547-43017.avif'
import Header_title from "./Header_title"
import { useEffect, useState } from "react"
export default function Main_content() {

    const materials = [
        {icon: wood_icon, text: 'Wood'},
        {icon: plasticboard_icon, text: 'Plastic Board'},
        {icon: steel_icon, text: 'Steel'},
        {icon: plywood_icon, text: 'Plywood'},
        {icon: engineeredwood_icon, text: 'Engineered Wood'}
    ]

    const products_category = ['All Furnitures', 'Bedrooms', 'Chairs', 'Dining Room', 'Living Room', 'Kitchen', 'Gym', 'Office']

    const products = [
        {name: 'Trash Wood', price: '299.00'},
        {name: 'Relax Special', price: '99.00'},
        {name: 'Casual Seats', price: '199.00'},
        {name: 'Gossip Special', price: '99.00'},
        {name: 'Sitting Loves', price: '499.00'},
        {name: 'Makeup Special', price: '299.00'},
        {name: 'Stylish Studio', price: '99.00'},
        {name: 'Conversational', price: '199.00'},
    ]
    
    const [ScreenWidth, setScreenWidth] = useState(0);
    const [ConfigEle, setConfigEle] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize)
    }, [])



    const config = () => {

        setConfigEle(!ConfigEle)

    }


    return (
        <main>

            <section id="arrival">

                <header className="arrival-header">

                    <div id="logo-lux">
                        <img src={skull_logo} alt="skull" />
                    </div>

                    <nav>

                        {ScreenWidth <= 650 ? (<></>) : (
                            <ul id="list_pages">
                                <li>Home</li>
                                <li>Products</li>
                                <li>Services</li>
                                <li>Designers</li>
                                <li>Contact</li>
                            </ul>
                        )}
                        
                        {ScreenWidth <= 780 ? (


                            ConfigEle ? (
                                <svg onClick={config} className="elements" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                                </svg>
                            ) : (
                                <svg onClick={config} className="elements" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z"/>
                                </svg>
                            ) 



                        ) : (<></>)}

                        {ScreenWidth <= 780 ? (
                            
                            ConfigEle ? (<div>

                                <select className="bg-transparent">
                                    <option value="Afghanistan">AFG</option>
                                    <option value="Albania">ALB</option>
                                    <option value="Algeria">DZA</option>
                                    <option value="American Samoa">ASM</option>
                                    <option value="Andorra">AND</option>
                                    <option value="Angola">AGO</option>
                                    <option value="Anguilla">AIA</option>
                                    <option value="Antartica">ATA</option>
                                    <option value="Antigua and Barbuda">ATG</option>
                                    <option value="Argentina">ARG</option>
                                    <option value="Armenia">ARM</option>
                                    <option value="Aruba">ABW</option>
                                    <option value="Australia">AUS</option>
                                    <option value="Austria">AUT</option>
                                    <option value="Azerbaijan">AZE</option>
                                    <option value="Bahamas">BHS</option>
                                    <option value="Bahrain">BHR</option>
                                    <option value="Bangladesh">BGD</option>
                                    <option value="Barbados">BRB</option>
                                    <option value="Belarus">BLR</option>
                                    <option value="Belgium">BEL</option>
                                    <option value="Belize">BLZ</option>
                                    <option value="Benin">BEN</option>
                                    <option value="Bermuda">BMU</option>
                                    <option value="Bhutan">BTN</option>
                                    <option value="Bolivia">BOL</option>
                                    <option value="Bosnia and Herzegowina">BIH</option>
                                    <option value="Botswana">BWA</option>
                                    <option value="Bouvet Island">BVT</option>
                                    <option value="Brazil">BRA</option>
                                    <option value="British Indian Ocean Territory">IOT</option>
                                    <option value="Brunei Darussalam">BRN</option>
                                    <option value="Bulgaria">BGR</option>
                                    <option value="Burkina Faso">BFA</option>
                                    <option value="Burundi">BDI</option>
                                    <option value="Cambodia">KHM</option>
                                    <option value="Cameroon">CMR</option>
                                    <option value="Canada">CAN</option>
                                    <option value="Cape Verde">CPV</option>
                                    <option value="Cayman Islands">CYM</option>
                                    <option value="Central African Republic">CAF</option>
                                    <option value="Chad">TCD</option>
                                    <option value="Chile">CHL</option>
                                    <option value="China">CHN</option>
                                    <option value="Christmas Island">CXR</option>
                                    <option value="Cocos Islands">CCK</option>
                                    <option value="Colombia">COL</option>
                                    <option value="Comoros">COM</option>
                                    <option value="Congo">COG</option>
                                    <option value="Congo">COD</option>
                                    <option value="Cook Islands">COK</option>
                                    <option value="Costa Rica">CRI</option>
                                    <option value="Cota D'Ivoire">CIV</option>
                                    <option value="Croatia">HRV</option>
                                    <option value="Cuba">CUB</option>
                                </select>
    
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                                {ScreenWidth <= 650 ? (<ul id="list_pages">
                                <li>Home</li>
                                <li>Products</li>
                                <li>Services</li>
                                <li>Designers</li>
                                <li>Contact</li>
                            </ul>) : <></>}


    
                            </div>) : (<></>)

                        ) :
                        (<ul>
                            <select className="bg-transparent">
                                <option value="Afghanistan">AFG</option>
                                <option value="Albania">ALB</option>
                                <option value="Algeria">DZA</option>
                                <option value="American Samoa">ASM</option>
                                <option value="Andorra">AND</option>
                                <option value="Angola">AGO</option>
                                <option value="Anguilla">AIA</option>
                                <option value="Antartica">ATA</option>
                                <option value="Antigua and Barbuda">ATG</option>
                                <option value="Argentina">ARG</option>
                                <option value="Armenia">ARM</option>
                                <option value="Aruba">ABW</option>
                                <option value="Australia">AUS</option>
                                <option value="Austria">AUT</option>
                                <option value="Azerbaijan">AZE</option>
                                <option value="Bahamas">BHS</option>
                                <option value="Bahrain">BHR</option>
                                <option value="Bangladesh">BGD</option>
                                <option value="Barbados">BRB</option>
                                <option value="Belarus">BLR</option>
                                <option value="Belgium">BEL</option>
                                <option value="Belize">BLZ</option>
                                <option value="Benin">BEN</option>
                                <option value="Bermuda">BMU</option>
                                <option value="Bhutan">BTN</option>
                                <option value="Bolivia">BOL</option>
                                <option value="Bosnia and Herzegowina">BIH</option>
                                <option value="Botswana">BWA</option>
                                <option value="Bouvet Island">BVT</option>
                                <option value="Brazil">BRA</option>
                                <option value="British Indian Ocean Territory">IOT</option>
                                <option value="Brunei Darussalam">BRN</option>
                                <option value="Bulgaria">BGR</option>
                                <option value="Burkina Faso">BFA</option>
                                <option value="Burundi">BDI</option>
                                <option value="Cambodia">KHM</option>
                                <option value="Cameroon">CMR</option>
                                <option value="Canada">CAN</option>
                                <option value="Cape Verde">CPV</option>
                                <option value="Cayman Islands">CYM</option>
                                <option value="Central African Republic">CAF</option>
                                <option value="Chad">TCD</option>
                                <option value="Chile">CHL</option>
                                <option value="China">CHN</option>
                                <option value="Christmas Island">CXR</option>
                                <option value="Cocos Islands">CCK</option>
                                <option value="Colombia">COL</option>
                                <option value="Comoros">COM</option>
                                <option value="Congo">COG</option>
                                <option value="Congo">COD</option>
                                <option value="Cook Islands">COK</option>
                                <option value="Costa Rica">CRI</option>
                                <option value="Cota D'Ivoire">CIV</option>
                                <option value="Croatia">HRV</option>
                                <option value="Cuba">CUB</option>
                            </select>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            


                        </ul>)}

                    </nav>
                </header>

                <div className="arrival-content">

                    <span>Replace Your Space <br /> with Stunning Interior & <br /> Furniture Designs</span>

                    <p>Here, you will find an array of stunning pieces that will take your home decor <br /> to the next level. Our furniture combines aesthetic appeal with functionality <br /> to give you the best of both worlds.</p>

                    <Button_exit size='large' bg_color='#fbd464' text='Explore Products' icon={false} text_color='black' />

                </div>

                {ScreenWidth >= 951 ? (<footer className="arrival-footer">

<div className="content">

    <div>
        <img src={gold_star} alt="" />
        <span>4.8</span>
    </div>

    <div>
        <img src={blue_star} alt="" />
        <span>Trustpilot</span>
    </div>

    <div>
        <img src={blue_star} alt="" />
        <span>Trustpilot</span>
    </div>
</div>
                </footer>) : (<></>)}

                

            </section>

            <section id="about">

                <Header_title bg_color={'#507f3e'} text={'About us'} orientation={'center'} />

                <div className="about-content">

                    <div>

                        {ScreenWidth <= 450 ? (<p className="text-white font-normal text-4xl leading-none">A modern approach<br /> with Luxyhome</p>) : (<p className="text-white font-normal text-4xl leading-none">A modern approach with Luxyhome</p>)}

                        <p className="text-white font-extralight text-center text-xs leading-5">Experience comfort and style with our handcrafted furniture <br /> discover the story behind our passionate mission.</p>
                    </div>

                    <Button_exit size='normal' bg_color='#fbd464' text='Learn More' icon={false} text_color='black' />
                    
                </div>

                <footer className="about-footer">

                    <div className="content">

                        <div>
                            <img src={image_carpenter} alt="" />
                        </div>
                    </div>
                </footer>

            </section>

            <section id="categories">

                <Header_title bg_color={'#002c26'} text={'Categories'} orientation={'left'} />

                <div className="content">
                    
                    <div>

                        <div>
                            <span>Types of material of<br/> our products</span>
                            <p>Our quality product is crafted with a focus on delivering exceptional<br/> performance and durability. We use only the finest materials<br/> and cutting-edge technology to ensure.</p>
                        </div>

                        <ul>

                            {materials.map((material => (
                                <li key={material.text}>
                                    <div>
                                        <span>
                                            <img src={material.icon} alt={material.text} />
                                        </span>
                                        <span>{material.text}</span>
                                    </div>
                                </li>
                            )))}

                            
                        </ul>

                        <Button_exit size='normal' bg_color='#7aa668' text='Learn More' icon={false} text_color='white' />

                    </div>

                    <div>
                            <div>
                                <img src={roomplants} alt="room with plants" />
                            </div>
                        
                    </div>
                </div>

            </section>

            <section id="products">


                <Header_title bg_color={'#09203c'} text={'Products'} orientation={'center'} />

                <div className="content">

                    <div className="text_container">
                        <h2>Collection for your space</h2>
                        <p>Introducing our carefully curated Product Collection! We&#39;ve handpicked a<br /> selection of top-quality items that are sure to meet all of your needs.</p>

                    </div>

                    <div className="products_container">

                        <div className="list_type-products">

                            <ul>
                                {products_category.map(product => (
                                    <li key={product}>
                                        <button>{product}</button>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <div className="container_products">

                            <div>

                                {products.map(product => (
                                    <div key={product.name} className="card">
                                    

                                        <img src={chair} alt="" />
                                        
                                        <div className="text_container">
                                            <span>{product.name}</span>

                                            <span>${product.price}</span>
                                        </div>

                                        <div> 

                                            <div>

                                                {product.name == 'Relax Special' ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                    </svg>
                                                )}

                                            </div>

                                        </div>

                                    
                                </div>
                                ))}

                                

                            </div>

                        </div>

                    </div>

                    <div className="button_container">
                        <Button_exit size='large' bg_color='#7aa668' text='See All Products' icon={false} text_color='white' />
                    </div>
                </div>




            </section>

            <section id='service'>

                <Header_title bg_color={'#002c26'} text={'Service'} orientation={'left'} />

                <div className="content">
                    
                    <div>

                        <div className="text_container">
                            <span>Have a look of our design service for your beautiful space</span>
                            <p>Our interior design service is dedicated to helping you create a space that truly reflects your personal style. We understand that your home or workspace is more than just walls and furniture - it&#39;s a reflection of who you are. That&#39;s why we offer a range.</p>
                        </div>

                        <div className="design_buttons_container">

                            <div>
                                
                                <span>Interior Design</span>

                                <div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                            
                            <div>
                                
                                <span>Exterior Design</span>

                                <div>
                                    <div className="w-[90%] h-[85%] bg-white rounded-md flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div>
                        <div>
                            <img src={work_man} alt="room with plants" />
                        </div>
                    </div>
                </div>

            </section>

            <section id="subscribe">

                <Header_title bg_color={'#507f40'} text={'Subscribe'} orientation={'center'} />

                <div className="content">

                    <div className="text_container">
                        <span className="text-white text-3xl">Subscribe for get latest news &<br /> updates about our products</span>
                        <p className="text-white font-extralight text-xs leading-5">Everyday we make our new product and supply to the customers & Taking order<br /> regularly. Also add our website. Subscribe for updates</p>
                    </div>

                    <div className="input_container">
                        
                        <input type="text" placeholder="Enter email address"  />

                        <Button_exit size='normal' bg_color='#fbd464' text='Subscribe' icon={true} text_color='black'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </Button_exit>
                        
                    </div>



                </div>

            </section>
            

        </main>
    )
}
