import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";

export default class Memory extends GameComponent {
  constructor(props) {
    super(props);
    this.state = { last_user_id: null };
    // this.getSessionDatabaseRef().set({text:"Hello Fil!"});
  }

  onSessionDataChanged(data) {
    console.log("Data changed?", data);
    this.setState({ last_user_id: data.user_id });
  }

  handleButtonClick() {
    this.getSessionDatabaseRef().set({ user_id: this.getMyUserId() });
  }

  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{UserApi.getName(user_id)}</li>
    ));
    var creator = UserApi.getName(this.getSessionCreatorUserId());
    var isCreator = this.getMyUserId() === this.getSessionCreatorUserId();
    var userStatus = isCreator ? "host" : "guest";
    var last_user = "No one";
    if (this.state.last_user_id !== null) {
      last_user = UserApi.getName(this.state.last_user_id);
    }
    var last_user_message = last_user + " clicked the button";

    return (
      <div>
        <p>You are the {userStatus}</p>

        <p>Session ID: {id}</p>

        <p>Session creator: {creator}</p>

        <p>Session users:</p>
        <ul> {users} </ul>

        <button onClick={() => this.handleButtonClick()}>Button</button>
        <p>{last_user_message}</p>
      </div>
    );
  }
}
