import { useModal } from "../../../../Context/Context"
function ButtonOpenModale() {
  const { openModal } = useModal()
  return (
    <button onClick={openModal} className="btn">Open</button>
  )
}
export default ButtonOpenModale