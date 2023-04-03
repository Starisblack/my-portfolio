import "aos/dist/aos.css"



export const Animation = ({children, type})=> {
    return (
        <div data-aos={type}>
        {children}
        </div>
    )
}