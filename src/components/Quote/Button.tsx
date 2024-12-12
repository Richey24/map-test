import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button: React.FC<{ link: string, setOpenModal?: (state: boolean) => void }> = ({ link, setOpenModal }) => {
  const navigate = useNavigate()
  const handleNext = () => {
    if (link === "submit") {
      setOpenModal!(true)
      return
    }
    navigate(link)
  }
  return (
    <div style={{ marginTop: "25px", display: "flex", justifyContent: "flex-end", columnGap: "10px" }}>
      <button onClick={()=> navigate("/")} style={{ height: "40px", borderRadius: "8px", outline: "none", width: "70px", backgroundColor: "white", border: "1px solid #E4E7EC", cursor: "pointer" }}>Cancel</button>
      <button style={{ height: "40px", borderRadius: "8px", outline: "none", width: "190px", backgroundColor: "white", border: "1px solid #175CFF", color: "#175CFF", cursor: "pointer" }}>Save as draft</button>
      <button onClick={handleNext} style={{ height: "40px", borderRadius: "8px", outline: "none", width: "190px", color: "white", border: "none", backgroundColor: "#175CFF", cursor: "pointer" }}>{link === "submit" ? "Submit" : "Continue"}</button>
    </div>
  )
}

export default Button