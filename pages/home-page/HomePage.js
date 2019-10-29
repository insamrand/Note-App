import React from "react";
import { StyleSheet, Platform, Image } from "react-native";
import {
  Container,
  Text,
  Content,
  List,
  ListItem,
  Button,
  Icon,
  Left,
  Thumbnail,
  Body,
  Right
} from "native-base";
import { connect } from "react-redux";
import actions from "../../redux/reducers/actions";
const hogwartsImg =
  "http://www.penguinteen.com/content/uploads/Hogwarts-castle-harry-potter-166431-1.jpg";
class HomePage extends React.Component {
  // GO TO mapStateToProps
  // static defaultProps = {
  //   notes: [{ title: "a" }, { title: "b" }, { title: "c" }]
  // };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Hogwarts School",
      headerRight: (
        <Button
          transparent
          onPress={() => {
            console.log("GO GO GO");
            navigation.navigate("CreateNote");
          }}
        >
          <Icon name="add" />
        </Button>
      )
    };
  };
  // static navigationOptions = {
  //   title: "Home"
  // };
  componentDidMount() {
    this.props.ready();
  }

  render() {
    if (this.props.notes === undefined) {
      return <Text>No Data</Text>;
    }

    return (
      <Container>
        <Image
          style={styles.hogwarts}
          source={{
            uri: hogwartsImg
          }}
        />
        <Content>
          <List style={styles.listStyle}>
            {this.props.notes.map((item, index) => {
              return (
                <ListItem thumbnail key={index}>
                  <Left>
                    <Thumbnail square source={{ uri: item.url }} />
                  </Left>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={2}>
                      {item.text}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  hogwarts: {
    backgroundColor: "#ccc",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  listStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  }
});
// Pro Version
// const mapStateToProps = state => ({
//   notes: state.note.notes
// });

// Beginer Version
const mapStateToProps = state => {
  console.log("State form Reducer goto Home Page");
  console.log(state);

  return {
    notes: state.note.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ready: () => dispatch(actions.appReady())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
