import React, { Component } from 'react';
import { Card, Icon, Modal, Input, message } from 'antd';
import CharacterDetails from './CharacterDetails';
import './Character.css';

class Character extends Component {
  state = {
    IsVisible: false,
    characterName: '',
    isCorrect: false,
  };

  handleShowModalForm = () => {
    this.setState({
      IsVisible: true,
    });
  }

  handleOk = () => {
    this.handleVerifyResult();
    this.setState({
      IsVisible: false,
    });
  }

  handleVerifyResult = () => {
    if (this.state.characterName.toLowerCase() === this.props.character.name.toLowerCase()) {
      this.props.onCorrect();
      this.setState({ isCorrect: true, characterName: '' });
      message.success("The character's name is correct!");
    } else {
      this.setState({ characterName: '', isCorrect: false });
      message.error("The character's name is wrong!");
    }
  }

  handleCancel = () => {
    this.setState({
      IsVisible: false,
    });
  }

  handleDetails = () => {
    this.props.onShowDetails();
    Modal.info({
      title: 'Character Details',
      content: (
        <CharacterDetails character={this.props.character} />
      ),
    });
  }

  render() {
    const {
      character,
    } = this.props;

    const {
      isCorrect
    } = this.state;
    return (
      <div className={isCorrect ? "Character Character--correct" : "Character"}>
        <Card
          style={{ width: 300, height: 400 }}
          cover={
            <img
              alt="example"
              src={character.imageUrl}
              height="300"
            />
          }
          actions={[
            <Icon
              type="question"
              onClick={this.handleShowModalForm}
            />,
            <Icon
              type="ellipsis"
              onClick={this.handleDetails}
            />
          ]}
        />
          <Modal
            title="What is the name of the character?"
            visible={this.state.IsVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Input
              placeholder="Name of Character"
              onChange={(e) => this.setState({ characterName: e.target.value })}
              value={this.state.characterName}
            />
          </Modal>
      </div>
    );
  }
}
export default Character;