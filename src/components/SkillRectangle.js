// SkillRectangle.js
import React from 'react';
import PropTypes from 'prop-types';

const SkillRectangle = ({ skill }) => {
  return (
    <div className="skill-rectangle">
      {skill}
    </div>
  );
};

SkillRectangle.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillRectangle;
