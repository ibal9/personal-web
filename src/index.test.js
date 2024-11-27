import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn()
}));

describe('Index rendering', () => {
  let mockRoot;
  
  beforeEach(() => {
    mockRoot = {
      render: jest.fn()
    };
    createRoot.mockReturnValue(mockRoot);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders app with Router and StrictMode', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    require('./index.js');

    expect(createRoot).toHaveBeenCalledWith(div);
    expect(mockRoot.render).toHaveBeenCalledTimes(1);
    
    const renderCall = mockRoot.render.mock.calls[0][0];
    expect(renderCall.type).toBe(React.StrictMode);
    expect(renderCall.props.children.type).toBe(Router);
    expect(renderCall.props.children.props.children.type).toBe(App);
  });

  test('throws error when root element is not found', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    require('./index.js');
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
