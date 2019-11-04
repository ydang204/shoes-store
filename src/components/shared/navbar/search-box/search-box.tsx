import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import './search-box.scss';
import { Nav } from 'reactstrap';

type Props = {};

type States = {
  data: [];
};

class SearchBox extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Nav navbar className="search-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <Typeahead
            //   labelKey="name"
            options={this.state.data}
            placeholder="Tìm kiếm sản phẩm, shop....."
          />
        </div>
      </Nav>
    );
  }
}

export default SearchBox;
