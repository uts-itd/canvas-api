import helper from '../src/helper';

describe('Helpers', () => {
  it('creates course SIS ID', () => {
    const result = helper.formatCourseSIS('1234567890');
    expect(result).toBe('sis_course_id:1234567890');
  });

  it('creates user SIS ID', () => {
    const result = helper.formatUserSIS('1234567890');
    expect(result).toBe('sis_user_id:1234567890');
  });

  it('creates term SIS ID', () => {
    const result = helper.formatTermSIS('1234567890');
    expect(result).toBe('sis_term_id:1234567890');
  });
});
