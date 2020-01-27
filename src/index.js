import React from 'react';
import ReactDOM from 'react-dom';

import {HeaderBar} from '@dhis2/ui-widgets';
import {Provider} from '@dhis2/app-runtime';
import {init, config} from 'd2';

const baseUrl = 'https://newrelease.datim.org/';

config.baseUrl = baseUrl + 'api';
config.i18n.sources.add('i18n.txt');

function HeaderbarPackage(){
    return <Provider config={{baseUrl: baseUrl, apiVersion: '30'}}>
        <HeaderBar/>
    </Provider>
}

init().then(()=>{
    ReactDOM.render(<HeaderbarPackage/>, document.getElementById('header-bar'));
});


