import { Component } from "react";

class Searchercopy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchedUsers: this.props.searchedUsers,
    };
  }

  render() {
    return (
      <div>
        <input
          placeholder="Please type name to filter..."
          type="text"
          style={{
            width: "33%",
            fontSize: "1.25rem",
            minHeight: "2.0rem",
            marginBottom: "1.5rem",
            marginRight: "1.5rem",
          }}
          onChange={(event) => {
            this.state.searchText = event.target.value.toLowerCase();
            const newUsers = this.state.searchedUsers?.filter((user) => {
              const fullName = `${user.name}`;
              if (
                fullName
                  .toLowerCase()
                  .replace(" ", "")
                  .includes(this.state.searchText.replace(" ", ""))
              ) {
                return true;
              }
              return false;
            });
            this.props.setSearchedUsers(newUsers);
          }}
        />
        <label>Sort </label>
        <button
          className="card__btn"
          style={{ color: "blue" }}
          type="button"
          onClick={() => {
            const sortedUsers = [...this.state.searchedUsers].sort(
              (user1, user2) => {
                const name1 = user1.name.toLowerCase();
                const name2 = user2.name.toLowerCase();

                if (name1 < name2) {
                  return -1;
                } else if (name1 > name2) {
                  return 1;
                } else {
                  return 0;
                }
              }
            );
            this.props.setSearchedUsers(sortedUsers);
          }}
        >
          {" "}
          Ascending
        </button>
        <button
          className="card__btn"
          style={{ color: "blue" }}
          type="button"
          onClick={() => {
            const sortedUsers = [...this.state.searchedUsers].sort(
              (user1, user2) => {
                const name1 = user1.name.toLowerCase();
                const name2 = user2.name.toLowerCase();

                if (name1 < name2) {
                  return 1;
                } else if (name1 > name2) {
                  return -1;
                } else {
                  return 0;
                }
              }
            );
            this.props.setSearchedUsers(sortedUsers);
          }}
        >
          {" "}
          Descending
        </button>
      </div>
    );
  }
}

export default Searchercopy;
