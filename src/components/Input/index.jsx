import "./styles.css"
function Input({ tp, classnum, placeh }) {
  return (
    <div>
      <input type={tp} placeholder={placeh} exact className={`input-${classnum}`} />
    </div>
  )
}

export default Input