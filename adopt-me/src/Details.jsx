import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    const pets = json.pets[0];
    this.setState({
      loading: false,
      ...pets,
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else {
      const { animal, breed, city, state, description, name, images } =
        this.state;
      return (
        <div className="details">
          <Carousel images={images} />
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${city}, ${state}`} </h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundry>
      <DetailsWithRouter {...props} />
    </ErrorBoundry>
  );
}
// function Details(props) {
//   const [pets, setPets] = useState([]);
//   useEffect(() => {
//     requestDetails();
//   }, []);
//   async function requestDetails() {
//     const res = await fetch(
//       `http://pets-v2.dev-apis.com/pets?id=${props.match.params.id}`
//     );
//     const json = await res.json();
//     setPets(json.pets[0]);
//   }

//   const { animal, breed, city, state, description, name } = pets;
//   return (
//     <div className="details">
//       <div>
//         <h1>{name}</h1>
//         <h2>{`${animal} - ${breed} - ${city}, ${state}`} </h2>
//         <button>Adopt {name}</button>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default withRouter(Details);
