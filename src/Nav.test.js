import React from 'react';
import Nav from './Nav';

import {MemoryRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
it('renders w/o crashing', ()=> {
    render(<MemoryRouter> <Nav /> </MemoryRouter>)
    
});





