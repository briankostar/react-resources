import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { DynamicSubRoute } from './DynamicSubRoute'
import { SimpleLogin } from './SimpleLogin'
import { PromptForm } from './PromptForm'
import { FourOhFour } from './404'

import MarkdownViewer from '../../components/markdownViewer/markdownViewer'

export class ReactRouterShowcase extends Component {

    render() {
        return (
            <div>ReactRouterShowcase
                <Link to={`${this.props.match.url}/dynamic-sub-route`} >dynamic-sub-route</Link>
                <Link to={`${this.props.match.url}/simple-login`} >Simple login</Link>
                <Link to={`${this.props.match.url}/prompt`} >Prompt</Link>
                <Link to={`${this.props.match.url}/404`} >FourOhFour</Link>

                <Route path={`${this.props.match.url}/dynamic-sub-route`} component={DynamicSubRoute}></Route>
                <Route path={`${this.props.match.url}/simple-login`} component={SimpleLogin}></Route>
                <Route path={`${this.props.match.url}/prompt`} component={PromptForm}></Route>
                <Route path={`${this.props.match.url}/404`} component={FourOhFour}></Route>

                <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/react-router.md'></MarkdownViewer>
            </div>

        )
    }
}

