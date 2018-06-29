import React, { Component } from 'react';
import { Input, Modal, Form } from 'antd';
import Logo from '../logo/Logo';
import Timer from './Timer';
import CharacterList from './CharacterList';
import Ranking from '../home/Ranking';
import './Game.css';

const { Item } = Form;
const PLAYING = 'PLAYING';
const END_GAME = 'END_GAME';

class Game extends Component {
  state = {
    IsVisible: false,
    score: 0,
    wasSeen: false,
    nickname: '',
    email: '',
    statusGame: PLAYING,
    isValidNickname: true,
  };

  handleShowModal = () => {
    this.setState({
      IsVisible: true,
    });
  }

  isValid = () => {
    if (this.state.nickname) {
      console.log('tem nickname');
      this.setState({ isValidNickname: true });
      return true;
    }
    this.setState({ isValidNickname: false });
    return false;
  }

  handleOk = () => {
    if (this.isValid()) {
      this.setState({
        IsVisible: false,
        statusGame: END_GAME,
      });
    }
  }

  handleCancel = () => {
    this.setState({
      IsVisible: false,
    });
  }

  handleFinishGame = () => {
    this.handleShowModal();
  }
  
  handleWasSeen = () => {
    this.setState({ wasSeen: true });
  }

  handleCount = () => {
    if (this.state.wasSeen) {
      this.setState({ score: this.state.score + 5, wasSeen: false });
    } else {
      this.setState({ score: this.state.score + 10, wasSeen: false });
    }
  }

  render() {
    const {
      score,
      statusGame,
      nickname,
    } = this.state;

    if (statusGame === END_GAME) {
      return <Ranking nickname={nickname} score={score} />
    }

    return (
      <div className="Game">
        <div className="Game__header">
          <Logo
            width={200}
            style={{ display: 'flex', flexDirection: 'row' }}
          />
          <Timer
            onFinishGame={this.handleFinishGame}
          />
        </div>
        <div className="Game__list">
          <CharacterList
            onShowDetails={this.handleWasSeen}
            onCorrect={this.handleCount}
          />
        </div>
        <Modal
          title="End Game"
          visible={this.state.IsVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="Game__modal">
            <div className="Game__modal__end-game">
              <h1>END GAME!</h1>
            </div>
            <div className="Game__modal__score">
              <h1>{score} SCORE</h1>
            </div>
            <div className="Game__modal__info">
              Fill out the form below to save your score
            </div>
            <div className="Game__modal__form">
              <Form>
                <Item
                  help={this.state.isValidNickname ? null : 'Nickname is required'}
                  validateStatus={this.state.isValidNickname ? 'success' : 'error'}
                >
                  <Input
                    placeholder="Nickname"
                    onChange={(e) => this.setState({ nickname: e.target.value })}
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="E-mail"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Item>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Game;