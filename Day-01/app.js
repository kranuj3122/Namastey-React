const h1 = React.createElement('h1', {id:'heading'}, 'Hello world from React.js!');
// React.createElement('html-element', {attribute: value}, children('hello world' or another react-element));

console.log(h1); // React-element (A javaScript object)


/**
 * 
 * <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
            <h2>I am h1 tag</h2>
        </div>
    </div>
 */

const nestedElement = React.createElement(
    'div',
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [
            React.createElement(
                'h1',
                {},
                'I am h1 tag'
            ),
            React.createElement(
                'h2',
                {},
                'I am h2 tag'
            )
        ]
    )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(h1); // h1 element ko <h1> tag m convert krna then <div id="root"> m append krna

root.render(nestedElement);