import React from 'react';
import "./CardContainer.css";
import icon from "../../../../public/favicon.ico";

class CardContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData || []
    }
  }

  render() {
    const weekDays = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    const domElement = weekDays.map((day, index) => {
      let initials = this.props.userData && this.props.userData.map(user => {
        return (index === new Date(user.birthday).getDay()) && user.name.split(" ").map(name => {
          return name.split("")[0]
        }).join("");
      });
      return (
        // create initials container dynamically.
        <div className="card-container" key={index}>
          <div className="card-head">{day}</div>
          <div className="contents-container">
            {initials &&
              initials.map((initial, ind) => {
                return (
                  <div key={ind}>
                    {initial && <div className="card-contents" style={{background: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`}}>
                      {initial}
                    </div>}
                  </div>
                )
              })
            }
          </div>
          {/* <div>
            {initials && initials.filter(intl => intl !== false).length + "birthdays"}
          </div> */}
        </div>
      )
    });
    const count = weekDays.map((day, index) => {
      this.props.userData && this.props.userData.map(user => {
        console.log(user)
      });
    })
    console.log(count)
    return (
      <div className="card-odd-row">
        {domElement}
      </div>
    )
  }
}

export default CardContainer;