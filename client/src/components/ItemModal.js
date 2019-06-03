import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import { addItem } from '../actions/itemActions';
import { connect } from 'react-redux';
//import uuid from 'uuid';

class ItemModal extends React.Component {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name : this.state.name
        };

        this.props.addItem(newItem);
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="dark" onClick={this.toggle} style={{ marginTop: '2rem', marginBottom: '2rem' }}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add an item</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label>Item</Label>
                                <Input type="text" name="name"
                                    id="name"
                                    placeholder="Add Shopping Item"
                                    onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                                Add
                            </Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    };
}

const mapStateToProps = (state) => {
    return {
        itemStore: state.itemReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
