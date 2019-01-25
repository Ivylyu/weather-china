export default App = React.createClass({
    render:function () {
    return(
        <div>
        <h1>Weather in China</h1>
        <ul className="header">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/staff" activeClassName="active">Staff</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
        </div>
        </div>
    )}
});