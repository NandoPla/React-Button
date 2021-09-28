// Componente botão (caracteristicas e como chamar)

const buttonStyle = {
    backgroundColor:"white",
    color:"#00c5dd",
    fontSize:"2em",
    fontFamily:"Passion One",
    borderColor:"white"
}

const Button = ({name}) => {
    return (
        <button style={buttonStyle}>{name}</button>
    )
}

export default Button