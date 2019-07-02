import React from 'react';
import PropTypes from 'prop-types';

const MasonryLayout = props => {
    const columnWrapper = {};
    const result = [];
    
    // create columns
    for (let i = 0; i < props.columns; i++) {
      columnWrapper[`column${i}`] = [];
    }
    
    // divide children into columns
    for (let i = 0; i < props.children.length; i++) {
      const columnIndex = i % props.columns;
      columnWrapper[`column${columnIndex}`].push(
        <div style={{ marginBottom: `${props.gap}px`}}>
          {props.children[i]}
        </div>
      );
    }
    
    // wrap children in each column with a div
    for (let i = 0; i < props.columns; i++) {
      result.push(
        <div
          style={{
            marginLeft: `${i > 0 ? props.gap : 0}px`,
            flex: 1,
          }}>
          {columnWrapper[`column${i}`]}
        </div>
      );
    }
  
    return (
      <div style={{ display: 'flex' }}>
        {result}
      </div>
    );
  }
  
  MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };
  
  MasonryLayout.defaultProps = {
    columns: 1,
    gap: 20,
  };

  export default MasonryLayout;
  