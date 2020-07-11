import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import './css/researchBar.css'

class ResearchBar extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })
    }

    render() {
        const { name, email, submittedName, submittedEmail } = this.state

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Input
                            className="searchBar"
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                        {/*<Form.Button content='Submit' />*/}
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default ResearchBar
// import { Form, Input } from 'semantic-ui-react'
//
// const FormExampleInlineField = () => (
//     <Form>
//         <Form.Field inline>
//             <Input placeholder='First name' />
//         </Form.Field>
//     </Form>
// )
//
// export default FormExampleInlineField

// export default ResearchBar;