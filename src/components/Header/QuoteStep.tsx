import React from 'react'
import "./QuoteStep.css"

const QuoteStep: React.FC<{ step: number, title: string }> = ({ step, title }) => {
    return (
        <div className='quoteStep'>
            <h6><span>Quotes</span> / {title}</h6>
            <div>
                <div className={step === 1 ? 'activeStep' : step > 1 ? 'passedStep' : ''}>
                    <div>1</div>
                    <div>
                        <h5>Request Information</h5>
                        <p>Provide details about the RFQ</p>
                    </div>
                </div>
                <div className={step === 2 ? 'activeStep' : step > 2 ? 'passedStep' : ''}>
                    <div>2</div>
                    <div>
                        <h5>Terms and Attachments</h5>
                        <p>Payment and delivery terms</p>
                    </div>
                </div>
                <div className={step === 3 ? 'activeStep' : step > 3 ? 'passedStep' : ''}>
                    <div>3</div>
                    <div>
                        <h5>Review</h5>
                        <p>Confirm all information provided</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteStep