import React from 'react'
import downIcon from "../../../assets/down.svg"
import uploadIcon from "../../../assets/upload.svg"

const TermsInput: React.FC = () => {
    return (
        <div className='termsInput'>
            <div className='termsInputDiv'>
                <div>
                    <label htmlFor="payment">Payment Terms</label>
                    <div>
                        <input type="text" name='payment' id='payment' placeholder='Net 20' />
                        <img src={downIcon} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="delivery">Delivery Schedule</label>
                    <div>
                        <input placeholder='Immediate delivery' type="text" name='delivery' id='delivery' />
                        <img src={downIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='termsInputDiv'>
                <div>
                    <label htmlFor="shipping">Shipping Method</label>
                    <div>
                        <input type="text" name='shipping' id='shipping' placeholder='Courier Services' />
                        <img src={downIcon} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="lead">Lead time</label>
                    <div>
                        <input placeholder='10' type="text" name='lead' id='delivery' />
                        <div>Days <img src={downIcon} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='uploadDiv'>
                <div>
                    <h5>Attachments</h5>
                    <p>Attach all necessary files or documents</p>
                    <div>
                        <input hidden type="file" name="attachment" id="attachment" />
                        <label className='labelIcon' htmlFor='attachment'><img src={uploadIcon} alt="" /></label>
                        <p><span>Click to upload</span> or drag and drop</p>
                        <h6>SVG, PNG, JPG or GIF (max. 800x400px)</h6>
                        <div>
                            <div></div>
                            <p>OR</p>
                            <div></div>
                        </div>
                        <button><label htmlFor="attachment">Browse Files</label></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsInput