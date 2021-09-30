// Componente botão (caracteristicas e como chamar)

const buttonStyle = {
    backgroundColor:"white",
    color:"#00c5dd",
    fontSize:"2em",
    fontFamily:"Passion One",
    borderColor:"white"
}

const Button = ({name,...rest}) => {
    return (
        <button style={buttonStyle} {...rest}>{name}</button>
    )
}

export default Button