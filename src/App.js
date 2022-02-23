import React from "react";
import {FooComponent} from '@fabpico/test-node-autocomplete-library/dist/components';

function App() {
    // try to autocomplete-import FooComponent that resides in '@fabpico/test-node-autocomplete-library/dist/components'
    return <div>
        <FooComponent/>
    </div>;
}

export default App;
