const assert = require('chai').assert;
const app = require('../index');

describe('Tests function attempt', () => {
  it('Test 1: should return [360]', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [360, 720];
    const preferred = [1080];
    const returns = [360];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 2: should return [720]', () => {
    // Arrange
    const available = [240, 720];
    const allowed = [360, 720];
    const preferred = [1080];
    const returns = [720];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 3: should return []', () => {
    // Arrange
    const available = [240];
    const allowed = [360, 720];
    const preferred = [1080];
    const returns = [];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 4: should return [240, 360]', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [240, 360, 720, 1080];
    const preferred = [240, 360];
    const returns = [240, 360];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 5: should return [240, 720]', () => {
    // Arrange
    const available = [240, 720];
    const allowed = [240, 360, 720, 1080];
    const preferred = [240, 360];
    const returns = [240, 720];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 6: should return [240]', () => {
    // Arrange
    const available = [240, 720];
    const allowed = [240, 360, 1080];
    const preferred = [240, 360];
    const returns = [240];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 7: should return []', () => {
    // Arrange
    const available = [720];
    const allowed = [240, 360, 1080];
    const preferred = [240, 360];
    const returns = [];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 8: should return [360]', () => {
    // Arrange
    const available = [240, 360];
    const allowed = [240, 360];
    const preferred = [720, 1080];
    const returns = [360];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 9: should return [360, 720]', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [360, 'any'];
    const preferred = [360, 720];
    const returns = [360, 720];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 10: should return [240, 360, 720]', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [240, 360, 720];
    const preferred = ['any', 720];
    const returns = [240, 360, 720];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 11: should return [360]', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [360, 1080];
    const preferred = ['any', 720];
    const returns = [360];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });

  it('Test 12: should return []', () => {
    // Arrange
    const available = [240, 360, 720];
    const allowed = [1080];
    const preferred = ['any', 720];
    const returns = [];

    // Act
    const result = app(available, allowed, preferred);

    // Assert
    assert.deepEqual(result, returns);
  });
});
