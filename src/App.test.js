import  React from 'react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

test('/about route', () => {
  const {getByText} = render(
  (
    <MemoryRouter initialEntries={['/about']}> <App /></MemoryRouter>
  ));
  expect(getByText('This is the About div.')).toBeInTheDocument();
});

test('navbar links', () => {
  const {getByText} = render(
  (
    <MemoryRouter initialEntries={['/']}> <App /></MemoryRouter>
  ));
  expect(getByText('This is the Home div.')).toBeInTheDocument();
  const link = getByText('contact');
  fireEvent.click(link);
  expect(getByText('This is the Contact page.')).toBeInTheDocument();
});
