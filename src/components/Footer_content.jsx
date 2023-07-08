import skull_logo from "../assets/7830747_skull_icon.svg"
import facebook_logo from '../assets/1298738_facebook_brand_fb_logo_social media_icon.svg'
import instagram_logo from '../assets/icons8-instagram.svg'
import youtube_logo from '../assets/1829989_brand_logo_network_social_youtube_icon.svg'
import twitter_logo from '../assets/317720_social media_tweet_twitter_social_icon.svg'
import { useState } from "react"

export default function Footer_content() {
    const contact = ['Call us: (629) 555-0129', '|', 'Find us on:']

    const contact_media = [
        {icon: facebook_logo, name: 'Facebook'},
        {icon: instagram_logo, name: 'Instagram'},
        {icon: youtube_logo, name: 'Youtube'},
        {icon: twitter_logo, name: 'Twitter'},
    ]

    const info_page = [
        {title: 'Company', elements: ['About us', 'Career', 'Services'] },
        {title: 'Material', elements: ['Wood', 'Plastic Board', 'Steel', 'Plywood', 'Engineered Wood'] },
        {title: 'Media', elements: ['Latest news', 'Blogs', 'Lookbook'] },
        {title: 'Other info', elements: ['Terms & conditions', 'Privacy policy', 'License'] },
        {title: 'FAQ', elements: ['Order & Shipping', 'Refund & Return'] },
    ]

    const [ScreenWidth, setScreenWidth] = useState(0);

    const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

    window.addEventListener('resize', handleResize);

    return (
        <footer>

            <div className="content">

                <div className="header">
                    
                    <div className="logo_container">

                        <div id="logo-lux">
                            <img src={skull_logo} alt="skull" />
                        </div>

                    </div>

                    {ScreenWidth <= 620 ? (<></>) : (
                    <ul className="contact_container">

                        {contact.map(cont => (
                            <li key={cont}>{cont}</li>
                        ))}

                        {contact_media.map(contact => (
                            <li key={contact.name}>
                                <img src={contact.icon} alt="" />
                            </li>
                        ))}


                    </ul>
                    )}
                </div>

                <div className="body">

                    <p>You will find an array of stunning pieces that will take your home decor to the next level.</p>
                    
                    {ScreenWidth <= 620 ? (<ul className="contact_container">

                        {contact.map(cont => (
                            <li key={cont}>{cont}</li>
                        ))}

                        {contact_media.map(contact => (
                            <li key={contact.name}>
                                <img src={contact.icon} alt="" />
                            </li>
                        ))}


                    </ul>) : (
                    <></>
                    )}

                    <div>
                        {info_page.map(info => (

                            <div key={info.title}>

                                <h6>{info.title}</h6>

                                <ul>
                                    {info.elements.map(element => (
                                        <li key={element}>{element}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </footer>
    )
}
