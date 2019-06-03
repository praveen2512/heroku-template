import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
//import PropTypes from 'prop-types';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    addItem = (name) => {
        if (name) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
            }));
        }
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const items = this.props.itemStore.items;
        return (
            <ListGroup>
                {
                    items.map(item => (
                        <ListGroupItem key={item._id}>
                            <Button className="remove-btn" style={{ marginRight: '0.5rem' }} color="danger" size="sm"
                                onClick={this.onDeleteClick.bind(this, item._id)}>&times;</Button>
                            {item.name}
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        );
    }
}

// ShoppingList.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired
// }

// (or)

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

const mapStateToProps = (state) => {
    return {
        itemStore: state.itemReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);