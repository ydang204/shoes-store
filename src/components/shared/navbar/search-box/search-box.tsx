import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import './search-box.scss';
import { Nav } from 'reactstrap';
import Search from '../../../pages/search/search'
import { withRouter, RouteComponentProps } from 'react-router';


interface Props extends RouteComponentProps {

}

type States = {
  data: [];
  query: string
};

class SearchBox extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      query: ''
    };
  }

  _handleKeyDown = ( e: any) => {

    if (e.key === "Enter") {

        this.props.history.push({
          pathname: '/search',
          search: this.state.query,
          state: { query: this.state.query }
        });
    }
  }

  _handleInput = (queryString:string, e: any) => {

    this.setState({query: queryString});
  }

  render() {
    return (
      <Nav navbar className="search-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />

          <Typeahead
            //   labelKey="name"
            options={this.state.data}
            placeholder="Tìm kiếm sản phẩm..."
            onInputChange={this._handleInput}
            onKeyDown={this._handleKeyDown}
          />
        </div>
      </Nav>
    );
  }
}

export default withRouter(SearchBox);
