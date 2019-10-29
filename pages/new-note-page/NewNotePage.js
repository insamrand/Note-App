import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Container, Content, Text } from "native-base";
import NewNoteForm from "./NewNoteForm";
import { connect } from "react-redux";
import actions from "../../redux/reducers/actions";

class NewNotePage extends React.Component {
  static navigationOptions = {
    title: "Register Magician Member"
  };

  message = "Hello";
  onFormSave = values => {
    console.log("Form values: ", values);
    this.props.saveMessage(values);
    // this.props.saveMessage(values.text);
    // this.props.saveMessage(values.url);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            {this.message + " "}
            {this.props.username}
          </Text>
          <NewNoteForm onSubmit={this.onFormSave} />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  username: state.note.username
});

const mapDispatchToProps = dispatch => {
  return {
    saveMessage: values => dispatch(actions.saveNote(values)),
    // saveMessage: text => dispatch(actions.saveNote(text)),
    // saveMessage: url => dispatch(actions.saveNote(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotePage);
