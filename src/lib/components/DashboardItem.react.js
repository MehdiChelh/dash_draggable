import React from 'react';
import PropTypes from 'prop-types';

import {
    NROWS,
    NCOLS,
} from "../constants"

import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import "./style.css"

/**
 * DashboardItem is a wrapper that is intended to be used with DraggableDashboard 
 * to specify the position and size of the wrapped components.
 */
export default class DashboardItem extends React.Component {
    render() {
        const {children} = this.props
        return children
    }
}

DashboardItem.defaultProps = {
    x: 0,
    y: 0,
    w: NCOLS,
    h: NROWS,
    // DashDraggeble_isDashboardItem: true
};

DashboardItem.propTypes = {
    /**
     * The ID used to identify this component in layout definition.
     */
    i: PropTypes.string,
    
    /**
     * The child or list of children wrapped by the component.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    /**
     * The position on the x axis in number of columns (by default, the  max is 12).
     */
    x: PropTypes.number,
    
    /**
     * The position on the y axis (the unit is 30px, by default)
     */
    y: PropTypes.number,

    /**
     * The width of the x axis (default is 6).
     */
    w: PropTypes.number.isRequired,
    
    /**
     * The height on the of y axis (default is 4)
     */
    h: PropTypes.number.isRequired,
    
    /**
     * If true, equal to `isDraggable: false, isResizable: false`.
     */
    static: PropTypes.bool,
  
    /**
     * If false, will not be draggable. Overrides `static`.
     */
    isDraggable: PropTypes.bool,
    /**
     * If false, will not be resizable. Overrides `static`.
     */
    isResizable: PropTypes.bool,

    isBounded: PropTypes.bool,  
    maxH: PropTypes.number,
    maxW: PropTypes.number,
    minH: PropTypes.number,
    minW: PropTypes.number,
    moved: PropTypes.bool,
    resizeHandles: PropTypes.string,
    
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
