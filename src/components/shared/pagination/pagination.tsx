import React from 'react';
import './pagination.scss';

const Pagination: React.FC = () =>{
    return(
        <div className="row">
            <ul className="pagination">
                <li className="page-item"><a href="#" className="page-link">«</a></li>
                <li className="page-item active"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5</a></li>
                <li className="page-item"><a href="#" className="page-link">»</a></li>
            </ul>
        </div>
    );
}
export default Pagination;
