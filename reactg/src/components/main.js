import React from 'react';


class Main extends React.Component {
    render() {
        return (
            <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                            calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility Names for typography and
               spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#!" role="button">Submit</a>
            </p>   
              <ul>
                    <li>stuff </li>
                </ul>
            </div>
        )
    }
}

export default Main;