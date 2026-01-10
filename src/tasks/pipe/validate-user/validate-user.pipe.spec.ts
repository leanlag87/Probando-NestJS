//Este test verifica que el pipe ValidateUserPipe esté definido correctamente.

import { ValidateUserPipe } from './validate-user.pipe';

describe('ValidateUserPipe', () => {
  it('should be defined', () => {
    expect(new ValidateUserPipe()).toBeDefined();
  });
});
