import React from 'react';
import './BookCard.css'

const BookCard = (props) => {
    const { Image,Name,Author,Edition,Subject,Publisher,Availability,Price } = props.book;
    return (
        <div className='col-4 '>
            <div className="card mb-3">
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text">Author : {Author}</p>
                    <p className="card-text">Edition : {Edition}</p>
                    <p className="card-text">Subject : {Subject}</p>
                    <p className="card-text">Publisher : {Publisher}</p>
                    <p className="card-text">Availability : {Availability}</p>
                    <p className="card-text">Price : {Price}</p>
                </div>
                <button type="button" className="btn btn-success" onClick={ ()=> props.handleAddBook(props.book)}  ><i className="fas fa-cart-plus me-2"></i>Add To Card</button>
            </div>
        </div>
    );
};

export default BookCard;