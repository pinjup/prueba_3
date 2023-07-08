
export default function Header_title({ bg_color, text, orientation }) {

    // const header_element = document.querySelector('.header_title')

    // header_element.style.backgroundColor = bg_color

    let conf_orientation

    if (orientation == 'center'){
        conf_orientation = 'header_title--center'
    } else if (orientation == 'left'){
        conf_orientation = 'header_title--left'
    }

    return (
        <header className={`header_title ${conf_orientation}`}>
            <div>
                <span style={{ backgroundColor: bg_color }}>{text}</span>
            </div>
        </header>
    )
}
