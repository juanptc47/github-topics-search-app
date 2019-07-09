/* 
 * The content in this folder is boilerplate for creating a new screen.
 * Just rename all file names with "BoilerplateScreen" on them for a new screen name.
 * e.g. If you are building NewScreen component, rename BoilerplateScreen.tsx to NewScreen.tsx
 * and BoilerplateScreenStyles.ts to NewScreenStyles.ts
 */ 

 // React
 import * as React from 'react';
 import { RouteComponentProps, } from 'react-router-dom';

 // Styles
import { AppStyles } from '../../AppStyles';

// Redux
import { connect } from 'react-redux';
import { AppState } from '../../redux/store/store-types';

interface BoilerplateScreenProps extends RouteComponentProps {  };
interface BoilerplateScreenState {  };

class BoilerplateScreen extends React.Component<BoilerplateScreenProps, BoilerplateScreenState> {

    state: BoilerplateScreenState = {
        
    }

    render() {
        return (
            <>
                <div style={AppStyles.dummyStyleObject}>This is the app with Redux and React Router!</div>
                <br/>
                <div>Running in {process.env.NODE_ENV} environment</div>
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {

    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BoilerplateScreen);