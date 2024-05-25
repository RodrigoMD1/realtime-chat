import { render } from '@testing-library/react';

import ClientFront from './client-front';

describe('ClientFront', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientFront />);
    expect(baseElement).toBeTruthy();
  });
});
