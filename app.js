

class App extends React.Component {
    state = {
        text: ""
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value})
    }
    handleReset(){
        this.setState({text: ""});
    }

    render() {
        return (
            <>
                <input value={this.state.text} type="text" onChange={this.handleChange} />
                <button onClick={this.handleReset.bind(this)}>Reset</button>
                <h1 className="title">{this.state.text.toLocaleUpperCase()}</h1>
            </>)
    }


}
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"))