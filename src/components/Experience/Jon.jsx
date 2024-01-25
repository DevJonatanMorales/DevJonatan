import PropTypes from 'prop-types';

export const Jon = ({cargo, empreza, fecha, children}) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{cargo}</h3>
        <div className="subheading mb-3">
          {empreza}
        </div>
        {children}
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{fecha}</span>
      </div>
    </div>
  );
};

Jon.propTypes = {
  cargo: PropTypes.string.isRequired,
  empreza: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
