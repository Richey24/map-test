import React from 'react'
import hospitalIcon from "../../assets/hospital.svg"
import editIcon from "../../assets/edit.svg"
import { useNavigate } from 'react-router-dom'

const Information: React.FC<{ type: string }> = ({ type }) => {
    const navigate = useNavigate()
    return (
        <div className='quoteInfo'>
            {
                type === "quote" ?
                    <div className='quoteInfoHead'>
                        <h5>Quote Information</h5>
                        <p>Expected delivery date : 2024-12-02</p>
                    </div> :
                    <div className='quoteInfoHead'>
                        <h5>Request Information</h5>
                        <img onClick={()=> navigate("/quote/request")} src={editIcon} alt="" />
                    </div>
            }
            <div style={{maxWidth: type === "review" ? "699px" : ""}} className='quoteInfoMain'>
                <div className='infoMainFirst'>
                    <p>Title</p>
                    <p>RFQ No</p>
                    <p>Requestor</p>
                    <p>Status</p>
                    <p>Department</p>
                </div>
                <div className='infoMainSecond'>
                    <div>Request for Equipments</div>
                    <div>RQ #01234</div>
                    <div className='infoDoctor'><div>JD</div> <h6>Jane Doe</h6> <h5></h5> <p>Head Nurse, Paediatrics</p></div>
                    <div className='infoStatus'>Awaiting</div>
                    <div>Maternity</div>
                </div>
                {type === "quote" && <div className='infoMainThird'>
                    <div className='infoThirdIcon'><img src={hospitalIcon} alt="" /> Client</div>
                    <div className='infoClient'>
                        <div className='infoClientIcon'>W</div>
                        <div className='infoClientDetail'>
                            <h5>Westend Hospital</h5>
                            <h6>Clear street</h6>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Information