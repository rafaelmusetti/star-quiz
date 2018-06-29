import React, { Component } from 'react';
import { connect } from 'react-redux';
import Character from './Character';
import CardLoader from './CardLoader';
import { Pagination, Row, Col } from 'antd';

import { fetchCharactersByPage } from './../../actions/charactersAction';
import { updateCurrentPage } from './../../actions/paginatorAction';

import './CharacterList.css';

class CharacterList extends Component {
  componentDidMount() {
    this.props.onFetchCharactersByPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.paginator.currentPage !== this.props.paginator.currentPage) {
      this.props.onFetchCharactersByPage();
    }
  }

  onPageChange = (page, pageSize) => {
    this.props.onPageChange(page, pageSize);
  }

  render() {
    const {
      characters,
      paginator,
    } = this.props;

    const {
      currentPage,
    } = paginator;

    if (characters.ids.length <= 0) {
      return (
        [1,2,3,4,5,6,7,8,9,10].map((element, index) => (
          <Col span={6} key={`loading-${index}`}>
            <CardLoader />
          </Col>
        ))
      );
    }

    return (
      <div className="CharacterList">
        <Row gutter={16}>
          {
            characters.ids.map((characterId) => (
              <Col span={6} key={characterId}>
                <Character
                  onShowDetails={this.props.onShowDetails}
                  onCorrect={this.props.onCorrect}
                  character={characters.content[characterId]}
                />
              </Col>
            ))
          }
        </Row>
        <Row gutter={16} type="flex" justify="center">
          <Col span={12} offset={8}>
            <Pagination
              onChange={(pageNumber) => this.onPageChange(pageNumber)}
              current={currentPage}
              defaultCurrent={1}
              total={90}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  ({ charactersReducer, paginatorReducer }) => {
    const objPaginator = paginatorReducer.paginator;
    const characterIdsOfPage = objPaginator.pages[objPaginator.currentPage] || [];

    if (!objPaginator.currentPage || characterIdsOfPage.length <= 0) {
      return {
        characters: {
          ids: [],
          content: {},
        },
        paginator: objPaginator,
      }
    }

    return {
      ids: [],
      content: {},
      characters: {
        ids: characterIdsOfPage,
        content: charactersReducer.content,
      },
      paginator: objPaginator,
    };
  },
  {
    onFetchCharactersByPage: fetchCharactersByPage,
    onPageChange: updateCurrentPage,
  }
)(CharacterList);