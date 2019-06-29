import React, { Component } from 'react';
import './semantic/semantic.min.css';

import Entry from './components/Entry'
import FormEntry from './components/FormEntry'
import FormError from './components/FormError'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      quote: '',
      entryData: [],
      name: '',
      title: '',
      body: '',
      secretCode: '',
      errorMsg: '',
      toggleDisplay: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    // fetch("https://api.kanye.rest")
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       isLoading: false,
    //       quote: result.quote
    //     })
    //   })
    axios("/entries")
      .then(res => {
        this.setState({
          entryData: res.data,
          isLoading: false
        })
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  handleSubmit() {
    const entryForm = {
      author: this.state.name,
      title: this.state.title,
      body: this.state.body,
      specialCode: this.state.secretCode
    }

    axios.post('/entries', entryForm)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(err => {
        this.setState({
          errorMsg: err.response.data.msg
        })
      })
    this.componentDidMount()
  }

  handleDisplay() {
    this.setState(prevState => ({ toggleDisplay: !prevState.toggleDisplay }))
  }

  handleClose() {
    this.setState({ errorMsg: '' })
  }

  render() {
    return (
      <div style={{ paddingBottom: "3rem" }}>
        <div class="ui padded container">
          <button class="tiny circular ui black right floated icon button" onClick={this.handleDisplay}>
            <i class="icon add"></i>
          </button>
          {this.state.toggleDisplay ?
            <div class="ui text container" >
              {this.state.errorMsg !== '' ? <FormError handleClose={this.handleClose} errorMsg={this.state.errorMsg} /> : null}
              <FormEntry data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
            : null}
          <div class="ui relaxed divided items">

            {this.state.isLoading
              ? <h1>Loading...</h1>
              : this.state.entryData.map(entry => {
                return (
                  <Entry entryInfo={entry} />
                )
              })
            }
          </div>
        </div>




      </div>
    )
  }
}

export default App;
