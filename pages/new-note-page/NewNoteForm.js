import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Item, Label, Button, Text, Input } from "native-base";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

class NewNoteForm extends Component {
  renderInput = ({ input }) => {
    return <Input {...input} />;
  };
  // renderInput({ input, label, type, meta: { touched, error, warning } }) {
  //   var hasError = false;

  //   // ถ้า function ได้รับ error ก็จะแสดง pop up ขึ้นมา
  //   if (error !== undefined && touched) {
  //     hasError = true;
  //     Alert.alert("Opps", error);
  //   }
  //   return (
  //     <Item error={hasError}>
  //       <Input {...input} />
  //     </Item>
  //   );
  // }

  render() {
    // const validate = values => {
    //   const error = {};
    //   error.message = "";

    //   var newMessage = values.message;

    //   if (values.message === undefined) {
    //     newMessage = "";
    //   }

    //   if (newMessage === "") {
    //     error.message = "fill something";
    //   }

    //   return error;
    // };
    const { handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit;
    return (
      <View>
        <Item stackedLabel>
          <Label>Name :</Label>
          <Field name="title" component={this.renderInput} />
        </Item>
        <Item stackedLabel>
          <Label>Description :</Label>
          <Field name="text" component={this.renderInput} />
        </Item>
        <Item stackedLabel>
          <Label>Image Url :</Label>
          <Field name="url" component={this.renderInput} />
        </Item>
        <Button primary block onPress={handleSubmit}>
          <Text>Save</Text>
        </Button>
        {/* <Text>{this.props.description}</Text> */}
      </View>
    );
  }
}
NewNoteForm = reduxForm({ form: "newNote" })(NewNoteForm);
// NewNoteForm = reduxForm({ form: "newNote", validate })(NewNoteForm);

const mapStateToProps = state => {
  return {
    description: state.form.newNote
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNoteForm);
