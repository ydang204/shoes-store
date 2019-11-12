import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './search.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

interface Props extends RouteComponentProps {
    hasResult: boolean;
    query: string
};

type States = {
    queryTag: string;
};

class Search extends Component<Props, States> {
    
  constructor(props: Props) {
      super(props);

      this.state = {
          queryTag: ''
      };
      
    }


    componentDidMount() {
        let param = this.props.history.location.state
        this.setState({queryTag: param.query});
    }

    componentDidUpdate(prevProps: Props, prevState: any){
        let param = this.props.history.location.state;
        if(param.query != prevState.queryTag){
            this.setState({queryTag: param.query});
        }
    }

    render() {

        let result = null;
        if (!this.props.hasResult) {
            result = <p className="text-center">Xin lỗi, chúng tôi không thể tìm thấy sản phẩm</p>
        }

      return (
          <main className="parent-container">
              <div className="sub-container">
                  <div className="wrapper">
                      <div className="header">
                          <button className="btn hash-tag">
                              <span>{this.state.queryTag}</span>
                              <FontAwesomeIcon icon={faWindowClose} />
                          </button>
                      </div>
                      <div className="content">
                          {result}
                          <div className="grid-container"></div>
                      </div>
                  </div>
              </div>
          </main>
      );
  }
}

export default withRouter(Search);
