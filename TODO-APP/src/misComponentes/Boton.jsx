const Boton = ({ children, color = 'green', sx }) => {
  console.log('🚀 ~ file: Boton.jsx:2 ~ Boton ~ sx', sx)
  return (
    <button style={{ color, ...sx }}>
      {children}
    </button>
  )
}

export default Boton
