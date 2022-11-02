// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imgUrl: headsImg, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        imgUrl: headsImg,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        imgUrl: tailsImg,
      }))
    }
  }

  render() {
    const {imgUrl, heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="details">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="coin-img" />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="counter">Total: {total} </p>
            <p className="counter">Heads: {heads} </p>
            <p className="counter">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
