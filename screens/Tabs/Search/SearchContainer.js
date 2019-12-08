import React from "react";

import SearchBar from "../../../components/SearchBar";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    //제일 처음 호출되기 때문에 props이 없다.
    headerTitle: (
      <SearchBar
        value={navigation.getParam("term", "")}
        onChange={navigation.getParam("onChange", () => null)}
        onSubmit={navigation.getParam("onSubmit", () => null)}
      />
    )
  });
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      term: "",
      shouldFetch: false
    };
    navigation.setParams({
      term: this.state.term,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    });
  }

  onChange = text => {
    const { navigation } = this.props;
    this.setState({ term: text, shouldFetch: false });
    navigation.setParams({
      term: text
    });
  };

  onSubmit = () => {
    this.setState({ shouldFetch: true });
  };

  render() {
    const { term, shouldFetch } = this.state;
    console.log(this.state);
    return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
  }
}
