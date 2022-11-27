import {Component} from 'react'
import DenominationButton from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  withdrawAmount = (id, value) => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="name-container">
            <div className="profile-letter-container">
              <h1 className="profile-letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>

          <p className="amount">Withdraw</p>
          <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>

          <ul className="buttons-container">
            {denominationsList.map(eachBtn => (
              <DenominationButton
                btnDetails={eachBtn}
                key={eachBtn.id}
                removeAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
