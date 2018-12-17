import React from 'react';
import { Link, Prompt } from "react-router-dom";
import { Button } from 'semantic-ui-react'

export class PromptForm extends React.Component {
    state = { isBlocking: false };

    //if form is changed and unsaved, block transition
    render() {
        return (
            <div>
                <h2>Prompt</h2>
                <Link to={`/`}>home</Link>

                <p>isBlocking: {this.state.isBlocking ? 'true' : 'false'}</p>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        event.target.reset();
                        this.setState({ isBlocking: false })
                    }}
                >

                    <input
                        type="text"
                        size="50"
                        placeholder="unsaved change will block route change"
                        onChange={event => {
                            this.setState({ isBlocking: event.target.value.length > 0 })
                        }} />

                    <Button primary>Submit</Button>
                </form>

                <Prompt when={this.state.isBlocking} message="You have unsaved changes. Sure you wanna move?"></Prompt>
            </div>
        )
    }
}

