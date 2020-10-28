import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import Auxilary from '../Auxilary'; 
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'; 

class Layout extends Component {
    state = { 
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => { 
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggle = () => { 
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }); 
    }
    render ()  {
        return (
            <Auxilary>
            <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggle}/>
            <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxilary>
        )
    }
}; 

const mapStateToProps = state => {
    return { 
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout); 