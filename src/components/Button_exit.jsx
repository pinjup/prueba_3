export default function Button_exit({ size, bg_color, text, icon, text_color, children }) {

    return (
        <button style={{ backgroundColor: bg_color, color: text_color }} className={`button_exit ${size == 'normal' ? 'button_exit--normal' : 'button_exit--large'}`}>
            <a>{text}</a>
            {icon ? (children) :(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>)}
        </button>
    )
}
