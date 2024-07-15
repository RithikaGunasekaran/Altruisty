import React , {useState} from 'react'
import img from './imgs/1.jpg'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'
import img4 from './imgs/4.jpg'
import img5 from './imgs/5.jpg'
import img6 from './imgs/6.jpg'
import './style.css'
import flow from './flow.png'


const Invest = () => {
    const [showForm, setShowForm] = useState(false);
    const [companyDomain, setCompanyDomain] = useState('');

    const handleApplyClick = () => {
        setShowForm(!showForm);
    };
  return (
<>
{!showForm && (

    <div className='container'>
      <h3>Investment Request page</h3>
      <p>An investment is an asset or item acquired to generate income or gain appreciation. Appreciation is the increase in the value of an asset over time. It requires the outlay of a resource today, like time, effort, and money for a greater payoff in the future, generating a profit.</p>
      <h3>Investment Types</h3>
      <div className='types'>
        
        <img src={img} alt="Investment" className="image" />
        <img src={img2} alt="Investment" className="image" />
        <img src={img3} alt="Investment" className="image" />
        <img src={img4} alt="Investment" className="image" />
        <img src={img5} alt="Investment" className="image" />
        <img src={img6} alt="Investment" className="image" />

        </div>
        <h3>How it can be done</h3>

        <img src={flow} alt="Investment" className="img" />

        <h3>Partners Invested</h3>
        <div className='process'>
            <div className='col'>
            <h5>Procedure to Apply</h5>
            <p>Submit Application</p>
            <p>Review by team</p>
            <p>Follow-Up</p>
            <p>Decision and Funding</p>
            </div>
            <div className='col2'>
            <h5>Process Requirement</h5>
            <p>Project Plan</p>
            <p>Financial Statements</p>
            <p>Pitch Deck</p>
            <p>Legal Documents</p>
            </div>
        </div>
        <p>Click the Apply button below </p>
        <button className="btn" onClick={handleApplyClick}>Apply for Investment</button>
                            
    </div>

  )}
  {showForm && (

                    <div className="investment-form">
                    <h3>Investment Request page</h3>

                    <h3>Personal Details</h3>
                        <form>
                            <div className="form-grid">
                            <div className='sec'>
                            <div className='c1'>
                                <div className="form-group">
                                    <label htmlFor="Name">Contact Name</label>
                                    <input type="text" id="Name" name="Name" required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                </div>
                                <div className='c2'>
                                <div className="form-group">
                                    <label htmlFor="phoneNo">Phone Number</label>
                                    <input type="tel" id="phoneNo" name="phoneNo" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" required />
                                </div>
                                </div>
                                </div>
                                <div className='line'></div>
                                <div className='section'>
                                <div className='column'>
                                <h5>Investment Details</h5>

                                <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="amountNeeded">Amount Needed</label>
                                    <input type="number" id="amountNeeded" name="amountNeeded" required />
                                </div>
                                    <label htmlFor="companyDomain">InvestmentType</label>
                                    <select id="companyDomain" name="companyDomain" value={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} required>
                                        <option value="" disabled>Select Domain</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Education">Education</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                               
                                <div className="form-group">
                                <label htmlFor="purpose">Use of fund</label>
                                <textarea
                                  id="purpose"
                                  name="purpose"
                            
                                  
                                ></textarea>
                              </div>
                              </div>
                              <div className='col2'>
            <h5>Company Information</h5>
            <p>Business Plan</p>
            <p>Financial Statements</p>
            <p>Pitch Deck</p>
            <p>Legal Documents</p>
            </div>
                              </div>
                            </div>
                            <button className="button" type="submit">Submit Form</button>
                        </form>
                    </div>
                )}
    
    </>
      )
}
export default Invest
