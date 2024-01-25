
import PropTypes from 'prop-types';

export const LayoutContent = ({ children }) => {
  return (
    <div className="container-fluid p-0">{ children }</div>
  );
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};
